import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFFFFF;
    --brackground: #E5E5E5;
    --text: #555555;
    --sub-text: #8E8E8E;
    --border: #00000033;
    --element: #F5F5F5;
    --element-highlighted: #167ABC;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--brackground);
    color: var(--text);
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 0.875rem 'PT Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;