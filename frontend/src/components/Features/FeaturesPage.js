import React from "react";
import EndExplore from "../Shared/EndExplore";

export default function FeaturesPage() {
  return (
    <div>
      <h1>Hllo world</h1>
      <EndExplore
        title="Sounds cool!"
        subtitle="Transform my pictures right now"
        invert={false}
        href="/"
      />
    </div>
  );
}
