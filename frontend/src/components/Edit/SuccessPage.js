import EditButton from "../Buttons/EditButton";
import React from "react";
import { ZoomIn } from "../UI/animation";
import styled from "styled-components";

function SuccessPage({ transformed }) {
  return (
    <Container className="container">
      <h1>Your edited images: </h1>
      <ImagesContainer>
        {transformed.map((image, index) => (
          <ZoomIn>
            <Thumb key={index}>
              <img src={image} />
            </Thumb>
          </ZoomIn>
        ))}
      </ImagesContainer>
      <EditButton
        onClick={() => window.location.reload()}
        text="Edit more pictures"
      />
    </Container>
  );
}

export default SuccessPage;

const Container = styled.div`
  padding: 3rem 0;
  text-align: center;

  h1 {
    font-family: var(--text-title);
    margin-bottom: 1.4rem;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Thumb = styled.div`
  border-radius: 5px;
  border: 4px solid var(--color-surface);
  margin-bottom: 1rem;
  margin-right: 1rem;
  height: 40vh;
  padding: 0.6rem;

  img {
    height: 100%;
  }
`;
