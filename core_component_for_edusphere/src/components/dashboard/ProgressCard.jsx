import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: theme.palette.grey[200],
  '& .MuiLinearProgress-bar': {
    borderRadius: 4,
  },
}));

const ProgressCard = ({ title, value, total, color = 'primary' }) => {
  const progress = (value / total) * 100;

  return (
    <Card className="card-hover">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        
        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Progress
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {value}/{total}
            </Typography>
          </Box>
          
          <StyledLinearProgress 
            variant="determinate" 
            value={progress} 
            color={color}
            className="progress-bar"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProgressCard;
