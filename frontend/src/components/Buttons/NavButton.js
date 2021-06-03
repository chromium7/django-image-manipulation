import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.a`
  display: block;
  background: var(--color-primary);
  color: var(--color-on-primary);
  border: none;
  border-radius: 4px;
  padding: 8px 24px;
  text-decoration: none;

  :hover {
    cursor: pointer;
  }

  &.shadow {
    box-shadow: var(--shadow-primary);
  }

  &.invert {
    background: var(--color-secondary);

    &.shadow {
      box-shadow: var(--shadow-secondary);
    }
  }
`;

export default function NavButton({ text, invert = false, shadow = false }) {
  return (
    <ButtonContainer
      className={`${invert ? "invert" : ""} ${shadow ? "shadow" : ""}`}
    >
      {text}
    </ButtonContainer>
  );
}
