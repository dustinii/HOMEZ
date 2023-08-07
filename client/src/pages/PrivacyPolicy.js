// /client/src/pages/PrivacyPolicy.js
import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

const PrivacyPolicy = () => {
    return (
        <Container>
            <Card className="mb-4">
                <Card.Header>
                    <h1>Privacy Policy</h1>
                </Card.Header>
                <Card.Body>
                    <p>
                        At Homez, the protection of your data and privacy is of paramount importance to us. This policy outlines the types of data we collect, how it's used, and the precautions taken to ensure it remains private.
                    </p>
                </Card.Body>
            </Card>
            <h2>Data We Collect</h2>
            <ListGroup>
                <ListGroup.Item>
                    <strong>Account Data:</strong> Information such as your name, email address, phone number, and payment details.
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Ride Details:</strong> We store details about rides you take, such as pickup and drop-off locations, route taken, and time of the ride.
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Device Information:</strong> Device-specific information when you access our services, including hardware and software information, device location, and device identifiers.
                </ListGroup.Item>
            </ListGroup>

            <h2>How We Use Your Data</h2>
            <ListGroup>
                <ListGroup.Item>
                    To improve our service by understanding how our platform is used.
                </ListGroup.Item>
                <ListGroup.Item>
                    For safety and verification purposes.
                </ListGroup.Item>
                <ListGroup.Item>
                    To process payments for rides.
                </ListGroup.Item>
                <ListGroup.Item>
                    To send updates, marketing materials, and other service-related communications.
                </ListGroup.Item>
            </ListGroup>

            <h2>Data Protection</h2>
            <p>
                Homez implements stringent measures to ensure your data is protected against unauthorized access, changes, disclosure, or deletion. Your data is stored on secure servers with limited access.
            </p>

            <h2>Cookies</h2>
            <p>
                We use cookies to enhance user experience. These are small files stored on your device. You have the option to refuse cookies, but doing so might hinder some functionalities.
            </p>

            <h2>Changes to this Policy</h2>
            <p>
                Homez reserves the right to update our Privacy Policy. We encourage users to frequently check this page for any changes. Your continued use of the service signifies your acceptance of these changes.
            </p>

        </Container>
    );
};

export default PrivacyPolicy;
