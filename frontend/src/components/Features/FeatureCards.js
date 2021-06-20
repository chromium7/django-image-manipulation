import FeatureCard from "./FeatureCard";
import React from "react";
import staticImages from "../Shared/images";
import styled from "styled-components";

const CardsRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  @media only screen and (min-width: 992px) {
    justify-content: space-between;
  }
`;

export default function FeatureCards() {
  return (
    <div>
      <CardsRow>
        <FeatureCard
          src={staticImages.cartoonAfter}
          title={"Cartoonize"}
          description={"Transform your image into drawing!"}
        />
        <FeatureCard
          src={staticImages.blurAfter}
          title={"Blur"}
          description={"Make your picture less clear"}
        />
        <FeatureCard
          src={staticImages.enhanceAfter}
          title={"Enhance"}
          description={"Make your picture sharper and clearer"}
        />
        <FeatureCard
          src={staticImages.edgeAfter}
          title={"Edge detection"}
          description={"See the edges detected in your image"}
        />
        <FeatureCard
          src={staticImages.faceAfter}
          title={"Face detection"}
          description={"Check out the faces identifed from the photo"}
        />
      </CardsRow>
    </div>
  );
}
