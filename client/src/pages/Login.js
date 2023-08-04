import React from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import HomezNavbar from '../components/Navbar';

const LoginHomez = () => {
    return (
        <>
            <HomezNavbar />

            <Container className="d-flex justify-content-center">
                <Col md={6}>
                    <h1 className='text-center' style={{ marginTop: '50px' }}>Welcome Back to HOMEZ</h1>
                    <Form style={{ marginBottom: '50px' }}>
                        <Form.Group controlId="formGroupUsername" style={{ marginBottom: '20px' }}>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter your username" required />
                            <Form.Control.Feedback type="invalid">Username is required!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formGroupPassword" style={{ marginBottom: '20px' }}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" required />
                            <Form.Control.Feedback type="invalid">Password is required!</Form.Control.Feedback>
                        </Form.Group>
                        <div className="d-flex justify-content-center" style={{ marginBottom: '50px' }}>
                            <Button type="submit" className="LoginBtn" variant="outline-success">Welcome Back Homez!</Button>
                        </div>
                    </Form>
                </Col>
            </Container>
        </>
    );
}

export default LoginHomez;
