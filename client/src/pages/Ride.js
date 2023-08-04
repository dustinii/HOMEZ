import React from "react";
import { Container, Col } from 'react-bootstrap';
import HomezNavbar from "../components/Navbar";
import MapForm from "../components/mapForm";

function Ride() {
  const handleInputFocus = (inputName) => {
    console.log("Focus:", inputName);
  };

  return (
    <>
      <HomezNavbar />
      <Container className="d-flex justify-content-center">
        <Col md={6}>
          <h1 className='text-center' style={{ marginTop: '50px' }}>Have a Seat,</h1>
          <h1 className='text-center' style={{ marginBottom: '50px' }}>HOMEZ Will Take the Wheel</h1>
          <div>
            <MapForm handleInputFocus={handleInputFocus} />
          </div>
        </Col>
      </Container>
    </>
  );
}

export default Ride;
