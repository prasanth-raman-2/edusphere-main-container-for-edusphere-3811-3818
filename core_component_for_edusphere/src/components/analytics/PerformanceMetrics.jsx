import React from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const MOCK_PERFORMANCE_DATA = {
  grades: [
    { subject: 'Web Dev', grade: 85 },
    { subject: 'Data Science', grade: 92 },
    { subject: 'Math', grade: 78 },
    { subject: 'Algorithms', grade: 88 }
  ],
  progress: [
    { month: 'Jan', completed: 5 },
    { month: 'Feb', completed: 8 },
    { month: 'Mar', completed: 12 },
    { month: 'Apr', completed: 15 },
    { month: 'May', completed: 20 }
  ]
};

const MetricCard = ({ title, value, children }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {children}
    </CardContent>
  </Card>
);

const PerformanceMetrics = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <MetricCard title="Course Grades">
          <Box sx={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOCK_PERFORMANCE_DATA.grades}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar
                  dataKey="grade"
                  fill="#2196F3"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </MetricCard>
      </Grid>

      <Grid item xs={12} md={6}>
        <MetricCard title="Learning Progress">
          <Box sx={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={MOCK_PERFORMANCE_DATA.progress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="completed"
                  stroke="#4CAF50"
                  strokeWidth={2}
                  dot={{ fill: '#4CAF50' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </MetricCard>
      </Grid>
    </Grid>
  );
};

export default PerformanceMetrics;
