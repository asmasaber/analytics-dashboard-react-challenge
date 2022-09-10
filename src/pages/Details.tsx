import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAppSelector } from '../store/hooks';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Timeline from '../components/Timeline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SchoolDetails from '../containers/SchoolDetails';
import { ITimelinteNode } from '../types/SchoolLesson';

const Details = () => {
  const { shcoolName } = useParams();
  const [timelineNodes, setTimelineNodes] = useState<ITimelinteNode[]>([]);

  const {
    filteredData: { schools },
  } = useAppSelector((state) => state.schoolLesson);
  const months = schools[shcoolName as string]?.months;

  useEffect(() => {
    const nodes = [] as ITimelinteNode[];

    for (const m in months) {
      if (months[m]) {
        nodes.push({
          content: m,
          desc: months[m],
        });
      }
    }

    setTimelineNodes(nodes);
  }, [months]);
  return (
    <Container component="main" maxWidth="md" sx={{ mt: 4, mb: 4, alignContent: 'center' }}>
      <Grid container>
        <SchoolDetails />
        <Grid item xs={12} sm={8} md={5}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                alignItems: 'center',
              }}
            >
              {timelineNodes && <Timeline nodes={timelineNodes} />}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Details;
