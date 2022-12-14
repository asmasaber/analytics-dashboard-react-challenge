import React from 'react';
import Container from '@mui/material/Container';

import Loading from '../components/Loading';
import Filters from '../features/schoolLesson/components/Filters';
import Analysis from '../features/schoolLesson/components/Analysis';
import { useAppSelector } from '../app/hooks';

const Dashboard = () => {
  const { loading, error, originalData } = useAppSelector((state) => state.schoolLesson);

  return (
    <>
      {loading && <Loading />}
      {!loading && error && <p>{error}</p>}
      {/* Main */}
      {!loading && originalData.length && (
        <Container component="main" maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          {/* Filters */}
          <Filters />
          {/* Analysis Section */}
          <Analysis />
        </Container>
      )}
    </>
  );
};

export default Dashboard;
