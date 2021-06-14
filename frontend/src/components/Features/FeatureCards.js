import React from "react";
import styled from "styled-components";

import FeatureCard from "./FeatureCard";
import placeholder from "../../../static/images/img-placeholder.jpg";

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
  var cards = [];
  for (var i = 0; i < 8; i++) {
    cards.push(
      <FeatureCard
        src={placeholder}
        title={"test"}
        description={"hello world lorem ipsum this is a test description"}
      />
    );
  }

  return (
    <div>
      <CardsRow>{cards}</CardsRow>
    </div>
  );
}
