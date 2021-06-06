import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export function SlideIn(props) {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInUp"
      duration="0.8"
      offset="100"
      animateOnce={true}
    >
      {props.children}
    </ScrollAnimation>
  );
}
