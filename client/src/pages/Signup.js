import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { Button, Form, Col, Alert, Container } from 'react-bootstrap';
import { ADD_HOMEZ } from '../utils/mutations';
import Auth from '../utils/auth'
import HomezNavbar from '../components/Navbar';

const SignupHomez = () => {

  const [userFormData, setUserFormData] = useState(({ username: '', email: '', password: '', role: '', }))
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addUser, { error }] = useMutation(ADD_HOMEZ);

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
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log(data)
      Auth.login(data.addUser.token)
    } catch (err) {
      console.log(error)
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
      role: '',
    });
  };

    return (
      
      <>
          <h1 className='signupTitle'>Register with HOMEZ: For Worry-Free Nights Out</h1>

          <Form noValidate validated={validated} onSubmit={handleFormSubmit} style={{ marginBottom: '50px' }}>
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>Something went wrong with your signup</Alert>

            <Form.Group controlId="formGridFirstName" style={{ marginBottom: '20px' }}>
              <Form.Label>username</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" name="username" onChange={handleInputChange} value={userFormData.username} required />

              <Form.Control.Feedback type="invalid">username is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGridEmail" style={{ marginBottom: '20px' }}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleInputChange} value={userFormData.email} required />
              <Form.Control.Feedback type="invalid">email is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGridPassword" style={{ marginBottom: '20px' }}>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter a password" name="password" onChange={handleInputChange} value={userFormData.password} required />
              <Form.Control.Feedback type="invalid">password is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGridRole" style={{ marginBottom: '20px' }}>
              <Form.Label>choose a role</Form.Label>
              <Form.Control type="text" placeholder="Enter a role" name="role" onChange={handleInputChange} value={userFormData.role} required />
              <Form.Control.Feedback type="invalid">role is required!</Form.Control.Feedback>
            </Form.Group>
    
          <Button disabled={!(userFormData.username && userFormData.email && userFormData.password && userFormData.role)} type='submit' className="SignupBtn" variant="outline-success">Submit Homez!</Button>
          </Form>

          </>
        
        
      );
} 

export default SignupHomez;
