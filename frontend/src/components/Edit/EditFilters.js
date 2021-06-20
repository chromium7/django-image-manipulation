import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media only screen and (min-width: 992px) {
    width: 50%;
  }
`;

const Checkbox = styled.label`
  margin: 0.8rem;

  .checkbox-input {
    // Code to hide the input
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;

    &:checked + .checkbox-tile {
      border-color: var(--color-primary);
      box-shadow: 0 5px 10px rgba(#000, 0.1);
      color: var(--color-primary);
      &:before {
        transform: scale(1);
        opacity: 1;
        background-color: var(--color-primary);
        border-color: var(--color-primary);
      }

      .checkbox-label {
        color: var(--color-primary);
      }
    }

    &:focus + .checkbox-tile {
      border-color: var(--color-primary);
      box-shadow: 0 5px 10px rgba(#000, 0.1), 0 0 0 4px #b5c9fc;
      &:before {
        transform: scale(1);
        opacity: 1;
      }
    }
  }

  .checkbox-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 8rem;
    min-height: 5rem;
    border-radius: 0.5rem;
    border: 2px solid var(--color-secondary-variant);
    background-color: #fff;
    box-shadow: 0 5px 10px rgba(#000, 0.1);
    transition: 0.15s ease;
    cursor: pointer;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      display: block;
      width: 1.25rem;
      height: 1.25rem;
      border: 2px solid var(--color-secondary-variant);
      background-color: #fff;
      border-radius: 50%;
      top: 0.25rem;
      left: 0.25rem;
      opacity: 0;
      transform: scale(0);
      transition: 0.25s ease;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' fill='%23FFFFFF' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpolyline points='216 72.005 104 184 48 128.005' fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'%3E%3C/polyline%3E%3C/svg%3E");
      background-size: 12px;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }

    &:hover {
      border-color: var(--color-primary);
      &:before {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
  .checkbox-label {
    color: #707070;
    transition: 0.375s ease;
    text-align: center;
  }
`;

export default function EditFilters({ filters, setFilters }) {
  function checkboxHandler(e) {
    if (e.target.checked) {
      setFilters((curr) => [...curr, e.target.value]);
    } else {
      setFilters((curr) => curr.filter((value) => value != e.target.value));
    }
    console.log(filters);
  }

  return (
    <Container>
      <Checkbox>
        <input
          type="checkbox"
          class="checkbox-input"
          value="cartoon"
          name="cartoon"
          id="cartoon"
          onClick={checkboxHandler}
        />
        <span class="checkbox-tile">
          <span class="checkbox-label">Cartoon</span>
        </span>
      </Checkbox>
      <Checkbox>
        <input
          type="checkbox"
          class="checkbox-input"
          value="blur"
          name="blur"
          id="blur"
          onClick={checkboxHandler}
        />
        <span class="checkbox-tile">
          <span class="checkbox-label">Blur</span>
        </span>
      </Checkbox>
      <Checkbox>
        <input
          type="checkbox"
          class="checkbox-input"
          value="enhance"
          name="enhance"
          id="enhance"
          onClick={checkboxHandler}
        />
        <span class="checkbox-tile">
          <span class="checkbox-label">Enhance</span>
        </span>
      </Checkbox>
      <Checkbox>
        <input
          type="checkbox"
          class="checkbox-input"
          value="edge_detect"
          name="edge_detect"
          id="edge_detect"
          onClick={checkboxHandler}
        />
        <span class="checkbox-tile">
          <span class="checkbox-label">Edge detection</span>
        </span>
      </Checkbox>
      <Checkbox>
        <input
          type="checkbox"
          class="checkbox-input"
          value="face_detect"
          name="face_detect"
          id="face_detect"
          onClick={checkboxHandler}
        />
        <span class="checkbox-tile">
          <span class="checkbox-label">Face detection</span>
        </span>
      </Checkbox>
    </Container>
  );
}
