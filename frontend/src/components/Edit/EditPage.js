import React, { useState } from "react";
import styled from "styled-components";
import DropZone from "./DropZone";

const Container = styled.div`
  padding-top: 3rem;
  text-align: center;

  h1 {
    font-family: var(--text-title);
    margin-bottom: 1.4rem;
  }
`;

const Filters = styled.div`
  margin-top: 2.6rem;
  h2 {
    font-family: var(--text-title);
  }
  ul {
    list-style-type: none;
  }
`;

export default function EditPage() {
  const [files, setFiles] = useState([]);

  return (
    <Container className="container">
      <h1>Upload a picture to edit</h1>
      <DropZone files={files} setFiles={setFiles} />
      <Filters>
        <h2>Select filters to apply</h2>
        <ul>
          <li></li>
        </ul>
      </Filters>
    </Container>
  );
}
