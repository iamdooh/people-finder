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
    background-color: #ddd;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  input {
    font-family: inherit;
  }

  .clearfix:after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
  }
`;