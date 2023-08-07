// /client/src/pages/TermsOfService.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TermsOfService = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <Card>
            <Card.Header>
              <h2>Terms of Service</h2>
            </Card.Header>
            <Card.Body>
              <h4>Introduction</h4>
              <p>
                Welcome to Homez! By using our service, you agree to these terms. Please read them
                carefully.
              </p>

              <h4>Using our Services</h4>
              <p>
                You must follow all policies made available to you within the Services. 
                Do not misuse our Services, for example, do not interfere with our Services or try to access them 
                using a method other than the interface and the instructions that we provide.
              </p>

              <h4>Accounts</h4>
              <p>
                You may need an Homez Account in order to use some of our Services. You may create 
                your own Homez Account, or your Homez Account may be assigned to you by an 
                administrator, such as your employer. If you are using a Homez Account assigned to you by 
                an administrator, different or additional terms may apply and your administrator may be able to 
                access or disable your account.
              </p>

              <h4>Your Content in our Services</h4>
              <p>
                Some of our Services allow you to upload, submit, store, send or receive content. You retain 
                ownership of any intellectual property rights that you hold in that content. When you upload, 
                submit, store, send or receive content to or through our Services, you give Homez a 
                worldwide license to use, host, store, reproduce, modify, create derivative works, communicate, 
                publish, publicly perform, publicly display and distribute such content.
              </p>

              <h4>Modifying and Terminating our Services</h4>
              <p>
                We are constantly changing and improving our Services. We may add or remove functionalities or 
                features, and we may suspend or stop a Service altogether. You can stop using our Services at any 
                time, although we’ll be sorry to see you go. Homez may also stop providing Services to you, or 
                add or create new limits to our Services at any time.
              </p>

              <h4>Liabilities</h4>
              <p>
                Homez and its suppliers and distributors will not be responsible for lost profits, revenues, 
                or data, financial losses or indirect, special, consequential, exemplary, or punitive damages.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsOfService;
