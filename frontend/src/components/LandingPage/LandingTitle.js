import React, { Fragment } from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-family: var(--text-title);
  font-weight: bolder;
`;

export default function LandingTitle() {
  return (
    <Fragment>
      <Title>Transform image quickly</Title>
    </Fragment>
  );
}
