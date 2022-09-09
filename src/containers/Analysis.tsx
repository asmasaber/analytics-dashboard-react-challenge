import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Analysis = () => {
  return (
    <Grid container component="section">
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 600,
          }}
        >
          Chart Component
        </Paper>
      </Grid>
      {/* Schools Lessons List */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 600,
          }}
        >
          Schools Lessons List
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Analysis;
