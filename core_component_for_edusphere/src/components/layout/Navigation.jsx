import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
  color: theme.palette.text.primary,
}));

const Navigation = ({ onMenuClick }) => {

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EduSphere
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>

          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: 'primary.main',
              cursor: 'pointer',
            }}
          >
            U
          </Avatar>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navigation;
