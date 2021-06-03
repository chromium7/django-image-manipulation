import React from "react";

import { slideIn } from "../UI/animations";
import styled from "styled-components";

const Hello = styled.div`
  animation: ${slideIn} var(--animation-duration)
    var(--animation-timing-function);
`;

export default function LandingPage() {
  return <Hello className="container">Hello world 123</Hello>;
}
