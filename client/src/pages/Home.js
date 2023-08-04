import React from "react";
import { Link } from "react-router-dom";
import HomezNavbar from "../components/Navbar";
import laSkyline from "../images/laSkyline.jpg";
import behindWheel from "../images/behindWheel.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";

function Home() {
  return (
    <div>
      <HomezNavbar />
      <div className="imageOverlay">
  <img className="laSkyline" src={laSkyline} alt="Los Angeles Skyline" />
  <Container fluid className="overlayContainer text-center">
    <Row>
      <Col>
        <h1 className="homeTitle">
          Welcome to HOMEZ: Responsible Ride-Sharing
        </h1>
      </Col>
    </Row>
  </Container>
</div>
<Card className="needARide">
  <Card.Body>
    <Link to="/ride" className="text-dark cardLink">
      <Card.Text>Need a ride? Sign up as a passenger</Card.Text>
    </Link>
  </Card.Body>
</Card>
<Card className="haveAccount">
  <Card.Body>
    <Link to="/login" className="text-dark cardLink">
      <Card.Text>Already have an account? Sign in</Card.Text>
    </Link>
  </Card.Body>
</Card>


      <section className="blazeIt">
        <div className="blazeItText">
          <p>Earn $420.69 in Los Angeles every day</p>
          <Link to="/drive">
            <button className="getStarted">Get started</button>
          </Link>
        </div>
      </section>
      <div className="imageTextContainer">
        <img className="behindWheel" src={behindWheel} alt="Behind the Wheel" />
        <p className="rideParagraph">
          Partied a little too hard and need a ride home for both you and your
          car? Don't worry, we've got you covered. At HOMEZ, we understand that
          a great night out sometimes means you're not in the best condition to
          drive home. That's why we're here. With our easy to navigate website,
          you can book a ride with your HOMEZ. We'll send two drivers - one to
          drive you home in your own car, and another to pick up your driver. No
          more stressing about leaving your car overnight or bothering friends
          for a ride back to it the next day. With HOMEZ, you can enjoy your
          night to the fullest and still make it home safe and sound. We've got
          your back - and your car's too.
        </p>
      </div>
    </div>
  );
}

export default Home;
