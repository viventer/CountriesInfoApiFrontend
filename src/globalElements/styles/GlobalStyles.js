import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Ubuntu', sans-serif;
    color: white;
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
