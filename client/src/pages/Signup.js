import React, { useState, useEffect }  from 'react';
import { useMutation } from '@apollo/client';
import { Button, Form, Col, Row, Alert, Container } from 'react-bootstrap';
import { ADD_HOMEZ } from '../utils/mutations';
import Auth from '../utils/auth'
// import HomezNavBar
import HomezNavbar from '../components/Navbar';


const SignupHomez = () => {

  const [userFormData, setUserFormData] = useState(({ username: '', email: '', password: ''}))
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addHomezUser, { error }] = useMutation(ADD_HOMEZ);
  
  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else{
      setShowAlert(false)
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({...userFormData, [name] : value})
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if(form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try{
      const { data } = await addHomezUser({
        variables: { ...userFormData },
      });
      console.log(data)
      Auth.login(data.addHomezUser.token)
    } catch(err){
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
          <h1 className='signupTitle'>Register with HOMEZ: For Worry-Free Nights Out</h1>

        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <div className='signupForm'>
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>Something went wrong with your signup</Alert>

            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>username</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" name="username" onChange={handleInputChange} value={userFormData.username} required/>
              <Form.Control.Feedback type="invalid">username is required!</Form.Control.Feedback>
            </Form.Group>
 

                <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email"  name="email" onChange={handleInputChange} value={userFormData.email} required/>
              <Form.Control.Feedback type="invalid">email is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter a password" name="password" onChange={handleInputChange} value={userFormData.password} required/>
              <Form.Control.Feedback type="invalid">password is required!</Form.Control.Feedback>
            </Form.Group>
    
          <Button disabled={!(userFormData.username && userFormData.email && userFormData.password)} type='submit' className="SignupBtn" variant="outline-success">Submit Homez!</Button>
          </div>
        </Form>
        </>
      );
} 

export default SignupHomez;