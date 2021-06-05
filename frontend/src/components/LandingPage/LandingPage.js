import React from "react";
import LandingTitle from "./LandingTitle";

import { slideIn } from "../UI/animations";
import styled from "styled-components";

const Hello = styled.div`
  animation: ${slideIn} var(--animation-duration)
    var(--animation-timing-function);
`;

export default function LandingPage() {
  return (
    <div className="container">
      <LandingTitle />
      <Hello>Hello world</Hello>
    </div>
  );
}
