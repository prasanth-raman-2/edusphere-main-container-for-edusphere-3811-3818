import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from 'react-router-dom';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
  color: '#fff',
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <HeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box className="fadeIn">
                <Typography variant="h1" gutterBottom sx={{ fontWeight: 700 }}>
                  Transform Education with EduSphere
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                  Empower learning through our comprehensive educational platform
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  onClick={() => navigate('/dashboard')}
                  sx={{ mr: 2 }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ color: '#fff', borderColor: '#fff' }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Placeholder for hero image */}
              <Box sx={{ textAlign: 'center' }}>
                <SchoolIcon sx={{ fontSize: 200, opacity: 0.9 }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Features
          </Typography>
          
          <Grid container spacing={4}>
            {[
              {
                title: 'Course Creation',
                description: 'Create and manage courses with our intuitive tools',
              },
              {
                title: 'Progress Tracking',
                description: 'Monitor student progress and performance in real-time',
              },
              {
                title: 'Interactive Assessments',
                description: 'Design engaging assessments and quizzes',
              },
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <FeatureCard className="fadeIn">
                  <Typography variant="h4" gutterBottom color="primary">
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Landing;
