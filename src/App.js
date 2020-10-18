import React, { Component } from "react";
import "./App.css";
import NavbarComponent from "./Components/NavbarComponent";
import AboutMe from "./Components/AboutMeComponent";
import MyProjects from "./Components/MyProjectsComponent";
import Contact from "./Components/ContactComponent";
import Hobbies from "./Components/HobbiesComponent"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <AboutMe />
        <MyProjects />
        {/*<Hobbies />*/}
        <Contact />
      </div>
    );
  }
}

export default App;
