import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Box
} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { format, addDays } from 'date-fns';

const MOCK_ASSESSMENTS = [
  {
    title: 'Web Development Final Project',
    course: 'Introduction to Web Development',
    dueDate: addDays(new Date(), 2),
    type: 'Project',
    status: 'pending'
  },
  {
    title: 'Data Structures Quiz',
    course: 'Computer Science Fundamentals',
    dueDate: addDays(new Date(), 5),
    type: 'Quiz',
    status: 'pending'
  },
  {
    title: 'Mathematics Mid-term',
    course: 'Advanced Mathematics',
    dueDate: addDays(new Date(), 7),
    type: 'Exam',
    status: 'pending'
  }
];

const getStatusColor = (daysUntilDue) => {
  if (daysUntilDue <= 2) return 'error';
  if (daysUntilDue <= 5) return 'warning';
  return 'success';
};

const UpcomingAssessments = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Upcoming Assessments
        </Typography>
        
        <List>
          {MOCK_ASSESSMENTS.map((assessment, index) => {
            const daysUntilDue = Math.ceil(
              (assessment.dueDate - new Date()) / (1000 * 60 * 60 * 24)
            );
            
            return (
              <ListItem 
                key={index}
                divider={index < MOCK_ASSESSMENTS.length - 1}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 1
                }}
              >
                <Box sx={{ 
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center'
                }}>
                  <ListItemIcon>
                    <AssignmentIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={assessment.title}
                    secondary={assessment.course}
                  />
                  <Chip
                    label={`Due in ${daysUntilDue} days`}
                    size="small"
                    color={getStatusColor(daysUntilDue)}
                  />
                </Box>
                <Box sx={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                  pl: 7
                }}>
                  <Typography variant="caption" color="text.secondary">
                    {`Due: ${format(assessment.dueDate, 'MMM dd, yyyy')}`}
                  </Typography>
                  <Chip
                    label={assessment.type}
                    size="small"
                    variant="outlined"
                  />
                </Box>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default UpcomingAssessments;
