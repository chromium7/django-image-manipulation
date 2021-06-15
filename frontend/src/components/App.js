import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./UI/globalStyles";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import LandingPage from "./Landing/LandingPage";
import AboutPage from "./About/AboutPage";
import FeaturesPage from "./Features/FeaturesPage";
import EditPage from "./Edit/EditPage";

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <main>
        <Header />
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/features" component={FeaturesPage} />
          <Route path="/edit" component={EditPage} />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}
