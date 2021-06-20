import React, { useState } from "react";

import DropZone from "./DropZone";
import EditButton from "../Buttons/EditButton";
import EditFilters from "./EditFilters";
import PageSpinner from "../UI/PageSpinner";
import styled from "styled-components";

const Container = styled.div`
  padding: 3rem 0;
  text-align: center;

  h1 {
    font-family: var(--text-title);
    margin-bottom: 1.4rem;
  }
`;

const InsideContainer = styled.div`
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
  const [filters, setFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function send(e) {
    e.preventDefault();

    setIsLoading(true);
  }

  if (isLoading) {
    return <PageSpinner />;
  }

  return (
    <Container className="container">
      <h1>Upload a picture to edit</h1>
      <DropZone files={files} setFiles={setFiles} />
      <InsideContainer>
        <h2>Select filters to apply</h2>
        <EditFilters filters={filters} setFilters={setFilters} />
      </InsideContainer>
      <InsideContainer>
        <EditButton text="Transform image" onClick={send} />
      </InsideContainer>
    </Container>
  );
}
