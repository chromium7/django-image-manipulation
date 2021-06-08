import React from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  background: var(--color-surface);
  box-shadow: var(--shadow-primary);

  img {
    width: 100%;
  }

  div {
    text-align: center;
  }
`;

export default function FeatureCard({ src, title, description }) {
  return (
    <Card>
      <img src={src} />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </Card>
  );
}
