import styled from "styled-components";

const ErrorPage = () => {
  return (
    <ErrorCont>
      <h1>Error 404</h1>
      <br />

      <h2>Page not found</h2>
    </ErrorCont>
  );
};

export default ErrorPage;

const ErrorCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,
  h2 {
    margin: 0;
  }
  h1 {
    margin-bottom: 4px;
  }
`;
