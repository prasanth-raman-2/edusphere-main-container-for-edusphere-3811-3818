import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
  Paper,
  Box,
  Chip,
  Tooltip
} from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import DescriptionIcon from '@mui/icons-material/Description';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import QuizIcon from '@mui/icons-material/Quiz';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const MOCK_MODULES = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    items: [
      { id: 1, type: 'document', title: 'Course Overview', duration: '10 mins' },
      { id: 2, type: 'video', title: 'Setting Up Your Environment', duration: '15 mins' },
      { id: 3, type: 'quiz', title: 'Environment Setup Quiz', duration: '20 mins' }
    ]
  },
  {
    id: 2,
    title: 'HTML Fundamentals',
    items: [
      { id: 4, type: 'video', title: 'HTML Basics', duration: '25 mins' },
      { id: 5, type: 'document', title: 'HTML Tags Reference', duration: '15 mins' },
      { id: 6, type: 'quiz', title: 'HTML Practice Test', duration: '30 mins' }
    ]
  },
  {
    id: 3,
    title: 'CSS Styling',
    items: [
      { id: 7, type: 'video', title: 'CSS Introduction', duration: '20 mins' },
      { id: 8, type: 'document', title: 'CSS Properties Guide', duration: '15 mins' },
      { id: 9, type: 'quiz', title: 'CSS Styling Quiz', duration: '25 mins' }
    ]
  }
];

const getItemIcon = (type) => {
  switch (type) {
    case 'document':
      return <DescriptionIcon />;
    case 'video':
      return <VideoLibraryIcon />;
    case 'quiz':
      return <QuizIcon />;
    default:
      return <DescriptionIcon />;
  }
};

const getTypeColor = (type) => {
  switch (type) {
    case 'document':
      return 'primary';
    case 'video':
      return 'secondary';
    case 'quiz':
      return 'success';
    default:
      return 'default';
  }
};

const ContentOrganizer = () => {
  const [modules] = useState(MOCK_MODULES);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Course Content
        </Typography>

        {modules.map((module) => (
          <Paper
            key={module.id}
            elevation={0}
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              mb: 2,
              '&:last-child': { mb: 0 }
            }}
          >
            <Box
              sx={{
                p: 2,
                backgroundColor: 'background.default',
                borderTopLeftRadius: 1,
                borderTopRightRadius: 1,
                borderBottom: '1px solid',
                borderBottomColor: 'divider',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <DragIndicatorIcon color="action" />
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {module.title}
              </Typography>
            </Box>

            <List sx={{ py: 0 }}>
              {module.items.map((item, index) => (
                <ListItem
                  key={item.id}
                  sx={{
                    borderBottom: index < module.items.length - 1 ? '1px solid' : 'none',
                    borderBottomColor: 'divider',
                    '&:hover': {
                      backgroundColor: 'action.hover'
                    }
                  }}
                >
                  <ListItemIcon>
                    {getItemIcon(item.type)}
                  </ListItemIcon>
                  
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body1">
                          {item.title}
                        </Typography>
                        <Chip
                          label={item.type}
                          size="small"
                          color={getTypeColor(item.type)}
                        />
                      </Box>
                    }
                    secondary={`Duration: ${item.duration}`}
                  />

                  <ListItemSecondaryAction>
                    <Tooltip title="Edit">
                      <IconButton size="small" sx={{ mr: 1 }}>
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton size="small">
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Paper>
        ))}
      </CardContent>
    </Card>
  );
};

export default ContentOrganizer;
