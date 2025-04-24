import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Indigo
      light: '#757de8',
      dark: '#002984',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#4CAF50', // Green
      light: '#81c784',
      dark: '#388e3c',
      contrastText: '#ffffff'
    },
    background: {
      default: '#f7f9fc',
      paper: '#ffffff'
    },
    text: {
      primary: '#2c3e50',
      secondary: '#546e7a'
    },
    action: {
      hover: 'rgba(63, 81, 181, 0.04)',
      selected: 'rgba(63, 81, 181, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)'
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
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)'
          }
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
