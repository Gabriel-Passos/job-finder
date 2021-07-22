import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-primary: #0779e4;

    --color-background: #fcfcfc;
    --color-text: #202125;
    --color-subText: #a8a8ae;

    --color-buttonText: #f0f0f9;
    --color-linkButton: #f0f0f9;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  html, body {
    width: 100%;

    -webkit-font-smoothing: antialiased;
    background: var(--color-background);
  }

  body {
    font: 400 16px Roboto, sans-serif;
  }

  input, button, textarea {
    font: 400 18px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
