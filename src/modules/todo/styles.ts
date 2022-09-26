import styled, { css } from "styled-components";

import { FlexCont } from "shared/styles/styled";
import { devices } from "shared/styles/theme";
import { DynamicButton, PrimaryBtn } from "shared/button/style";

export const AppWrapper = styled.main`
  min-width: 90vw;
  position: relative;
  & > h1 {
    margin-left: 6px;
  }

  nav {
    padding-bottom: 60px;

    ${PrimaryBtn} {
      width: max-content;
      padding: 8px 14px;
      margin-left: auto;
    }
  }

  @media (min-width: ${devices.laptop}) {
    min-width: 50vw;
  }

  @media (min-width: ${devices.tablet}) {
    min-width: 50vw;
  }
`;

export const ButtonWrap = styled.div`
  width: max-content;
  margin-left: auto;
  margin-right: 60px;

  a {
    display: block;
    margin-top: 8px;
    text-decoration: none;
    span {
      text-transform: lowercase;
    }
  }
`;

export const MyInput = styled.input`
  padding: 8px 10px;
  font-size: 1.3rem;
  margin-bottom: 10px;
  border: none;
  outline: none;
  display: block;
  width: 97%;
`;

export const PositionDiv = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;

  button {
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background: transparent;
    img {
      transition: all 0.25s ease;
      width: 20px;
      height: 25px;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

interface ListText {
  strike?: boolean;
}

export const MyListItem = styled.li<ListText>`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  font-size: 1.2rem;
  margin-left: 8px;
  ${(props) =>
    props.strike &&
    css`
      text-decoration: line-through;
    `}
`;

export const TodoCont = styled.section`
  form {
    ${DynamicButton} {
      margin: 12px 0;
      margin-right: auto;
    }
  }
  ${FlexCont} {
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;

    & > button {
      margin-left: 8px;
    }
  }
`;

export const MyStack = styled(FlexCont)``;

export const ButtonCont = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 10px;
  align-items: center;

  .round {
    padding: 4px 8px;
    border-radius: 50%;
    display: block;
    align-self: center;
    img {
      width: 20px;
      height: 25px;
    }
  }
`;
