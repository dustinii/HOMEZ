import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <Container>
                <Row>
                    <Col>
                        <h5>About</h5>
                        <Link to="/about" className="text-white">Learn More</Link>
                    </Col>
                    <Col>
                        <h5>Help</h5>
                        <Link to="/support" className="text-white">Support</Link>
                    </Col>
                    <Col>
                        <h5>Legal</h5>
                        <Link to="/privacy-policy" className="text-white">Privacy Policy</Link><br />
                        <Link to="/terms-of-service" className="text-white">Terms of Service</Link>
                    </Col>
                    <Col>
                        <h5>Support Us</h5>
                        <Link to="/donate" className="text-white">Donate</Link>
                    </Col>
                </Row>
                <Row className="border-top pt-3">
                    <Col>
                        <p className="text-center">© {new Date().getFullYear()} Homez Inc.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
