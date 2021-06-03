import React, { Fragment } from "react";
import { GlobalStyles } from "./UI/globalStyles";

import LandingPage from "./LandingPage";

export default function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <main>
        <h1>HELLO WORLD</h1>
        <LandingPage />
      </main>
    </Fragment>
  );
}
