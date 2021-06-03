import React, { Fragment } from "react";
import { GlobalStyles } from "./UI/globalStyles";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import LandingPage from "./LandingPage/LandingPage";

export default function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <main>
        <Header />
        <LandingPage />
        <Footer />
      </main>
    </Fragment>
  );
}
