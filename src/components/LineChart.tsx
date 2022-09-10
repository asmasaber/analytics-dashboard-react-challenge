import React, { MouseEvent, useRef } from 'react';
import Box from '@mui/material/Box';
import { Line, getElementAtEvent } from 'react-chartjs-2';
import type { ChartData } from '../types/SchoolLesson';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

interface IPops {
  id?: string;
  labels: string[];
  datasets: ChartData;
  onClick: (datasetIndex: number) => void;
}

const LineChart: React.FC<IPops> = ({ labels, datasets, onClick, id = 'line-chart' }) => {
  const chartRef = useRef<ChartJS<'line'>>(null);

  const handleClick = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;
    if (!chart) return;

    const elementsAtEvent = getElementAtEvent(chart, event);
    if (elementsAtEvent && elementsAtEvent.length) {
      onClick(elementsAtEvent[0].datasetIndex);
    }
  };

  return (
    <Box data-testid={`${id}-testid`}>
      <Line ref={chartRef} data={{ labels, datasets }} onClick={handleClick} />
    </Box>
  );
};

export default LineChart;
