import React from "react";
import styled from "styled-components";
import { slideIn } from "../UI/animations";
import placeholder from "../../../static/images/img-placeholder.jpg";
import { FaAccusoft, FaAdjust } from "react-icons/fa";

const ContainerBig = styled.div`
  text-align: center;
  border-bottom: 2px solid var(--color-secondary);

  img {
    max-width: 80vw;
  }

  div {
    display: flex;
    justify-content: space-around;
    margin: 4em 0;

    section {
      animation: ${slideIn} var(--animation-duration)
        var(--animation-timing-function);
    }

    h4 {
      font-family: var(--text-title);
    }

    svg {
      font-size: 2.4rem;
      margin-bottom: 0.6rem;
    }
  }
`;

const ContainerMedium = styled.div``;

export default function LandingBody() {
  return (
    <div>
      <ContainerBig>
        <img src={placeholder} />
        <div>
          <section>
            <FaAccusoft />
            <h4>Hassle free editing</h4>
            <p>lorem</p>
          </section>
          <section>
            <FaAdjust />
            <h4>Sophisticated image in a jiffy</h4>
            <p>Lorem upsum</p>
          </section>
        </div>
      </ContainerBig>
    </div>
  );
}
