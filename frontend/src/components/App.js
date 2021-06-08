import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./UI/globalStyles";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import LandingPage from "./LandingPage/LandingPage";

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <main>
        <Header />
        <Switch>
          <Route path="/" component={LandingPage} exact />
          {/* <Route path="/about" component={AboutPage} />
          <Route path="/features" component={FeaturesPage} /> */}
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}
