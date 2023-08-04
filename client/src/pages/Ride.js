import React from "react";
import { Container, Col } from 'react-bootstrap';
import HomezNavbar from "../components/Navbar";
import MapForm from "../components/mapForm";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../utils/queries";
import Auth from "../utils/auth";
import Rider from "../components/Rider";
import Driver from "../components/Driver";
import Home from "./Home";

function Ride() {
  const { loading, data } = useQuery(GET_USER);
  const user = data?.user || {};

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <HomezNavbar />
<<<<<<< HEAD
      {!Auth.loggedIn() ? (
       <Home /> 
       
      ) : (user.role === "rider" ? (<Rider rider={user} />) : (<Driver driver={user} />))}
    </div>
=======
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
>>>>>>> main
  );
}

export default Ride;
