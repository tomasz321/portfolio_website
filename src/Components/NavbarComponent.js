import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="AboutMe"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="MyProjects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                My projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Hobbies"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Hobbies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
