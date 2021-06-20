import React, { useState } from "react";

import DropZone from "./DropZone";
import EditFilters from "./EditFilters";
import styled from "styled-components";

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
  const [filters, setFilters] = useState([]);

  return (
    <Container className="container">
      <h1>Upload a picture to edit</h1>
      <DropZone files={files} setFiles={setFiles} />
      <Filters>
        <h2>Select filters to apply</h2>
        <EditFilters filters={filters} setFilters={setFilters} />
      </Filters>
    </Container>
  );
}
