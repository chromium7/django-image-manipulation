import React from "react";
import EndExplore from "../Shared/EndExplore";

export default function AboutPage() {
  return (
    <div>
      <h1>About page</h1>
      <EndExplore
        title="Sounds cool!"
        subtitle="Transform my pictures right now"
        invert={false}
        href="/"
      />
    </div>
  );
}
