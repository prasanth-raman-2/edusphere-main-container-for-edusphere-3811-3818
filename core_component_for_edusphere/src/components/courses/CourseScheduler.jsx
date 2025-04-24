import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Chip,
  IconButton,
  Tooltip
} from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import TimerIcon from '@mui/icons-material/Timer';
import GroupIcon from '@mui/icons-material/Group';
import EditIcon from '@mui/icons-material/Edit';

const MOCK_SCHEDULE = {
  'Week 1': [
    {
      title: 'Introduction to HTML',
      type: 'Lecture',
      duration: '2 hours',
      students: 45,
      time: '10:00 AM'
    },
    {
      title: 'CSS Basics Workshop',
      type: 'Workshop',
      duration: '1.5 hours',
      students: 38,
      time: '2:00 PM'
    }
  ],
  'Week 2': [
    {
      title: 'JavaScript Fundamentals',
      type: 'Lecture',
      duration: '2 hours',
      students: 42,
      time: '11:00 AM'
    },
    {
      title: 'Programming Exercise',
      type: 'Practice',
      duration: '1 hour',
      students: 40,
      time: '3:00 PM'
    }
  ],
  'Week 3': [
    {
      title: 'Responsive Design',
      type: 'Lecture',
      duration: '2 hours',
      students: 41,
      time: '10:00 AM'
    },
    {
      title: 'Project Work',
      type: 'Project',
      duration: '3 hours',
      students: 35,
      time: '2:00 PM'
    }
  ]
};

const getTypeColor = (type) => {
  switch (type.toLowerCase()) {
    case 'lecture':
      return 'primary';
    case 'workshop':
      return 'secondary';
    case 'practice':
      return 'success';
    case 'project':
      return 'error';
    default:
      return 'default';
  }
};

const CourseScheduler = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const weeks = Object.keys(MOCK_SCHEDULE);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Course Schedule
        </Typography>

        <Tabs
          value={currentWeek}
          onChange={(_, newValue) => setCurrentWeek(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ mb: 3 }}
        >
          {weeks.map((week, index) => (
            <Tab key={index} label={week} />
          ))}
        </Tabs>

        <List>
          {MOCK_SCHEDULE[weeks[currentWeek]].map((session, index) => (
            <ListItem
              key={index}
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                mb: 1,
                '&:last-child': { mb: 0 }
              }}
            >
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Typography variant="subtitle1">
                      {session.title}
                    </Typography>
                    <Chip
                      label={session.type}
                      size="small"
                      color={getTypeColor(session.type)}
                    />
                  </Box>
                }
                secondary={
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    color: 'text.secondary'
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <TodayIcon fontSize="small" />
                      <Typography variant="body2">{session.time}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <TimerIcon fontSize="small" />
                      <Typography variant="body2">{session.duration}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <GroupIcon fontSize="small" />
                      <Typography variant="body2">{session.students} students</Typography>
                    </Box>
                  </Box>
                }
              />
              <Tooltip title="Edit Session">
                <IconButton size="small">
                  <EditIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default CourseScheduler;
