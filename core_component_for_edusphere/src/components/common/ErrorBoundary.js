// import React from 'react';
// import PropTypes from 'prop-types';
// import { Box, Typography, Button } from '@mui/material';

// // /**
//  * @typedef {Object} ErrorBoundaryProps
//  * @property {React.ReactNode} children - Child components to be rendered
//  */

// /**
//  * @typedef {Object} ErrorBoundaryState
//  * @property {boolean} hasError - Indicates if an error has occurred
//  * @property {Error|null} error - The error object if an error occurred
//  * @property {React.ErrorInfo|null} errorInfo - Additional error information
//  */

// /**
//  * PUBLIC_INTERFACE
//  * ErrorBoundary component that catches JavaScript errors anywhere in their child
//  * component tree, logs those errors, and displays a fallback UI instead of the
//  * component tree that crashed.
//  * 
//  * @component
//  * @extends {React.Component<ErrorBoundaryProps, ErrorBoundaryState>}
//  */
// class ErrorBoundary extends React.Component {
//   /**
//    * @constructor
//    * @param {ErrorBoundaryProps} props - Component props
//    */
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false, error: null, errorInfo: null };
//   }

//   /**
//    * Updates state when an error occurs during rendering
//    * @static
//    * @param {Error} error - The error that was thrown
//    * @returns {ErrorBoundaryState} New state to update the component
//    */
//   static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true, error };
//   }

//   /**
//    * Handles errors caught during rendering
//    * @param {Error} error - The error that was thrown
//    * @param {React.ErrorInfo} errorInfo - Additional error information
//    */
//   componentDidCatch(error, errorInfo) {
//     // Log the error to an error reporting service
//     const errorDetails = {
//       error: error.toString(),
//       componentStack: errorInfo.componentStack,
//       timestamp: new Date().toISOString(),
//     };
    
//     // You can integrate with your error reporting service here
//     console.error('ErrorBoundary caught an error:', errorDetails);
    
//     this.setState({
//       error,
//       errorInfo
//     });
//   }

//   /**
//    * Resets the error state and attempts to re-render the children
//    * @private
//    */
//   handleReset = () => {
//     this.setState({ hasError: false, error: null, errorInfo: null });
//   };

//   render() {
//     if (this.state.hasError) {
//       return (
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             minHeight: '100vh',
//             padding: 3,
//             textAlign: 'center'
//           }}
//         >
//           <Typography variant=\"h4\" component=\"h1\" gutterBottom color=\"error\">
//             Oops! Something went wrong.
//           </Typography>
//           <Typography variant=\"body1\" color=\"text.secondary\" paragraph>
//             We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
//           </Typography>
//           <Button
//             variant=\"contained\"
//             color=\"primary\"
//             onClick={this.handleReset}
//             sx={{ mt: 2 }}
//           >
//             Try Again
//           </Button>
//           {process.env.NODE_ENV === 'development' && (
//             <Box sx={{ mt: 4, textAlign: 'left', maxWidth: '800px' }}>
//               <Typography variant=\"h6\" color=\"error\" gutterBottom>
//                 Error Details:
//               </Typography>
//               <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
//                 {this.state.error && this.state.error.toString()}
//               </pre>
//               {this.state.errorInfo && (
//                 <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
//                   {this.state.errorInfo.componentStack}
//                 </pre>
//               )}
//             </Box>
//           )}
//         </Box>
//       );
//     }

//     return this.props.children;
//   }
// }

// ErrorBoundary.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default ErrorBoundary;
// // ", "explanation": "Created the ErrorBoundary component with the following features:
// // - Error state management
// // - Error catching and logging
// // - Fallback UI with error details (in development)
// // - Reset functionality
// // - Material-UI components for styling"}