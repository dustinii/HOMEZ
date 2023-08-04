import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button, Col, Alert } from 'react-bootstrap';
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
            email: '',
            password: '',
        });

    };
 
    return (
        <>
            <HomezNavbar />

                <h1 className='loginTitle'>Welcome Back to HOMEZ</h1>

                <h2 className='loginSubTitle'>Login to your account</h2>

                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <div className="loginForm">
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>Wrong login</Alert>

                    <Form.Group as={Col} controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" name="email" onChange={handleInputChange} value={userFormData.email} required/>
                        <Form.Control.Feedback type= "invalid">Incorrect email!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" name="password" onChange={handleInputChange} value={userFormData.password} required/>
                        <Form.Control.Feedback type= "invalid">Incorrect password!</Form.Control.Feedback>
                    </Form.Group>
                    <Button abled={!(userFormData.email && userFormData.password)} type="submit" className="LoginBtn" variant="outline-success">Welcome Back Homez!</Button>
                    </div>
                </Form>
        </>
    );
}


export default LoginHomez;
