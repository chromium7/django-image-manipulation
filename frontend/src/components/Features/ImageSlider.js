import React, { useEffect, useRef } from "react";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 40vh;
  overflow: hidden;
  position: relative;

  figure {
    position: absolute;
    background-size: 100% 100%;
    font-size: 0;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  #divisor {
    position: absolute;
    width: 50%;
    box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.3);
    bottom: 0;
    height: 100%;
    overflow: hidden;

    img {
      width: 92.5vw;
      height: 100%;

      @media only screen and (min-width: 576px) {
        width: 540px;
      }
      @media only screen and (min-width: 768px) {
        width: 720px;
      }
      @media only screen and (min-width: 992px) {
        width: 960px;
      }
      @media only screen and (min-width: 1200px) {
        width: 1140px;
      }
      @media only screen and (min-width: 1400px) {
        width: 1320px;
      }
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      right: -2px;
      width: 4px;
      height: calc(50% - 25px);
      background: white;
      z-index: 3;
    }
    &::before {
      top: 0;
      box-shadow: 0 -3px 8px 1px rgba(0, 0, 0, 0.3);
    }
    &::after {
      bottom: 0;
      box-shadow: 0 3px 8px 1px rgba(0, 0, 0, 0.3);
    }
  }

  #handle {
    position: absolute;
    background-color: var(--color-primary-variant);
    border: 3px solid white;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    z-index: 1;

    &::before,
    &::after {
      content: "";
      width: 0;
      height: 0;
      border: 6px inset transparent;
      position: absolute;
      top: 50%;
      margin-top: -6px;
    }
    &::before {
      border-right: 6px solid white;
      left: 50%;
      margin-left: -17px;
    }
    &::after {
      border-left: 6px solid white;
      right: 50%;
      margin-right: -17px;
    }
  }

  @media only screen and (min-width: 768px) {
    height: 70vh;
  }

  @media only screen and (min-width: 1200px) {
    height: 90vh;
  }
`;

const Slider = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  position: absolute;
  top: 50%;
  left: -25px;
  transform: translateY(-50%);
  background-color: transparent;
  width: calc(100% + 50px);
  z-index: 2;
  cursor: ew-resize;

  &:focus,
  &:active {
    border: none;
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: transparent;
  }

  &::-moz-range-track {
    -moz-appearance: none;
    height: 15px;
    width: 100%;
    background-color: transparent;
    position: relative;
    outline: none;
  }
`;

export default function ImageSlider({ before, after }) {
  var divisor = useRef();
  var handle = useRef();
  var slider = useRef();
  var i = useRef();
  useEffect(() => {
    console.log();
  });

  function moveDivisor() {
    handle.current.style.left = slider.current.value / 10 + "%";
    divisor.current.style.width = slider.current.value / 10 + "%";
  }

  return (
    <Container>
      <figure style={{ backgroundImage: `url(${before})` }}>
        <div ref={handle} id="handle"></div>
      </figure>
      <div ref={divisor} id="divisor">
        <img src={after} ref={i} />
      </div>
      <Slider
        type="range"
        min="0"
        max="1000"
        value="500"
        ref={slider}
        onInput={moveDivisor}
      />
    </Container>
  );
}
