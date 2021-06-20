import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background: var(--color-primary);
  color: var(--color-on-primary);
  border: none;
  border-radius: 4px;
  padding: 8px 24px;
  text-decoration: none;
  text-align: center;
  transition: color 0.4s;

  :hover {
    cursor: pointer;
    color: var(--color-secondary);
  }

  &.box-shadow {
    box-shadow: var(--shadow-primary);
  }

  &.invert {
    background: var(--color-surface);
    color: var(--color-primary);

    &.box-shadow {
      box-shadow: var(--shadow-secondary);
    }

    :hover {
      color: var(--color-primary);
    }
  }
`;

export default function EditButton({
  text,
  invert = false,
  shadow = false,
  onClick,
}) {
  return (
    <Container
      className={`${invert ? "invert" : ""} ${shadow ? "box-shadow" : ""}`}
      onClick={onClick}
    >
      {text}
    </Container>
  );
}
