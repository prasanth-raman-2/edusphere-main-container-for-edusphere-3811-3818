import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F5F5F5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .fadeIn {
    animation: fadeIn 0.3s ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .card-hover {
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: translateY(-4px);
    }
  }

  .progress-bar {
    transition: width 0.6s ease;
  }
`;

export default GlobalStyles;
