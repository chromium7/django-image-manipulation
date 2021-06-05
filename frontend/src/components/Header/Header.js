import React, { Fragment } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import logo from "../../../static/images/logo-white.png";

import NavButton from "../Buttons/NavButton";

const Nav = styled.nav`
  background: var(--color-dark);

  a,
  button,
  div {
    color: var(--color-on-primary);
  }

  .nav-link:hover {
    color: var(--color-primary);
  }
`;

const Space = styled.div`
  width: 28px;
`;

const Svg = styled.svg`
  position: absolute;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: -1;
`;

export default function Header() {
  return (
    <Fragment>
      <Svg
        width="1440"
        height="1000"
        viewBox="0 0 1440 1000"
        fill="none"
        preserveAspectRatio="xMidYMin meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.99365 100.754L352.951 555.092L584.494 61.0908M584.494 61.0908L1223.45 61.0908M584.494 61.0908L911.951 294.59M584.494 61.0908L294.244 262.591L3.99376 464.091M584.494 61.0908L193.45 100.754L3.99376 464.091M3.99376 464.091L457.972 531.591L911.951 599.091M3.99376 464.091L459.45 762.09L911.951 599.091M911.951 599.091L911.951 294.59M911.951 599.091L1157.18 424.172L1402.41 249.254M911.951 599.091L1447.45 576.09L1402.41 249.254M911.951 599.091L1131.95 735.59L1402.41 249.254M1223.45 61.0908L1402.41 249.254M1223.45 61.0908L1067.7 177.841L911.951 294.59M1223.45 61.0908L1272.95 583.585L911.951 294.59"
          stroke="#B0A990"
          stroke-opacity="0.4"
        />
      </Svg>
      <Nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} height="40" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
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
              <li>
                <Space />
              </li>
              <li className="nav-item">
                <NavButton text={"Learn more"} href={"/"} shadow={true} />
              </li>
            </ul>
          </div>
        </div>
      </Nav>
    </Fragment>
  );
}
