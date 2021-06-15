import React, { Fragment } from "react";
import EndExplore from "../Shared/EndExplore";
import { TitleContainer } from "../Shared/containers";
import FeatureCards from "./FeatureCards";
import FeatureDemo from "./FeatureDemo";

export default function FeaturesPage() {
  return (
    <Fragment>
      <div className="container">
        <TitleContainer>
          <div>
            <h1>Cool features all in one site</h1>
            <p>
              Our platform provides many features and filters to apply to your
              photos. Check out what you can do in our site below and start
              transforming your pictures!
            </p>
          </div>
        </TitleContainer>

        <FeatureCards />
      </div>
      <FeatureDemo />
      <div className="container">
        <EndExplore
          title="Sounds cool!"
          subtitle="Transform my pictures right now"
          invert={false}
          href="/edit"
        />
      </div>
    </Fragment>
  );
}
