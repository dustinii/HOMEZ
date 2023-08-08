import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import HomezNavbar from '../components/Navbar';
import { useQuery } from '@apollo/client';
import { GET_RIDERS_RIDES } from '../utils/queries';
const PastDrives = () => {

  const {data, error, loading} = useQuery(GET_RIDERS_RIDES)
  const pastRides = data?.riderRides || []
  console.log(pastRides);
  // Hard-coded filler data
  const rides = [
    {
      _id: '1',
      origin: 'San Francisco, CA',
      destination: 'Los Angeles, CA',
      date: '2022-05-01',
      time: '09:30 AM'
    },
    {
      _id: '2',
      origin: 'San Diego, CA',
      destination: 'San Jose, CA',
      date: '2022-05-10',
      time: '02:15 PM'
    },
    {
      _id: '3',
      origin: 'Santa Monica, CA',
      destination: 'Sacramento, CA',
      date: '2022-05-20',
      time: '11:45 AM'
    },
    {
      _id: '4',
      origin: 'Palo Alto, CA',
      destination: 'Bakersfield, CA',
      date: '2022-05-25',
      time: '04:50 PM'
    },
    {
      _id: '5',
      origin: 'Fresno, CA',
      destination: 'Oakland, CA',
      date: '2022-05-28',
      time: '06:20 PM'
    }
  ];

  return (
    <>
      <HomezNavbar />
      <Container className="mt-5">
        <h1 className='PastDrivesTitle'>Your Past Drives</h1>
        <h2 className='PastDrivesSubTitle'>See where you've been!</h2>
        <Row>
          {pastRides.map(ride => (
            <Col md={4} key={ride._id} className="mb-4">
              <Card>
                <Card.Header>
                  <strong>Date:</strong> {ride.timeForDeparture}
                  {/* <small className="text-muted float-right">{ride.timeOfDeparture}</small> */}
                </Card.Header>
                <Card.Body>
                  <Card.Text><strong>From:</strong> {ride.origin}</Card.Text>
                  <Card.Text><strong>To:</strong> {ride.destination}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default PastDrives;
