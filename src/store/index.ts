import { configureStore } from '@reduxjs/toolkit';
import schoolLesson from './schoolLesson/schoolLessonSlice';

export const store = configureStore({
  reducer: {
    schoolLesson,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
