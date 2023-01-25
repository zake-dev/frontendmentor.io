import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-family: 'Overpass', sans-serif;
    font-size: 15px;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  a {
    color: black;
    text-decoration: inherit;
  }

  a:hover {
    color: black;
  }

  button {
    font-family: 'Overpass', sans-serif;
    border: none;
  }

  body,
  #root {
    flex: 1;
    display: flex;
    align-items: stretch;
    min-width: 320px;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
