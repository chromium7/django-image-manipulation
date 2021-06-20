import LoadingText from "./LoadingText";
import React from "react";
import Spinner from "./Spinner";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function PageSpinner() {
  return (
    <Container>
      <Spinner />
      <LoadingText />
    </Container>
  );
}
