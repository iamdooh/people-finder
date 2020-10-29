import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Nanum Barun Gothic', sans-serif;
    background-color: #f9fafa;
    font-size: 16px;
    color: #303847;
    text-size-adjust: none;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  input,
  select,
  button {
    font-family: 'Nanum Barun Gothic', sans-serif;
  }

  [type=button]:not(:disabled),
  [type=submit]:not(:disabled),
  button:not(:disabled) {
    cursor: pointer;
  }

  .clearfix:after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
  }

  #root {
    min-width: 320px;
    min-height: 100%;
  }
`;