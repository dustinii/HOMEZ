import React from "react";
import { Container, Col } from 'react-bootstrap';
import HomezNavbar from "../components/Navbar";
import MapForm from "../components/mapForm";
import rideBg from "../images/rideBg.jpg";

function Ride() {
  const handleInputFocus = (inputName) => {
    console.log("Focus:", inputName);
  };

  return (
    <>
      <HomezNavbar />
      <Container fluid style={{ backgroundImage: `url(${rideBg})`, backgroundSize: 'cover', height: '100vh' }}>
        <Container className="d-flex justify-content-center align-items-center h-100">
          <Col md={6} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
            <h1 className='text-center mt-3'>Have a Seat,</h1>
            <h1 className='text-center mb-3'>HOMEZ Will Take the Wheel</h1>
            <div>
              <MapForm handleInputFocus={handleInputFocus} />
            </div>
          </Col>
        </Container>
      </Container>
    </>
  );
}

export default Ride;
