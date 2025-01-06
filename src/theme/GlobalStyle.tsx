import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      border: 0;
      padding: 0;
      box-sizing: border-box;
  }
  menu, ol, ul {
    list-style: none;
  }

  a {
    text-decoration:none;
  }
  button {
    cursor: pointer;
    outline: none;
    &:active {
      border: none;
      outline: none;
    }
  }
`;
