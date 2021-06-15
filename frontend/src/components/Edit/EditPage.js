import React, { useState } from "react";
import styled from "styled-components";
import DropZone from "./DropZone";

const Container = styled.div`
  padding-top: 3rem;
  text-align: center;

  h1 {
    font-family: var(--text-title);
  }
`;

export default function EditPage() {
  const [image, setImage] = useState(null);

  return (
    <Container className="container">
      <h1>Upload a picture to edit</h1>
      <DropZone setImage={setImage} />
    </Container>
  );
}
