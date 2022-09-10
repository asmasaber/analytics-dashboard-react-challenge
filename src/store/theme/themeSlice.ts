import { createSlice } from '@reduxjs/toolkit';
import { IThemeState } from '../../types/Theme';

const initialState = {
  mode: 'dark',
} as IThemeState;

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
