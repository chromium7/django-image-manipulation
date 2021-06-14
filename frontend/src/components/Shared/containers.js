import styled from "styled-components";

export const TitleContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    text-align: center;

    h1 {
      font-family: var(--text-title);
      font-weight: bolder;
    }

    p {
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 2.6rem;
    }
  }

  @media only screen and (min-width: 992px) {
    height: 70vh;

    div {
      max-width: 60%;
    }
  }
`;
