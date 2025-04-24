import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3', // Blue
      light: '#64B5F6',
      dark: '#1976D2'
    },
    secondary: {
      main: '#4CAF50', // Green
      light: '#81C784',
      dark: '#388E3C'
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#2C3E50',
      secondary: '#707070'
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#2C3E50'
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#2C3E50'
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#2C3E50'
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#2C3E50'
    },
    body1: {
      fontSize: '1rem',
      color: '#2C3E50'
    },
    button: {
      textTransform: 'none',
      fontWeight: 500
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
          }
        },
        contained: {
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
        }
      }
    }
  }
});

export default theme;
