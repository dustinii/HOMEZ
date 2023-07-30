import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomezNavbar = () => {
    return (
        <Navbar className="navBar">
            <Navbar.Brand as={Link} to="/">HOMEZ</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/ride">Ride</Nav.Link>
                    <Nav.Link as={Link} to="/drive">Drive</Nav.Link>
                    <Nav.Link as={Link} to="/deliver">Deliver</Nav.Link>
                    <Nav.Link as={Link} to="/business">Business</Nav.Link>
                    <Nav.Link as={Link} to="/developers">Developers</Nav.Link>
                </Nav>
                <Form>
                    <Button className='navBtn' variant="outline-success">Log in</Button>
                    <Button className='navBtn' variant="outline-success">Sign up</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HomezNavbar;
