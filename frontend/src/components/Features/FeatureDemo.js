import React, { useState } from "react";

import ImageSlider from "./ImageSlider";
import { SlideIn } from "../UI/animation";
import placeholder from "../../../static/images/img-placeholder.jpg";
import placeholder2 from "../../../static/images/img-placeholder2.jpg";
import staticImages from "../Shared/images";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  min-height: 80vh;
  width: 100vw;
  color: var(--color-on-primary);
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

  h2 {
    color: var(--color-primary);
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  button {
    background: none;
    border: none;
    outline: none;
    margin: 0.8rem 2.4rem;
    color: var(--color-on-primary);
    text-decoration: none;
    text-underline-position: under;

    &:hover {
      color: var(--color-primary);
    }

    &.active {
      color: var(--color-primary);
      text-decoration: underline;
    }
  }
`;

export default function FeatureDemo() {
  const [images, setImages] = useState([placeholder, placeholder2, "cartoon"]);

  function changeImage(e) {
    const val = e.target.value;

    switch (val) {
      case "cartoon":
        return setImages([placeholder2, placeholder, "cartoon"]);
      case "blur":
        return setImages([placeholder, placeholder2, "blur"]);
      case "enhance":
        return setImages([placeholder2, placeholder, "enhance"]);
      case "detect":
        return setImages([
          staticImages.edgeBefore,
          staticImages.edgeAfter,
          "detect",
        ]);
      default:
        throw new Error("invalid filter value");
    }
  }

  return (
    <Container>
      <div className="background"></div>
      <div className="container" style={{ padding: 0 }}>
        <SlideIn>
          <h2>Demo</h2>
          <p>See the before and after of the transformed photos</p>

          <Buttons>
            <button
              value="cartoon"
              onClick={changeImage}
              className={images[2] == "cartoon" ? "active" : ""}
            >
              Cartoonize
            </button>
            <button
              value="blur"
              onClick={changeImage}
              className={images[2] == "blur" ? "active" : ""}
            >
              Blur
            </button>
            <button
              value="enhance"
              onClick={changeImage}
              className={images[2] == "enhance" ? "active" : ""}
            >
              Enhance
            </button>
            <button
              value="detect"
              onClick={changeImage}
              className={images[2] == "detect" ? "active" : ""}
            >
              Face detection
            </button>
          </Buttons>

          <ImageSlider before={images[0]} after={images[1]} />
        </SlideIn>
      </div>
    </Container>
  );
}
