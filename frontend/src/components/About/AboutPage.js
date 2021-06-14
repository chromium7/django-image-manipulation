import React from "react";
import styled from "styled-components";
import EndExplore from "../Shared/EndExplore";
import NavButton from "../Buttons/NavButton";

import { SlideIn } from "../UI/animation";
import placeholder from "../../../static/images/img-placeholder.jpg";
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
  margin-bottom: 4rem;

  h2 {
    font-family: var(--text-title);
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
        margin: 0 1.2rem;
      }
    }
  }

  @media only screen and (min-width: 992px) {
    width: 60%;
    margin: 0 auto 4rem;
  }
`;

const AboutCode = styled.div`
  background: var(--color-dark);
  min-height: 80vh;
  color: var(--color-on-primary);
  padding: 2rem;

  h2 {
    font-family: var(--text-title);
    text-align: center;
    color: var(--color-primary);
    margin-bottom: 1.6rem;
  }

  section {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;

    div {
      margin-top: 2rem;
    }
  }

  @media only screen and (min-width: 992px) {
    section {
      flex-direction: row;
    }

    img {
      width: 50%;
    }
  }
`;

const AboutConnect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 3.2rem 0;
  border-bottom: 2px solid var(--color-secondary);
  text-align: center;

  a {
    margin-top: 2rem;
  }
  h2,
  p {
    font-family: var(--text-title);
  }

  p {
    color: rgba(0, 0, 0, 0.6);
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
              <img title="bootstrap" alt="bootstrap" src={icons.bootstrap} />
              <img title="inkscape" alt="inkscape" src={icons.inkscape} />
              <img title="figma" alt="figma" src={icons.figma} />
            </div>
          </div>
        </AboutTools>
      </SlideIn>
      <AboutCode>
        <SlideIn>
          <h2>Behind the scene</h2>
          <section>
            <img src={placeholder} />
            <div>
              <h3>header</h3>
              <p>Lorem ipsum lorem ipsum lorem ipsum</p>
            </div>
          </section>
        </SlideIn>
      </AboutCode>
      <AboutConnect>
        <SlideIn>
          <h2>Connect with me!</h2>
          <p>Send me an email for feedback or any questions</p>
          <NavButton
            text="christofersaputra29@gmail.com"
            href="/"
            invert={true}
            shadow={true}
          />
        </SlideIn>
      </AboutConnect>
      <EndExplore
        title="Sounds cool!"
        subtitle="Transform my pictures right now"
        invert={false}
        href="/"
      />
    </div>
  );
}
