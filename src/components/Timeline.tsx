import * as React from 'react';
import MUITimeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Typography } from '@mui/material';
import { ITimelinteNode } from '../features/schoolLesson/schoolLesson.types';

interface IProps {
  nodes: ITimelinteNode[];
}

const Timeline: React.FC<IProps> = ({ nodes }) => {
  return (
    <MUITimeline position="alternate">
      {nodes &&
        nodes.map((n) => (
          <TimelineItem key={n.content}>
            <TimelineContent sx={{ px: 2 }}>
              <Typography component="span">{n.content}</Typography>
              <Typography variant="h6">{n.desc}</Typography>
            </TimelineContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineOppositeContent></TimelineOppositeContent>
          </TimelineItem>
        ))}
    </MUITimeline>
  );
};

export default Timeline;
