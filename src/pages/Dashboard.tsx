import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Headers from '../containers/Headers';
import Filters from '../containers/Filters';
import Analysis from '../containers/Analysis';

const Dashboard = () => {
  return (
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

      {/* Main */}
      <Container component="main" maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        {/* Filters */}
        <Filters />
        {/* Analysis Section */}
        <Analysis />
      </Container>
    </Box>
  );
};

export default Dashboard;
