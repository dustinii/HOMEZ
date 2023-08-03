import React from "react";
import HomezNavbar from "../components/Navbar";
import developerImg from "../images/developers.jpg";

function Developers() {
  return (
    <div>
      <HomezNavbar />
      <div className="developerContainer">
        <img className="developerImg" src={developerImg} alt="Developers" />
      <h1 className="developerTitle">We're Not Just Your HOMEZ, We're Your Friends</h1>
      </div>
      <div className="devIntro">
      <p>
        Behind every ride HOMEZ offers, there's a team of dedicated and
        passionate individuals who make it possible. They are not just
        tech-savvy professionals, they're people who genuinely care about making
        your journey home safe and enjoyable. Meet the remarkable individuals
        who drive our mission forward, innovating and striving every day to make
        HOMEZ more than just a ride-sharing service. When you join the HOMEZ
        community, you're not just getting a ride home, you're making friends.
      </p></div>
      <div className="developerGrid">
        <div className="developer">
          <h2>Dustin II</h2>
          <p>This is a short bio for Developer 1.</p>
        </div>
        <div className="developer">
          <h2>Paul Koehler</h2>
          <p>This is a short bio for Developer 2.</p>
        </div>
        <div className="developer">
          <h2>Joceliyn Valdez</h2>
          <p>This is a short bio for Developer 3.</p>
        </div>
        <div className="developer">
          <h2>Samuel Rey</h2>
          <p>This is a short bio for Developer 4.</p>
        </div>
        <div className="developer">
          <h2>Brian Autieri</h2>
          <p>This is a short bio for Developer 5.</p>
        </div>
        <div className="developer">
          <h2>Joel Estrada</h2>
          <p>This is a short bio for Developer 6.</p>
        </div>
        <div className="developer">
          <h2>Kin Ho</h2>
          <p>This is a short bio for Developer 7.</p>
        </div>
        <div className="developer">
          <h2>Mauricio Ortiz</h2>
          <p>This is a short bio for Developer 8.</p>
        </div>
      </div>
    </div>
  );
}

export default Developers;
