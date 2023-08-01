import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import HomezNavbar from '../components/Navbar';




const LoginHomez = () => {
    return (
        <>
            <HomezNavbar />

            <Container>

                <h1>Login</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="formGroupUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter your username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" />
                    </Form.Group>
                    <Button className="LoginBtn" variant="outline-success">Welcome Back Homez!</Button>
                </Form>
            </Container>
        </>
    );
}

export default LoginHomez;