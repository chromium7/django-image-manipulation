import React from "react";
import styled from "styled-components";

import { SlideIn } from "../UI/animation";
import NavButton from "../Buttons/NavButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4.8rem 0 6rem;

  div {
    max-width: 60%;
    text-align: center;
    animation: var(--animation-slide);

    h1,
    h5 {
      font-family: var(--text-title);
    }

    h5 {
      font-weight: normal;
      color: rgba(0, 0, 0, 0.6);
    }

    a {
      display: inline-block;
      margin-top: 2rem;
    }
  }
`;

export default function EndExplore({ title, subtitle, href, invert }) {
  return (
    <SlideIn>
      <Container>
        <div>
          <h1>{title}</h1>
          <h5>{subtitle}</h5>
          <NavButton
            text="Get started"
            href={href}
            invert={invert}
            shadow={true}
          />
        </div>
      </Container>
    </SlideIn>
  );
}
