import React from "react";
import { Link } from "react-router-dom";
import HomezNavbar from "../components/Navbar";
import laSkyline from "../images/laSkyline.webp";

function Home() {
  return (
    <div>
      <HomezNavbar />
      <h1 className="homeTitle">Welcome to HOMEZ: Responsible Ride-Sharing</h1>
      <Link to="/ride">
        <p>Need a ride? Sign up as a passenger</p>
      </Link>
        <Link to="/login">
      <p>Already have an account? Sign in</p></Link>
        <img className="laSkyline" src={laSkyline} alt="Los Angeles Skyline" />
        <p>Earn $420.69 in Los Angeles every day</p>
      <Link to="/drive">
        <button className="getStarted">Get started</button>
      </Link>
    </div>
  );
}

export default Home;
