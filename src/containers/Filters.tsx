import React from 'react';
import Grid from '@mui/material/Grid';

const Select = () => {
  return (
    <Grid
      component="section"
      container
      sx={{ mb: 6, mt: 1 }}
      spacing={4}
      justifyContent="space-evenly"
    >
      <Grid item xs={6} sm={3}>
        Select 1
      </Grid>
      <Grid item xs={6} sm={3}>
        Select 2
      </Grid>
      <Grid item xs={6} sm={3}>
        Select 3
      </Grid>
    </Grid>
  );
};

export default Select;
