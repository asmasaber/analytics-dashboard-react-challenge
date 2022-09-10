import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchSchoolsLessons, formatSchoolData } from '../../services/schools';
import { ISchoolLessonState, Filters, Lookups } from '../../types/ISchoolLesson';

const initialState: ISchoolLessonState = {
  loading: false,
  error: null,
  originalData: [],
  lookups: {} as Lookups,
  filters: {} as Filters,
};

export const loadData = createAsyncThunk(
  'schools/fetch_lessons',
  async () => await fetchSchoolsLessons(),
);

export const schoolLessonSlice = createSlice({
  name: 'schoolLesson',
  initialState,
  reducers: {
    updateFilters: (state, { payload }: PayloadAction<Filters>) => {
      state.filters = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadData.fulfilled, (state, { payload }) => {
        state.originalData = payload;
        const { lookups, filtres } = formatSchoolData(payload);
        state.lookups = lookups;
        state.filters = filtres;
        state.error = null;
        state.loading = false;
      })
      .addCase(loadData.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to Fetch Data...';
      });
  },
});

export const { updateFilters } = schoolLessonSlice.actions;
export default schoolLessonSlice.reducer;
