import styled, { css } from "styled-components";

import { FlexCont } from "shared/styles/styled";
import { devices } from "shared/styles/theme";
import { DynamicButton } from "shared/button/style";

export const AppWrapper = styled.main`
  min-width: 90vw;
  position: relative;

  @media (min-width: ${devices.laptop}) {
    min-width: 50vw;
  }
  @media (min-width: ${devices.tablet}) {
    min-width: 50vw;
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
  ${(props) =>
    props.strike &&
    css`
      text-decoration: line-through;
    `}
`;

export const TodoCont = styled.section`
  ${FlexCont} {
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;
  }

  form {
    ${DynamicButton} {
      margin: 12px 0;
      margin-right: auto;
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
