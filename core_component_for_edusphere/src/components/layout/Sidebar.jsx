import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router-dom';

const DrawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: DrawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: DrawerWidth,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingTop: 0,
    marginTop: theme.spacing(8), // 64px, consistent with AppBar height
    height: `calc(100% - ${theme.spacing(8)})`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up('lg')]: {
      borderRight: `1px solid ${theme.palette.divider}`,
      boxShadow: theme.shadows[1],
    },
  },
}));

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Courses', icon: <SchoolIcon />, path: '/courses' },
  { text: 'Assessments', icon: <AssignmentIcon />, path: '/assessments' },
  { text: 'Analytics', icon: <BarChartIcon />, path: '/analytics' },
  { text: 'Students', icon: <PeopleIcon />, path: '/students' },
];

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();

  return (
    <StyledDrawer
      variant="permanent"
      open={open}
      onClose={onClose}
    >
      <Box sx={{ p: 2.5, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 600, ml: 1 }}>
          EduSphere
        </Typography>
      </Box>
      
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => navigate(item.path)}
            sx={{
              py: 1.5,
              px: 2.5,
              '&:hover': {
                backgroundColor: 'primary.light',
                '& .MuiListItemIcon-root': {
                  color: 'primary.main',
                },
              },
            }}
          >
            <ListItemIcon sx={{ color: 'text.primary' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;
