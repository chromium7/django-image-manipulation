import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { FaImages } from "react-icons/fa";

const Zone = styled.div`
  height: 40vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: #eeeeee;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;

  &:focus,
  &:hover {
    border-color: #2196f3;
  }

  svg {
    font-size: 2.4rem;
    margin: 0.6rem;
  }
`;

export default function DropZone(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <Zone {...getRootProps()}>
        <input {...getInputProps()} />
        <FaImages />
        <div>Drag 'n' drop some files here, or click to select files</div>
      </Zone>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}
