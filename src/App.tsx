import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { useAppDispatch, useAppSelector } from './store/hooks';
import { loadData } from './store/schoolLesson/schoolLessonSlice';
import Dashboard from './pages/Dashboard';
import theme from './theme';

const App = () => {
  const dispatch = useAppDispatch();

  const { loading, originalData } = useAppSelector((state) => state.schoolLesson);

  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading && <h6>Loading...</h6>}
      {!loading && originalData.length && <Dashboard />}
    </ThemeProvider>
  );
};

export default App;
