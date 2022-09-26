import { PrimaryBtn } from "shared/button/style";
import styled from "styled-components";

export const LoginCont = styled.div`
  font-family: sans-serif;
  padding: 44px;
  max-width: 338px;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.text} 0px 1px 6px 0px;
  input {
    border-top: none;
    border-left: none;
    border-right: none;
    padding: 8px 10px 8px 10px;
    font-size: 16px;
    display: block;
    outline: none;
    border-color: rgba(0, 0, 0, 0.2);
    transition: border 0.5s ease-in-out;
    background: transparent;
    &::placeholder {
      opacity: 0.5;
    }

    &:focus,
    &:hover {
      border-color: rgb(0, 0, 255, 0.6);
    }
  }

  ${PrimaryBtn} {
    margin-top: 30px;
  }
`;

export const InputCont = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 40px;
  margin-top: 40px;
`;
