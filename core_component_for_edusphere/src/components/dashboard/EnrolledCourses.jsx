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
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Enrolled Courses
      </Typography>
      <Grid container spacing={3}>
        {MOCK_COURSES.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CourseCard {...course} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EnrolledCourses;
