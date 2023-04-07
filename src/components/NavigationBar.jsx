import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    PDKKI Badminton
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about">
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/participants">
                            Participants
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact">
                            Contact
                        </Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
