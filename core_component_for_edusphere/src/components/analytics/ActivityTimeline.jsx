import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuizIcon from '@mui/icons-material/Quiz';
import ForumIcon from '@mui/icons-material/Forum';

const MOCK_ACTIVITIES = [
  {
    type: 'course',
    title: 'Completed Python Basics',
    time: '2 hours ago',
    description: 'Finished all modules in Python fundamentals',
    icon: <SchoolIcon />
  },
  {
    type: 'assignment',
    title: 'Submitted Final Project',
    time: '5 hours ago',
    description: 'Web Development project submission',
    icon: <AssignmentIcon />
  },
  {
    type: 'quiz',
    title: 'Passed Data Structures Quiz',
    time: 'Yesterday',
    description: 'Scored 92% in the assessment',
    icon: <QuizIcon />
  },
  {
    type: 'discussion',
    title: 'Participated in Discussion',
    time: '2 days ago',
    description: 'Contributed to Algorithm Analysis forum',
    icon: <ForumIcon />
  }
];

const getActivityColor = (type) => {
  switch (type) {
    case 'course':
      return 'primary';
    case 'assignment':
      return 'secondary';
    case 'quiz':
      return 'success';
    case 'discussion':
      return 'info';
    default:
      return 'grey';
  }
};

const ActivityTimeline = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Recent Activity
        </Typography>
        
        <Timeline position="right">
          {MOCK_ACTIVITIES.map((activity, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ flex: 0.2 }}
                color="text.secondary"
              >
                <Typography variant="caption">
                  {activity.time}
                </Typography>
              </TimelineOppositeContent>
              
              <TimelineSeparator>
                <TimelineDot color={getActivityColor(activity.type)}>
                  {activity.icon}
                </TimelineDot>
                {index < MOCK_ACTIVITIES.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              
              <TimelineContent>
                <Box sx={{ pb: 2 }}>
                  <Typography variant="subtitle1">
                    {activity.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {activity.description}
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
};

export default ActivityTimeline;
