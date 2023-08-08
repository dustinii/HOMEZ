import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Donate = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Support Homez</Card.Title>
              <Card.Text>
                As we continue to improve our Homez platform and offer the best ride-sharing experience, we appreciate your support. Donations help us cover the costs of maintenance, further development, and ensuring the highest quality service for our users.
              </Card.Text>
              <Button variant="primary" onClick={() => window.location.href="https://donate.stripe.com/14kaFjbRq6OibD28ww"}>
                Donate with Stripe
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Donate;
