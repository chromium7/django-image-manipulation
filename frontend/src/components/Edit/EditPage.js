import React, { useState } from "react";

import DropZone from "./DropZone";
import EditButton from "../Buttons/EditButton";
import EditFilters from "./EditFilters";
import ErrorPage from "../UI/ErrorPage";
import PageSpinner from "../UI/PageSpinner";
import SuccessPage from "./SuccessPage";
import styled from "styled-components";

function EditPage() {
  const [files, setFiles] = useState([]);
  const [filters, setFilters] = useState([]);
  const [status, setStatus] = useState();
  const [transformed, setTransformed] = useState([]);

  function send(e) {
    e.preventDefault();

    // Make sure images and filters are present
    if (files.length === 0 || filters.length === 0) {
      console.log("error");
      return "";
    }

    setStatus("loading");
    let formData = new FormData();
    for (let file of files) {
      formData.append("files", file);
    }
    formData.append("filters", filters);

    fetch(`http://127.0.0.1:8000/api/upload`, {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setStatus("success");
        setTransformed(data.images);
      })
      .catch((err) => {
        setStatus("error");
        console.log(err);
      });
  }

  if (status === "success") {
    return <SuccessPage transformed={transformed} />;
  }

  if (status === "loading") {
    return <PageSpinner />;
  }

  if (status === "error") {
    return <ErrorPage />;
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

export default EditPage;

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
