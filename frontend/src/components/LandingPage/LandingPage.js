import React from "react";
import lineBg from "../../../static/images/line-background.svg";
import LandingTitle from "./LandingTitle";

import { slideIn } from "../UI/animations";
import styled from "styled-components";

const Hello = styled.div`
  animation: ${slideIn} var(--animation-duration)
    var(--animation-timing-function);
`;

const Background = styled.div`
  background-image: url(${lineBg});
  background-repeat: no-repeat;
  background-size: 100% auto;
`;

const LandingContainer = styled.div`
  padding-top: 20vh;
`;

export default function LandingPage() {
  return (
    <Background>
      <LandingContainer className="container">
        <LandingTitle />
        <Hello>Hello world</Hello>
      </LandingContainer>
    </Background>
  );
}
