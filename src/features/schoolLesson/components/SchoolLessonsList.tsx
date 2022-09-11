import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { toggleSelectedSchools } from '../schoolLesson.slice';
import Toggle from '../../../components/Toggle';

interface TotalIProp {
  total: string | number;
  camp: string;
  color: string;
}

const Total: React.FC<TotalIProp> = ({ total, camp, color = 'primary' }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'baseline',
        }}
      >
        <Typography component="span" variant="h5" color={color}>
          {`${total} `}
        </Typography>

        <Typography component="span" variant="body1" color={color} sx={{ px: 1 }}>
          Lessons
        </Typography>
      </Box>
      <Typography variant="subtitle2" component="span" color={color} style={{ marginTop: 0 }}>
        in {camp}
      </Typography>
    </>
  );
};

const SchoolLessonsList = () => {
  const dispatch = useAppDispatch();

  const {
    filteredData: { schools, total },
    filters: { camp },
  } = useAppSelector((state) => state.schoolLesson);

  const handleChange = (school: string) => {
    dispatch(toggleSelectedSchools(school));
  };

  return (
    <Stack spacing={2} sx={{ padding: 4 }}>
      <Total total={total} camp={camp} color="text.secondary" />
      {Object.keys(schools).map((s) => (
        <Toggle
          key={s}
          label={
            <Total
              total={schools[s].total}
              camp={s}
              color={schools[s].selected ? schools[s].color : 'text.secondary'}
            />
          }
          value={schools[s].selected}
          color={schools[s].color}
          onChange={() => handleChange(s)}
        />
      ))}
    </Stack>
  );
};

export default SchoolLessonsList;
