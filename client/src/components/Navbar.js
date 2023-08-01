import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const HomezNavbar = () => {
  return (
    <Navbar className="navBar">
      <Container fluid={true} className="d-flex">
        <Navbar.Brand as={Link} to="/">
          HOMEZ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-start">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/ride">
              Ride
            </Nav.Link>
            <Nav.Link as={Link} to="/drive">
              Drive
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/developers">
              Developers
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
          <Form>
            <Button className="navBtn" variant="outline-success">
              Log in
            </Button>
            <Button className="navBtn" variant="outline-success">
              Sign up
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomezNavbar;
