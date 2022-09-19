import styled from "styled-components";

/* ================== Flex Container ================ */

export const FlexCont = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexColCont = styled(FlexCont)`
  flex-direction: column;
`;

export const FlexCenterCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexSBCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
