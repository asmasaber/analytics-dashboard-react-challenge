import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchSchoolsLessons, formatSchoolData, filterSchools } from './schools.service';
import ISchoolLesson, { ISchoolLessonState, IFilters, ILookups } from './schoolLesson.types';

const initialState: ISchoolLessonState = {
  loading: false,
  error: null,
  originalData: [],
  lookups: {} as ILookups,
  filters: {} as IFilters,
  filteredData: {
    schools: {},
    total: 0,
  },
};

export const loadData = createAsyncThunk<ISchoolLesson[]>(
  'schools/fetch_lessons',
  async () => await fetchSchoolsLessons(),
);

export const schoolLessonSlice = createSlice({
  name: 'schoolLesson',
  initialState,
  reducers: {
    updateFilters: (state, { payload }: PayloadAction<IFilters>) => {
      const countryCampSchools = filterSchools(state.originalData, payload);
      state.filters = payload;
      state.filteredData = countryCampSchools;
    },
    toggleSelectedSchools: (state, { payload: school }: PayloadAction<string>) => {
      state.filteredData.schools[school].selected = !state.filteredData?.schools[school]?.selected;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadData.fulfilled, (state, { payload }) => {
        const { lookups, filters, filteredData } = formatSchoolData(payload);
        state.originalData = payload;
        state.lookups = lookups;
        state.filters = filters;
        state.filteredData = filteredData;
        state.error = null;
        state.loading = false;
      })
      .addCase(loadData.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to Fetch Data...';
      });
  },
});

export const { updateFilters, toggleSelectedSchools } = schoolLessonSlice.actions;
export default schoolLessonSlice.reducer;
