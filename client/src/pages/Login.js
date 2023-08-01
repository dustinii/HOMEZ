import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button, Container } from 'react-bootstrap';
import { LOGIN_HOMEZ } from '../utils/mutations';
import Auth from '../utils/auth';
import HomezNavbar from '../components/Navbar';


const LoginHomez = () => {

    const [userFormData, setUserFormData] = useState(({ email: '', password: '' }))
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [login, { error }] = useMutation(login);

    useEffect(() => {
        if (error) {
            setShowAlert(true);
        } else {
            setShowAlert(false)
        }
    }, [error]);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if(form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await login({
                variables: { ...userFormData },
            });
            console.log(data)
            Auth.login(data.login.token)
        } catch(err) {
            console.log(error)
        }

        setUserFormData({
            email: '',
            password: '',
        });
    };
 
    return (
        <>
            <HomezNavbar />

            <Container>

                <h1>Login</h1>

                <Form noValidate validated={validated} onSubmit={handleFormSubmit}> 
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