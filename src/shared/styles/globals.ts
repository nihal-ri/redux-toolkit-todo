import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    width:100vw;
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

    input{
    color: ${({ theme }) => theme.text};

    }
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  transition: background-color 0.50s linear;

  *{
    box-sizing: border-box;
  }

  p{
    margin: 0;
    padding: 0;
  }


}
ul{
    padding:0;
    list-style:none;
}
`;
