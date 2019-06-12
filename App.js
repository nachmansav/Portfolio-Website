import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero"
import Portfolio from "./Portfolio"
import AboutMe from "./AboutMe"
import Footer from "./Footer"
import "./index.css";

class AppPage extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <Portfolio />
        <AboutMe />
        <Footer />
      </div>
    )
  }
}

export default AppPage;
