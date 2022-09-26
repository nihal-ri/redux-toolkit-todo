import styled from "styled-components";

export const ProfileCont = styled.div`
  width: max-content;
  margin: 0 auto;

  main {
    display: grid;
    grid-template-columns: 1fr max-content;

    button {
      padding: 2px 12px;
    }
  }
  h3 {
    margin-bottom: 8px;
  }

  dl {
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin: 5px 0;
  }

  dt {
    color: #666;
    font-weight: 700;
  }

  input {
    background: transparent;
  }
`;

export const Title = styled.h4`
  text-transform: uppercase;
  margin-bottom: 10px;
`;
