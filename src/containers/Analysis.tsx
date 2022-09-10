import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

import { monthLabelForChart } from '../utils';
import Chart from '../components/LineChart';
import { useAppSelector } from '../store/hooks';
import SchoolLessonsList from './SchoolLessonsList';
import { ChartData } from '../types/SchoolLesson';

const Analysis = () => {
  const navigate = useNavigate();
  const [chartData, setChartData] = useState<ChartData>([]);

  const {
    filteredData: { schools },
  } = useAppSelector((state) => state.schoolLesson);

  useEffect(() => {
    const data = [] as ChartData;
    for (const school in schools) {
      if (schools[school].selected) {
        data.push({
          label: school,
          data: Object.values(schools[school].months),
          borderColor: schools[school].color,
        });
      }
    }
    setChartData(data);
  }, [schools]);

  const handleChartClick = (chartDataIndex: number) => {
    const schoolName = chartData[chartDataIndex].label;
    navigate(`/details/${schoolName}`);
  };

  return (
    <Grid container component="section">
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Chart labels={monthLabelForChart} datasets={chartData} onClick={handleChartClick} />
        </Paper>
      </Grid>
      {/* Schools Lessons List */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <SchoolLessonsList />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Analysis;
