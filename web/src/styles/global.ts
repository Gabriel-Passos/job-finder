import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background: ${props => props.theme.colors.background};
  }

  body{
    font: 400 16px Roboto, sans-serif;
  }

  input, button, textarea{
    font: 400 18px Roboto, sans-serif;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }
`;
