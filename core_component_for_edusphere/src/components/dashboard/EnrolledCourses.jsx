import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import CourseCard from './CourseCard';

const MOCK_COURSES = [
  {
    title: 'Introduction to Web Development',
    instructor: 'Dr. Sarah Johnson',
    duration: '8 weeks',
    students: 126,
    category: 'Web Development',
    image: 'https://source.unsplash.com/random/?coding'
  },
  {
    title: 'Data Science Fundamentals',
    instructor: 'Prof. Michael Chen',
    duration: '10 weeks',
    students: 89,
    category: 'Data Science',
    image: 'https://source.unsplash.com/random/?data'
  },
  {
    title: 'Advanced Mathematics',
    instructor: 'Dr. Emily Brown',
    duration: '12 weeks',
    students: 64,
    category: 'Mathematics',
    image: 'https://source.unsplash.com/random/?mathematics'
  }
];

const EnrolledCourses = () => {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography 
        variant="h5" 
        gutterBottom 
        sx={{ 
          mb: 4,
          fontWeight: 600,
          fontSize: { xs: '1.5rem', md: '1.75rem' },
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-8px',
            left: 0,
            width: '40px',
            height: '4px',
            backgroundColor: 'primary.main',
            borderRadius: '2px'
          }
        }}
      >
        Enrolled Courses
      </Typography>
      <Grid 
        container 
        spacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="flex-start"
        sx={{ 
          position: 'relative',
          width: '100%',
          margin: '0',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 0%, rgba(63, 81, 181, 0.03) 0%, rgba(63, 81, 181, 0) 70%)',
            zIndex: -1
          }
        }}
      >
        {MOCK_COURSES.map((course, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            key={index}
            sx={{ 
              display: 'flex',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)'
              }
            }}
          >
            <CourseCard {...course} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EnrolledCourses;
