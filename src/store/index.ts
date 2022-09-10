import { configureStore } from '@reduxjs/toolkit';
import schoolLesson from './schoolLesson/schoolLessonSlice';
import theme from './theme/themeSlice';

import storage from 'redux-persist/lib/storage';
import { 
  persistReducer, 
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedThemeReducer = persistReducer(persistConfig, theme);

export const store = configureStore({
  reducer: {
    schoolLesson,
    theme: persistedThemeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
