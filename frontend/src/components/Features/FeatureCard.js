import React from "react";
import styled from "styled-components";

import { SlideIn } from "../UI/animation";

const Card = styled.div`
  position: relative;
  background: var(--color-surface);
  box-shadow: var(--shadow-primary);
  border-radius: 0.6rem;
  width: 20rem;
  margin: 1rem;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  transition: all ease 200ms;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  div {
    text-align: center;
    padding: 1.2rem;
  }

  @media only screen and (min-width: 992px) {
    width: 18rem;
  }
`;

export default function FeatureCard({ src, title, description }) {
  return (
    <SlideIn>
      <Card>
        <img src={src} />
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </Card>
    </SlideIn>
  );
}
