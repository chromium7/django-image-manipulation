import React from "react";
import styled from "styled-components";

import logo from "../../../static/images/logo-white.png";

const FooterBackground = styled.div`
  background: var(--color-dark);
  color: var(--color-on-primary);
  padding: 40px 0;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.6);

  h5 {
    color: rgba(255, 255, 255, 1);
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      padding: 4px 0;
      &:hover {
        color: rgba(255, 255, 255, 1);
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media only screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;

  h5 {
    margin-bottom: 18px;
  }

  @media only screen and (min-width: 992px) {
    margin-left: 100px;

    &.logo {
      margin-left: 0;
      margin-top: 30px;
    }
  }
`;

const Space = styled.div`
  flex: 1;
`;

const FooterCopyright = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`;

export default function Footer() {
  return (
    <FooterBackground>
      <FooterContainer className="container">
        <Section className="logo">
          <img src={logo} height="40" />
          <div>est. 2021</div>
        </Section>
        <Space />
        <Section>
          <h5>Information</h5>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="https://github.com/chromium7/django-image-manipulation">
                Source code
              </a>
            </li>
          </ul>
        </Section>
        <Section>
          <h5>Follow me on social media</h5>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/christofer-saputra-722b1b186/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/chromium7">GitHub</a>
            </li>
            <li>
              <a href="https://www.instagram.com/chromium_swe/">Instagram</a>
            </li>
          </ul>
        </Section>
      </FooterContainer>
      <div class="container">
        <hr />
        <FooterCopyright>
          Copyright &#169; 2021 chromium7. All rights reserved
        </FooterCopyright>
      </div>
    </FooterBackground>
  );
}
