import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Container,
  Modal,
  Tab,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import SignupHomez from "../pages/Signup";
import LoginHomez from "../pages/Login"

const HomezNavbar = () => {

  const [showModal, setShowModal] = useState(false);


  return (
    <>
    <Navbar className="navBar">
      <Container fluid={true} className="d-flex">
        <Navbar.Brand as={Link} to="/">
          HOMEZ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-start">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/ride" >
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
            {/* Reviews link */}
            {/* <Nav.Link as={Link} to="/reviews">
              Reviews
            </Nav.Link> */}
            {Auth.loggedIn() ? (
              <>
                <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>  
              </>
            ) : (
              <>
              <Nav.Link className="loginsign" onClick={() => setShowModal(true)}>Login/Sign up</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
          <Form>
            <Modal
        size='xl'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login' className="logBtn">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'className="signBtn">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginHomez handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignupHomez handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default HomezNavbar;
