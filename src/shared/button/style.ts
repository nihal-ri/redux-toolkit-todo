import { colors, devices } from "shared/styles/theme";
import styled from "styled-components";

interface ButtonProps {
  variant?: string;
}

export const SimpleButton = styled.button`
  padding: 6px 9px;
  color: ${({ theme }) => theme.btntextColor};
  font-weight: 700;
  cursor: pointer;
  &:hover {
    filter: brightness(65%);
  }
  box-shadow: 1px 1px 0px 0px ${({ theme }) => theme.boxShadowColor},
    2px 2px 0px 0px ${({ theme }) => theme.boxShadowColor};
  &:not(:disabled):active {
    box-shadow: 0px 0px 0px 0px;
  }

  &:disabled {
    cursor: not-allowed;
    filter: brightness(70%);
  }

  @media (min-width: ${devices.mobile}) {
    align-self: flex-start;
  }
`;

export const DynamicButton = styled(SimpleButton)<ButtonProps>`
  background-color: ${(props) =>
    props.variant === "success" ? colors.success : "red"};
`;
