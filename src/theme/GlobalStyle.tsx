import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "PretendardVariable";
    src: url('./"PretendardVariable.ttf');
    font-weight: 100 900;
  }
  * {
      margin: 0;
      border: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "PretendardVariable";
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
