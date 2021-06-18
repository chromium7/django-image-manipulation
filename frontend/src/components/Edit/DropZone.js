import React, { useEffect } from "react";

import { FaImages } from "react-icons/fa";
import { ZoomIn } from "../UI/animation";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";

const Zone = styled.div`
  height: 50vh;
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
  transition: all 0.24s ease-in-out;
  cursor: pointer;

  &:focus,
  &:hover {
    border-color: #2196f3;
  }

  &.hidden {
    height: 10vh;

    svg {
      display: none;
    }
  }

  svg {
    font-size: 2.4rem;
    margin: 0.6rem;
  }
`;

const ThumbsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2rem;
  justify-content: space-around;
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

export default function DropZone({ files, setFiles }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <ZoomIn>
      <Thumb key={file.name}>
        <img src={file.preview} />
      </Thumb>
    </ZoomIn>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="container">
      <Zone {...getRootProps()} className={files.length != 0 ? "hidden" : ""}>
        <input {...getInputProps()} />
        <FaImages />
        <div>Drag 'n' drop some files here, or click to select files</div>
      </Zone>
      <ThumbsContainer>{thumbs}</ThumbsContainer>
    </section>
  );
}
