import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    }
  }

  toggle() {
    this.setState({
      opened: !this.state.opened
    });
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <FontAwesomeIcon icon={faBars} className="nav-menu-button" onClick={this.toggle.bind(this)} size='3x'/>
          <ul
              className={
                "nav-items " + (this.state.opened ? "opened" : "closed")
              }
          >
            <li className="nav-item">
              <Link
                activeClass="active"
                to="AboutMe"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button outline color="info">About Me</Button>{' '}
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
                <Button outline color="info">My projects</Button>{' '}
              </Link>
            </li>
            {/*<li className="nav-item">*/}
            {/*  <Link*/}
            {/*    activeClass="active"*/}
            {/*    to="Hobbies"*/}
            {/*    spy={true}*/}
            {/*    smooth={true}*/}
            {/*    offset={-70}*/}
            {/*    duration={500}*/}
            {/*  >*/}
            {/*    Hobbies*/}
            {/*  </Link>*/}
            {/*</li>*/}
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button outline color="info">Contact</Button>{' '}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
