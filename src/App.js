import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/NavbarComponent";
import AboutMe from "./Components/AboutMeComponent";
import MyProjects from "./Components/MyProjectsComponent";
import Contact from "./Components/ContactComponent";
import Hobbies from "./Components/HobbiesComponent"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <AboutMe />
        <MyProjects />
        {/*<Hobbies />*/}
        <Contact />
      </div>
    );
  }
}

export default App;
