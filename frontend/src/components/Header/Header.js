import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import logo from "../../../static/images/logo-white.png";

import NavButton from "../Buttons/NavButton";

const Nav = styled.nav`
  background: var(--color-dark);

  a,
  button,
  div {
    color: var(--color-on-primary) !important;
  }
`;

export default function Header() {
  return (
    <Nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} height="40" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <NavButton text={"Learn more"} href="#" />
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
}
