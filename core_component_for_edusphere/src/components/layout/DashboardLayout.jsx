import React, { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navigation from './Navigation';
import Sidebar from './Sidebar';

const DrawerWidth = 240;

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: DrawerWidth,
  marginTop: 64,
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
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
