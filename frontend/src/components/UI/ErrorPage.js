import EditButton from "../Buttons/EditButton";
import { FaRegSadTear } from "react-icons/fa";
import React from "react";
import styled from "styled-components";

function ErrorPage() {
  return (
    <Container>
      <p>
        <FaRegSadTear />
      </p>
      <div>
        Something went wrong.
        <br />
        <p>
          <a href="/">Go to homepage</a>
        </p>
        <EditButton
          text="Refresh page"
          invert={true}
          onClick={() => window.location.reload()}
        />
      </div>
    </Container>
  );
}

export default ErrorPage;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  svg {
    width: 26px;
    height: 26px;
  }

  a {
    color: var(--color-primary);
  }
`;
