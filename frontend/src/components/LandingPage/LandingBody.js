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
      max-width: 40%;
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

const ContainerMedium = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3.2rem 0;
  border-bottom: 2px solid var(--color-secondary);

  &.reverse {
    flex-direction: column-reverse;
  }

  h3 {
    font-family: var(--text-title);
  }

  div {
    width: 40%;
    margin-top: 2.4rem;
  }

  a {
    color: var(--color-primary-variant);
  }

  img {
    width: 40%;
  }

  img,
  div {
    animation: ${slideIn} var(--animation-duration)
      var(--animation-timing-function);
    max-width: 40%;
  }

  @media only screen and (min-width: 992px) {
    flex-direction: row-reverse;

    &.reverse {
      flex-direction: row;
    }
  }
`;

export default function LandingBody() {
  return (
    <div>
      <ContainerBig>
        <img src={placeholder} />
        <div>
          <section>
            <FaAccusoft />
            <h4>Hassle free editing</h4>
            <p>
              Editing photos couldn't be easier. No complicated tools or
              confusing UI. Literally just pick the effects that you want in
              your picture and our code will do all the hard work for you!
            </p>
          </section>
          <section>
            <FaAdjust />
            <h4>Sophisticated image in a jiffy</h4>
            <p>
              The effects selection we provide will give your image a fresh and
              unique look. Through a simple edit, you can stand out from other
              people in social media with your refreshing pictures.
            </p>
          </section>
        </div>
      </ContainerBig>
      <ContainerMedium>
        <img src={placeholder} />
        <div>
          <h3>Face detection and many more features</h3>
          <p>
            Detect faces in a picture, and many other features are available in
            the platform and our artificial intelligence system will generate
            the iedited image for you.
          </p>
          <a>Explore all features &rarr;</a>
        </div>
      </ContainerMedium>
      <ContainerMedium>
        <div>
          <h3>Image manipulation using openCV</h3>
          <p>
            The artificial intelligence and the business logic of our photo
            editing web app is in openCV. The library openCV is used not only
            for applying filters but also to do a more advanced task like a face
            detection.
          </p>
          <a>Find out more &rarr;</a>
        </div>
        <img src={placeholder} />
      </ContainerMedium>
    </div>
  );
}
