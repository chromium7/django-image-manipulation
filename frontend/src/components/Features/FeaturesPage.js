import React from "react";
import EndExplore from "../Shared/EndExplore";
import placeholder from "../../../static/images/img-placeholder.jpg";
import FeatureCard from "./FeatureCard";

export default function FeaturesPage() {
  return (
    <div>
      <h1>Hllo world</h1>

      <div>
        <FeatureCard
          src={placeholder}
          title={test}
          description={"hello world lorem ipsum this is a test description"}
        />
      </div>
      <EndExplore
        title="Sounds cool!"
        subtitle="Transform my pictures right now"
        invert={false}
        href="/"
      />
    </div>
  );
}
