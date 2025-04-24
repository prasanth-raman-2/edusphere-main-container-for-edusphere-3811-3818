import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const CourseCard = ({ 
  title, 
  instructor, 
  duration, 
  students,
  image,
  category 
}) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="140"
        image={image || 'https://source.unsplash.com/random/?education'}
        alt={title}
      />
      <CardContent>
        <Box sx={{ mb: 1 }}>
          <Chip
            label={category}
            size="small"
            color="primary"
            sx={{ mr: 1 }}
          />
        </Box>
        
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          {instructor}
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          mt: 2
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AccessTimeIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {duration}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PersonOutlineIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {students} students
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default CourseCard;
