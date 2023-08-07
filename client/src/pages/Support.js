// /client/src/pages/Support.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Support = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center mb-4">Customer Support</h1>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Having trouble with a ride?</Card.Title>
              <Card.Text>
                If you've recently had a ride and encountered any issues, please report it through our ride history in your profile. For immediate assistance, reach out to our 24/7 support hotline.
              </Card.Text>
              <Button variant="primary">Go to Ride History</Button>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>General Inquiries</Card.Title>
              <Card.Text>
                For general inquiries or feedback, feel free to drop us an email at support@uberclone.com. We aim to respond within 24 hours.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Frequently Asked Questions</Card.Title>
              <Card.Text>
                Check out our <a href="#">FAQ section</a> for answers to common questions about using our platform, payments, and more.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Stay Connected</Card.Title>
              <Card.Text>
                Follow us on our social media channels for updates, promos, and more. For partnership inquiries, please contact our business development team.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Support;
