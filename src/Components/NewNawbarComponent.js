import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import {Link} from "react-scroll";
import {Button} from "reactstrap";

export default class NavbarComponent extends Component {
    render() {
        return(
            <Navbar bg="light" expand="lg" >
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
            </Navbar>
        )
    }
}