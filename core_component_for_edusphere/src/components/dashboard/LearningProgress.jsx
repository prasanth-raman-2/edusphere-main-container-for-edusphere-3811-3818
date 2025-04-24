import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { styled } from '@mui/material/styles';

const MOCK_PROGRESS = [
  {
    title: 'Completed Web Development Basics',
    date: '2 days ago',
    status: 'completed',
    description: 'Finished HTML, CSS, and JavaScript fundamentals'
  },
  {
    title: 'Data Structures Quiz',
    date: 'In Progress',
    status: 'current',
    description: 'Currently working on algorithms and data structures'
  },
  {
    title: 'Machine Learning Project',
    date: 'Upcoming',
    status: 'upcoming',
    description: 'Starting next week'
  }
];

const StyledTimeline = styled(Timeline)(({ theme }) => ({
  padding: 0,
  '& .MuiTimelineItem-root:before': {
    flex: 0
  }
}));

const getTimelineDotColor = (status) => {
  switch (status) {
    case 'completed':
      return 'success';
    case 'current':
      return 'primary';
    default:
      return 'grey';
  }
};

const LearningProgress = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Learning Progress
        </Typography>
        
        <StyledTimeline>
          {MOCK_PROGRESS.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color={getTimelineDotColor(item.status)} />
                {index < MOCK_PROGRESS.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.date}
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </StyledTimeline>
      </CardContent>
    </Card>
  );
};

export default LearningProgress;
