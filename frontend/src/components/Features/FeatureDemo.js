import React from "react";
import styled from "styled-components";

import ImageSlider from "./ImageSlider";
import placeholder from "../../../static/images/img-placeholder.jpg";
import placeholder2 from "../../../static/images/img-placeholder2.jpg";
import { SlideIn } from "../UI/animation";

const Container = styled.div`
  position: relative;
  min-height: 80vh;
  width: 100vw;
  color: var(--color-on-surface);
  text-align: center;
  padding: 2rem;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    background: var(--color-dark);
    width: 100vw;
    height: 75%;
    z-index: -1;
  }

  h1 {
    color: var(--color-primary);
  }
`;

export default function FeatureDemo() {
  return (
    <Container>
      <div className="background"></div>
      <div className="container" style={{ padding: 0 }}>
        <SlideIn>
          <h1>Hello world</h1>

          <ImageSlider before={placeholder} after={placeholder2} />
        </SlideIn>
      </div>
    </Container>
  );
}
