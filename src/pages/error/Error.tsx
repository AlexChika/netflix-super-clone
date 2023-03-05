import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Wrapper>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Wrapper>
  );
};

export default ErrorPage;

const Wrapper = styled.section``;
