import React from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginHomez = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
          <Button className="LoginBtn" variant= "outline-success">Welcome Back Homez!</Button>
        </Form>
    );
}

export default LoginHomez;