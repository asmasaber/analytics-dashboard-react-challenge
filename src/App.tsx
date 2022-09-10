import React, { Suspense, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes, Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Headers from './containers/Headers';
import Loading from './components/Loading';

import { useAppDispatch } from './store/hooks';
import { loadData } from './store/schoolLesson/schoolLessonSlice';
import theme from './theme';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Details = React.lazy(() => import('./pages/Details'));

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        {/* Header */}
        <Headers />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="details/:shcoolName" element={<Details />} />
          </Routes>
        </Suspense>
      </Box>
    </ThemeProvider>
  );
};

export default App;
