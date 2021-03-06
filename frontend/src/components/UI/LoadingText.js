import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 16px;

  .letter {
    float: left;
    font-size: 14px;
    color: #777;
    animation-name: loading;
    animation-duration: 1.6s;
    animation-iteration-count: infinite;
    animation-direction: linear;
  }

  .l-1 {
    animation-delay: 0.48s;
  }
  .l-2 {
    animation-delay: 0.6s;
  }
  .l-3 {
    animation-delay: 0.72s;
  }
  .l-4 {
    animation-delay: 0.84s;
  }
  .l-5 {
    animation-delay: 0.96s;
  }
  .l-6 {
    animation-delay: 1.08s;
  }
  .l-7 {
    animation-delay: 1.2s;
  }
  .l-8 {
    animation-delay: 1.32s;
  }
  .l-9 {
    animation-delay: 1.44s;
  }
  .l-10 {
    animation-delay: 1.56s;
  }
  .l-11 {
    animation-delay: 1.68s;
  }

  @keyframes loading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default function LoadingText() {
  return (
    <Container>
      <div class="l-1 letter">P</div>
      <div class="l-2 letter">r</div>
      <div class="l-3 letter">o</div>
      <div class="l-4 letter">c</div>
      <div class="l-5 letter">c</div>
      <div class="l-6 letter">e</div>
      <div class="l-7 letter">s</div>
      <div class="l-8 letter">s</div>
      <div class="l-9 letter">i</div>
      <div class="l-10 letter">n</div>
      <div class="l-11 letter">g</div>
    </Container>
  );
}
