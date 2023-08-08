import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'; 
// import two things,BOOK_RIDE and useMutation from apollo/client
import { POST_NEW_RIDE } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const MapForm = ({ rider }) => {
  const [postRide, { data, error, loading }] = useMutation(POST_NEW_RIDE)

  const [formState, setFormState] = useState({
    origin: '',
    destination: '',
    timeForDeparture: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.table(formState);
    const response = await postRide({
      variables: {
        ...formState
      }
    })
    setFormState({
      origin: '',
      destination: '',
      timeForDeparture: ''
    })

    console.log('response', response);

    window.location.assign(`/rides/${response.data.postRide._id}`);
  }

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Origin:</Form.Label>
              <Form.Control
                type="text"
                name="origin"
                value={formState.origin}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Destination:</Form.Label>
              <Form.Control
                type="text"
                name="destination"
                value={formState.destination}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Time of Ride:</Form.Label>
              <Form.Control
                type="datetime-local"
                name="timeForDeparture"
                value={formState.timeForDeparture}
                onChange={handleChange}
              />
            </Form.Group>

            <Button className="bookHomez" type="submit">Book your HOMEZ</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default MapForm;