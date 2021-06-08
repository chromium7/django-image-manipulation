import React from "react";
import styled from "styled-components";
import EndExplore from "../Shared/EndExplore";

import { SlideIn } from "../UI/animation";

import logo from "../../../static/images/logo-black.png";
import icons from "../Shared/icons";

const AboutTitle = styled.div`
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

const AboutTools = styled.div`
  width: 100%;
  text-align: center;

  h2 {
    display: block;
    margin-bottom: 1.6rem;
  }

  .box {
    background: var(--color-surface);
    box-shadow: var(--shadow-primary);
    padding: 1rem 0;
    border-radius: 4px;

    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin: 1.2rem;

      img {
        height: 4rem;
        width: auto;
      }
    }
  }

  @media only screen and (min-width: 992px) {
    width: 60%;
    margin: auto;
  }
`;

export default function AboutPage() {
  return (
    <div className="container">
      <AboutTitle>
        <div>
          <h1>About imapulator</h1>
          <p>
            Find out more about this web app's system architecture and also the
            tech stack that is being used!
          </p>
          <img src={logo} />
        </div>
      </AboutTitle>
      <SlideIn>
        <AboutTools>
          <h2>Languages and Tools</h2>
          <div className="box">
            <div>
              <img title="gunicorn" alt="gunicorn" src={icons.gunicorn} />
              <img title="nginx" alt="nginx" src={icons.nginx} />
              <img title="heroku" alt="heroku" src={icons.heroku} />
              <img title="github" alt="github" src={icons.github} />
            </div>
            <div>
              <img title="python" alt="python" src={icons.python} />
              <img title="django" alt="django" src={icons.django} />
              <img title="opencv" alt="opencv" src={icons.opencv} />
              <img title="selenium" alt="selenium" src={icons.selenium} />
              <img title="rabbitmq" alt="rabbitmq" src={icons.rabbitmq} />
            </div>
            <div>
              <img title="javascript" alt="javascript" src={icons.javascript} />
              <img title="react" alt="react" src={icons.react} />
              <img title="sass" alt="sass" src={icons.sass} />
              <img title="inkscape" alt="inkscape" src={icons.inkscape} />
              <img title="figma" alt="figma" src={icons.figma} />
            </div>
          </div>
        </AboutTools>
      </SlideIn>
      <EndExplore
        title="Sounds cool!"
        subtitle="Transform my pictures right now"
        invert={false}
        href="/"
      />
    </div>
  );
}
