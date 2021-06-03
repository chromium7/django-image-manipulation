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
  text-align: center;

  :hover {
    cursor: pointer;
    color: var(--color-secondary);
  }

  &.box-shadow {
    box-shadow: var(--shadow-primary);
  }

  &.invert {
    background: var(--color-secondary);
    color: var(--color-primary);

    &.box-shadow {
      box-shadow: var(--shadow-secondary);
    }

    :hover {
      color: var(--color-primary);
    }
  }
`;

export default function NavButton({
  text,
  href,
  invert = false,
  shadow = false,
}) {
  return (
    <ButtonContainer
      className={`${invert ? "invert" : ""} ${shadow ? "box-shadow" : ""}`}
      href={href}
    >
      {text}
    </ButtonContainer>
  );
}
