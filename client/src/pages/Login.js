import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button, Col, Alert } from 'react-bootstrap';
import { LOGIN_HOMEZ } from '../utils/mutations';
import Auth from '../utils/auth';
import HomezNavbar from '../components/Navbar';


const LoginHomez = () => {

    const [userFormData, setUserFormData] = useState(({ username: '', password: '' }))
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
        setUserFormData({ ...userFormData, [name] : value})
    };

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
            username: '',
            password: '',
        });
    };
 
    return (
        <>
            <HomezNavbar />

                <h1 className='loginTitle'>Welcome Back to HOMEZ</h1>

                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <div className="loginForm">
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>Wrong Username</Alert>

                    <Form.Group as={Col} controlId="formGroupUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter your username" name="username" onChange={handleInputChange} value={userFormData.username} required/>
                        <Form.Control.Feedback type= "invalid">Username is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" name="password" onChange={handleInputChange} value={userFormData.password} required/>
                        <Form.Control.Feedback type= "invalid">Password is required!</Form.Control.Feedback>
                    </Form.Group>
                    <Button className="LoginBtn" variant="outline-success">Welcome Back Homez!</Button>
                    </div>
                </Form>
        </>
    );
}

export default LoginHomez;