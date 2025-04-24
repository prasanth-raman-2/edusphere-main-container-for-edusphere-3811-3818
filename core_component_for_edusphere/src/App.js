import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';

// Layout
import DashboardLayout from './components/layout/DashboardLayout';

// Pages
import Landing from './pages/Landing';

// Dashboard Components
import EnrolledCourses from './components/dashboard/EnrolledCourses';
import LearningProgress from './components/dashboard/LearningProgress';
import StatisticsChart from './components/dashboard/StatisticsChart';
import UpcomingAssessments from './components/dashboard/UpcomingAssessments';

// Course Components
import ContentOrganizer from './components/courses/ContentOrganizer';
import CourseForm from './components/courses/CourseForm';
import CourseScheduler from './components/courses/CourseScheduler';
import ResourceLibrary from './components/courses/ResourceLibrary';

// Assessment Components
import AssessmentForm from './components/assessment/AssessmentForm';

// Analytics Components
import ActivityTimeline from './components/analytics/ActivityTimeline';
import LeaderboardComponent from './components/analytics/LeaderboardComponent';
import PerformanceMetrics from './components/analytics/PerformanceMetrics';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  // For demonstration, assuming user is always authenticated
  // In a real app, implement proper authentication check
  const isAuthenticated = true;
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

// Loading Component
const LoadingFallback = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'
    }}
  >
    <CircularProgress />
  </Box>
);

// Dashboard Component
const Dashboard = () => (
  <Suspense fallback={<LoadingFallback />}>
    <div>
      <EnrolledCourses />
      <Box sx={{ mt: 3, display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
        <LearningProgress />
        <UpcomingAssessments />
      </Box>
      <Box sx={{ mt: 3 }}>
        <StatisticsChart title="Learning Statistics" />
      </Box>
    </div>
  </Suspense>
);

// Analytics Component
const Analytics = () => (
  <Suspense fallback={<LoadingFallback />}>
    <Box sx={{ display: 'grid', gap: 3 }}>
      <PerformanceMetrics />
      <Box sx={{ 
        display: 'grid', 
        gap: 3, 
        gridTemplateColumns: { 
          xs: '1fr', 
          md: 'repeat(auto-fit, minmax(300px, 1fr))' 
        } 
      }}>
        <ActivityTimeline />
        <LeaderboardComponent />
      </Box>
    </Box>
  </Suspense>
);

// Courses Component
const Courses = () => (
  <Suspense fallback={<LoadingFallback />}>
    <Box sx={{ display: 'grid', gap: 3 }}>
      <CourseForm />
      <Box sx={{ 
        display: 'grid', 
        gap: 3, 
        gridTemplateColumns: { 
          xs: '1fr',
          lg: '2fr 1fr' 
        } 
      }}>
        <Box sx={{ display: 'grid', gap: 3 }}>
          <ContentOrganizer />
          <ResourceLibrary />
        </Box>
        <CourseScheduler />
      </Box>
    </Box>
  </Suspense>
);

// Assessments Component
const Assessments = () => (
  <Suspense fallback={<LoadingFallback />}>
    <Box sx={{ maxWidth: 'lg', mx: 'auto' }}>
      <AssessmentForm />
    </Box>
  </Suspense>
);

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
          {/* Public Route */}
          <Route path="/" element={<Landing />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          
          <Route path="/courses" element={
            <ProtectedRoute>
              <DashboardLayout>
                <Courses />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          
          <Route path="/assessments" element={
            <ProtectedRoute>
              <DashboardLayout>
                <Assessments />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          
          <Route path="/analytics" element={
            <ProtectedRoute>
              <DashboardLayout>
                <Analytics />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          
          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
