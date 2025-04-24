import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)',
    zIndex: 1,
    transition: 'opacity 0.3s ease-in-out',
  },
  '&:hover::before': {
    opacity: 0.7,
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
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <StyledCard>
      {!imageLoaded && (
        <Skeleton 
          variant="rectangular" 
          height={200}
          animation="wave"
          sx={{ position: 'absolute', top: 0, left: 0, right: 0 }}
        />
      )}
      <StyledCardMedia
        component="img"
        image={image || ''}
        alt={title}
        onLoad={() => setImageLoaded(true)}
        sx={{ display: imageLoaded ? 'block' : 'none' }}
      />
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ mb: 2 }}>
          <Chip
            label={category}
            size="small"
            color="primary"
            sx={{ 
              mr: 1,
              fontWeight: 500,
              borderRadius: '16px',
              boxShadow: '0 2px 4px rgba(63, 81, 181, 0.1)'
            }}
          />
        </Box>
        
        <Typography 
          gutterBottom 
          variant="h6" 
          component="div"
          sx={{ 
            fontWeight: 600,
            fontSize: '1.25rem',
            lineHeight: 1.4,
            mb: 1
          }}
        >
          {title}
        </Typography>

        <Typography 
          variant="body2" 
          color="text.secondary" 
          gutterBottom
          sx={{ 
            fontSize: '0.875rem',
            mb: 2
          }}
        >
          {instructor}
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          mt: 'auto',
          pt: 2,
          borderTop: '1px solid',
          borderColor: 'divider'
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
