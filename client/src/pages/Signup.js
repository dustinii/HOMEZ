import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { Button, Form, Col, Alert, Container } from 'react-bootstrap';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth'
import HomezNavbar from '../components/Navbar';

const SignupHomez = () => {

  const [userFormData, setUserFormData] = useState(({ username: '', email: '', password: '' }))
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);
  const [ driverChecked, setDriverChecked ] = useState(false);
  // const { riderChecked, setRiderChecked } = useState(false);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false)
    }
  }, [error]);
  const handleDriver = () => {
    setDriverChecked(true);
  }

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
        variables: { ...userFormData, role: driverChecked ? 'homezuser' : 'rider' },
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
    });
  };

  return (
    <>
      <HomezNavbar />
      <Container className="d-flex justify-content-center">
        <Col md={6}>
          <h1 className='text-center' style={{ marginTop: '50px' }}>Register with HOMEZ</h1>
          <h3 className='text-center'>For Worry-Free Nights Out</h3>

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

            <Form.Group style={{ marginBottom: '20px' }}>
              <Form.Label>Are you a rider or a driver?</Form.Label>
              <div className="mb-3 d-flex justify-content-center align-items-center">
                <Form.Check
                  className="mx-2"
                  inline
                  type='radio'
                  id='rider'
                  label='Rider'
                  name='role'
                  value={driverChecked}
                  // checked={driverChecked}
                  onChange={() => setDriverChecked(false)}
                />

                <Form.Check
                  className="mx-2"
                  inline
                  type='radio'
                  id='driver'
                  label='Driver'
                  name='role'
                  value={driverChecked}
                  // checked={driverChecked}
                  onChange={handleDriver}
                />
              </div>
            </Form.Group>

            <div className="d-flex justify-content-center" style={{ marginBottom: '50px' }}>
              <Button disabled={!(userFormData.username && userFormData.email && userFormData.password)} type='submit' className="SignupBtn" variant="outline-success">Submit Homez!</Button>
            </div>
          </Form>
        </Col>
      </Container>
    </>
  );
}

export default SignupHomez;
