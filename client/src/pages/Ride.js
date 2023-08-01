// Ride.js

import React from "react";
import HomezNavbar from "../components/Navbar";
import MapForm from "../components/mapForm";
import behindWheel from "../images/behindWheel.jpg";

function Ride() {
  const handleInputFocus = (inputName) => {
    console.log("Focus:", inputName);
  };

  return (
    <div>
      <HomezNavbar />
      <h1 className="rideTitle">Have a Seat, HOMEZ Will Take the Wheel</h1>
      <div className="mapForm">
        <MapForm className="mapForm" handleInputFocus={handleInputFocus} />
        <div className="imageTextContainer">
          <img className="behindWheel" src={behindWheel} alt="Behind the Wheel" />
          <p className="rideParagraph">
            Partied a little too hard and need a ride home for both you and your
            car? Don't worry, we've got you covered. At HOMEZ, we understand that
            a great night out sometimes means you're not in the best condition to
            drive home. That's why we're here. With our easy to navigate website,
            you can book a ride with your HOMEZ. We'll send two drivers - one to drive you
            home in your own car, and another to pick up your driver. No more
            stressing about leaving your car overnight or bothering friends for a
            ride back to it the next day. With HOMEZ, you can enjoy your night to
            the fullest and still make it home safe and sound. We've got your back
            - and your car's too.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ride;
