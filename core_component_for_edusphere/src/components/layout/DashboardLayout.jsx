import React, { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navigation from './Navigation';
import Sidebar from './Sidebar';

const DrawerWidth = 240;

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
  minHeight: 'calc(100vh - 64px)',
  maxWidth: '1600px',
  marginTop: theme.spacing(8), // 64px, consistent with AppBar height
  padding: theme.spacing(2),
  transition: theme.transitions.create(['margin', 'width', 'padding'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.up('xs')]: {
    width: `calc(100% - ${DrawerWidth}px)`,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${DrawerWidth}px)`,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  [theme.breakpoints.up('md')]: {
    width: `calc(100% - ${DrawerWidth}px)`,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DrawerWidth}px)`,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Navigation onMenuClick={toggleSidebar} />
      <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
      <Main className="fadeIn">
        {children}
      </Main>
    </Box>
  );
};

export default DashboardLayout;
