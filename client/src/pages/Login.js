import React from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_HOMEZ } from '../utils/mutations';
import Auth from '../utils/auth';
import HomezNavbar from '../components/Navbar';


const LoginHomez = () => {

    const [userFormData, setUserFormData] = useState(({ email: '', password: '' }))
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [login, { error }] = useMutation(LOGIN_HOMEZ);

    useEffect(() => {
        if (error) {
            setShowAlert(true);
        } else {
            setShowAlert(false)
        }
    }, [error]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value })
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await login({
                variables: { ...userFormData },
            });
            console.log(data)
            Auth.login(data.login.token)
        } catch (err) {
            console.log(error)
        }

        setUserFormData({
            email: '',
            password: '',
        });

    };

    return (
        <>

            <Container className="d-flex justify-content-center">
                <Col md={6}>
                    <h1 className='text-center' style={{ marginTop: '50px' }}>Welcome Back to HOMEZ</h1>
                    {/* <Form >
                        <Form.Group controlId="formGroupUsername" style={{ marginBottom: '20px' }}>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter your username" required />
                            <Form.Control.Feedback type="invalid">Username is required!</Form.Control.Feedback>
                        </Form.Group> */}

                    {/* <h2 className='loginSubTitle'>Login to your account</h2> */}

                    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                        <div className="loginForm">
                            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>Wrong login</Alert>

                            <Form.Group as={Col} controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" name="email" onChange={handleInputChange} value={userFormData.email} required />
                                <Form.Control.Feedback type="invalid">Incorrect email!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password" name="password" onChange={handleInputChange} value={userFormData.password} required />
                                <Form.Control.Feedback type="invalid">Incorrect password!</Form.Control.Feedback>
                            </Form.Group>

                            <div className="d-flex justify-content-center" style={{ marginBottom: '50px' }}>
                                <Button disabled={!(userFormData.email && userFormData.password)} type="submit" className="LoginBtn" variant="outline-success">Welcome Back Homez!</Button>
                            </div>
                        </div>
                    </Form>
                </Col>
            </Container>
        </>
    );
}

export default LoginHomez;
