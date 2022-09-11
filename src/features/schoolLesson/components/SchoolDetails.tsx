import React from 'react';
import { useParams } from 'react-router';
import { useAppSelector } from '../../../app/hooks';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

interface IItemProps {
  label: string;
  value: string | number;
}

const LabelValue: React.FC<IItemProps> = ({ label, value }) => {
  return (
    <>
      <Stack
        sx={{
          display: 'flex',
          alignItems: 'baseline',
        }}
      >
        <Typography component="span" variant="h6">
          {`${label}: `}
        </Typography>

        <Typography component="span" variant="body1" color="text.secondary" sx={{ px: 1 }}>
          {value}
        </Typography>
      </Stack>
    </>
  );
};

const SchoolDetails = () => {
  const { shcoolName } = useParams();
  const {
    filteredData: { schools },
    filters: { country, camp },
  } = useAppSelector((state) => state.schoolLesson);
  const total = schools[shcoolName as string]?.total;

  return (
    <Grid item sm={4} md={7}>
      <Paper
        sx={{
          px: 4,
          py: 8,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Stack spacing={2} sx={{ px: 4 }}>
          <LabelValue label="Shcool" value={shcoolName as string} />
          <LabelValue label="Country" value={country} />
          <LabelValue label="Camp" value={camp} />
          <LabelValue label="Lessons" value={total} />
        </Stack>
      </Paper>
    </Grid>
  );
};

export default SchoolDetails;
