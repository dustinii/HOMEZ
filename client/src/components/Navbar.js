import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

const HomezNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="https://polar-cove-07937.herokuapp.com/" target="_blank" >Ride</Nav.Link>
                    <Nav.Link href="#link">Drive</Nav.Link>
                    <Nav.Link href="#link">Deliver</Nav.Link>
                    <Nav.Link href="#link">Business</Nav.Link>
                    <Nav.Link href="#link">More</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Sign in</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HomezNavbar;
