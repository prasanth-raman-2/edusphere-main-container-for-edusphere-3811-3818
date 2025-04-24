import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  TextField,
  InputAdornment,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Tooltip
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
import CodeIcon from '@mui/icons-material/Code';
import DownloadIcon from '@mui/icons-material/Download';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MOCK_RESOURCES = [
  {
    id: 1,
    title: 'Complete Web Development Guide',
    type: 'pdf',
    size: '2.5 MB',
    tags: ['web', 'programming'],
    downloads: 145
  },
  {
    id: 2,
    title: 'JavaScript Fundamentals',
    type: 'video',
    size: '350 MB',
    tags: ['javascript', 'programming'],
    downloads: 89
  },
  {
    id: 3,
    title: 'CSS Styling Best Practices',
    type: 'article',
    size: '500 KB',
    tags: ['css', 'design'],
    downloads: 234
  },
  {
    id: 4,
    title: 'React Components Example',
    type: 'code',
    size: '50 KB',
    tags: ['react', 'javascript'],
    downloads: 167
  },
  {
    id: 5,
    title: 'Database Design Patterns',
    type: 'pdf',
    size: '1.8 MB',
    tags: ['database', 'architecture'],
    downloads: 123
  },
  {
    id: 6,
    title: 'API Integration Tutorial',
    type: 'video',
    size: '280 MB',
    tags: ['api', 'backend'],
    downloads: 78
  }
];

const getResourceIcon = (type) => {
  switch (type) {
    case 'pdf':
      return <PictureAsPdfIcon color="error" />;
    case 'video':
      return <VideocamIcon color="primary" />;
    case 'article':
      return <ArticleIcon color="info" />;
    case 'code':
      return <CodeIcon color="success" />;
    default:
      return <ArticleIcon />;
  }
};

const ResourceCard = ({ resource }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)'
        }
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
          <Box sx={{ mr: 1.5 }}>
            {getResourceIcon(resource.type)}
          </Box>
          
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1" gutterBottom>
              {resource.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {resource.size} · {resource.downloads} downloads
            </Typography>
          </Box>

          <IconButton
            size="small"
            onClick={handleMenuOpen}
          >
            <MoreVertIcon fontSize="small" />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Share</MenuItem>
            <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
            <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
          </Menu>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {resource.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              variant="outlined"
            />
          ))}
        </Box>
      </CardContent>

      <Box
        sx={{
          p: 2,
          borderTop: '1px solid',
          borderTopColor: 'divider',
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Tooltip title="Download">
          <IconButton size="small">
            <DownloadIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </Card>
  );
};

const ResourceLibrary = () => {
  return (
    <Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3
      }}>
        <Typography variant="h6">
          Resource Library
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            size="small"
            placeholder="Search resources..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />

          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {MOCK_RESOURCES.map((resource) => (
          <Grid item xs={12} sm={6} md={4} key={resource.id}>
            <ResourceCard resource={resource} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ResourceLibrary;
