import React, { Suspense, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Box from '@mui/material/Box';
import Headers from './containers/Headers';
import Loading from './components/Loading';

import { useAppDispatch, useAppSelector } from './store/hooks';
import { loadData } from './store/schoolLesson/schoolLessonSlice';
import { toggleTheme } from './store/theme/themeSlice';
import Fab from '@mui/material/Fab';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Details = React.lazy(() => import('./pages/Details'));

const App = () => {
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector((state) => state.theme);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode || (prefersDarkMode ? 'dark' : 'light'),
          primary: {
            main: '#9066ad',
          },
        },
      }),
    [prefersDarkMode, mode],
  );

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

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
        <Fab
          size="small"
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
          }}
          onClick={handleToggleTheme}
        >
          {mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
        </Fab>
      </Box>
    </ThemeProvider>
  );
};

export default App;
