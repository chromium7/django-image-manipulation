import React from "react";
import styled from "styled-components";
import NavButton from "../Buttons/NavButton";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;

  @media only screen and (min-width: 992px) {
    height: 70vh;
  }
`;

const Title = styled.div`
  display: block;
  text-align: center;
  max-width: 90%;

  h1 {
    font-family: var(--text-title);
    font-weight: bolder;
    margin-bottom: 1rem;
  }

  p {
    color: rgba(0, 0, 0, 0.6);
  }

  a {
    margin-top: 1.4rem;
    display: inline-block;
  }

  @media only screen and (min-width: 576) {
    max-width: 80%;
  }

  @media only screen and (min-width: 992px) {
    max-width: 50%;
  }
`;

export default function LandingTitle() {
  return (
    <Container>
      <Title>
        <h1>Transform image quickly</h1>
        <p>
          No sign up required. Instantly add cool effects to your image by
          selecting from the available filters we provide at imapulator!
        </p>
        <NavButton href={"/"} shadow={true} text={"Edit pictures now!"} />
      </Title>
    </Container>
  );
}
