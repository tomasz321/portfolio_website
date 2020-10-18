/** @jsx jsx */
import React, { Component } from "react";
import {Link} from "react-scroll";
import {Button} from "reactstrap";
import { jsx } from '@emotion/core'

export default class NavbarComponent extends Component {
    render() {
        return(
            <div
                css={{
                    backgroundColor: '#333',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    position: 'fixed',
                    width: '100%',
                    zIndex: '1',
                    padding: '10px'
                }}
            >
                <div>
                <Link
                        activeClass="active"
                        to="AboutMe"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <Button outline color="light">About Me</Button>{' '}
                    </Link>
                </div>
                <div>
                    <Link
                        activeClass="active"
                        to="MyProjects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <Button outline color="light">My projects</Button>{' '}
                    </Link>
                </div>
                <div>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <Button outline color="light">Contact</Button>{' '}
                    </Link>
            </div>
            </div>
            // <Navbar bg="light" expand="lg" >
            //     <Link
            //         activeClass="active"
            //         to="AboutMe"
            //         spy={true}
            //         smooth={true}
            //         offset={-70}
            //         duration={500}
            //     >
            //         <Button outline color="dark">About Me</Button>{' '}
            //     </Link>
            //     <Link
            //         activeClass="active"
            //         to="MyProjects"
            //         spy={true}
            //         smooth={true}
            //         offset={-70}
            //         duration={500}
            //     >
            //         <Button outline color="dark">My projects</Button>{' '}
            //     </Link>
            //     <Link
            //         activeClass="active"
            //         to="contact"
            //         spy={true}
            //         smooth={true}
            //         offset={-70}
            //         duration={500}
            //     >
            //         <Button outline color="dark">Contact</Button>{' '}
            //     </Link>
            // </Navbar>
        )
    }
}