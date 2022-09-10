import React from 'react';
import Grid from '@mui/material/Grid';
import Select from '../components/Select';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { updateFilters } from '../store/schoolLesson/schoolLessonSlice';

const Filters = () => {
  const dispatch = useAppDispatch();

  const {
    lookups: { countries, camps, schools },
    filters,
  } = useAppSelector((state) => state.schoolLesson);

  const handleChange = ({ value, name }: { value: string; name: string }) => {
    const newFilters = { ...filters, [name]: value };
    if (name !== 'school') {
      newFilters.school = 'all';
    }
    dispatch(updateFilters(newFilters));
  };

  return (
    <Grid
      component="section"
      container
      sx={{ mb: 6, mt: 1 }}
      spacing={4}
      justifyContent="space-evenly"
    >
      <Grid item xs={6} sm={4} sx={{ p: 0 }}>
        <Select
          id="countries"
          label="Countries"
          name="country"
          value={filters.country}
          options={countries}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <Select
          id="camps"
          label="Camps"
          name="camp"
          value={filters.camp}
          options={camps}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <Select
          id="schools"
          label="Schools"
          name="school"
          value={filters.school}
          options={schools[`${filters.country}-${filters.camp}`]}
          onChange={handleChange}
          showAll
        />
      </Grid>
    </Grid>
  );
};

export default Filters;
