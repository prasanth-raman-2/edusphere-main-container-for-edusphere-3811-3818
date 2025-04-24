import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import GlobalStyles from './styles/globalStyles';
import ErrorBoundary from './components/common/ErrorBoundary';
import App from './App';

const Wrapper = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default Wrapper;
