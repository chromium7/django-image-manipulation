import React from "react";
import EndExplore from "../Shared/EndExplore";
import FeatureCards from "./FeatureCards";

export default function FeaturesPage() {
  return (
    <div className="container">
      <h1>Hllo world</h1>

      <FeatureCards />
      <EndExplore
        title="Sounds cool!"
        subtitle="Transform my pictures right now"
        invert={false}
        href="/"
      />
    </div>
  );
}
