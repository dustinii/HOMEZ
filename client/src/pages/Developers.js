import React from "react";
import HomezNavbar from "../components/Navbar";
import developerImg from "../images/developers.jpg";

function Developers() {
  return (
    <div>
      <HomezNavbar />
      <div className="developerContainer">
        <img className="developerImg" src={developerImg} alt="Developers" />
        <h1 className="developerTitle">
          We're Not Just Your HOMEZ, We're Your Friends
        </h1>
      </div>
      <div className="devIntro">
        <p>
          Behind every ride HOMEZ offers, there's a team of dedicated and
          passionate individuals who make it possible. They are not just
          tech-savvy professionals, they're people who genuinely care about
          making your journey home safe and enjoyable. Meet the remarkable
          individuals who drive our mission forward, innovating and striving
          every day to make HOMEZ more than just a ride-sharing service. When
          you join the HOMEZ community, you're not just getting a ride home,
          you're making friends.
        </p>
      </div>
      <div className="developerGrid">
        <div className="developer">
          <h2>Dustin II</h2>
          <p>This is a short bio for Developer 1.</p>
        </div>
        <div className="developer">
          <h2>Paul Koehler</h2>
          <p>
            Full stack developer with a passion for learning new technologies
            and in particular making sure sever interfaces communicate with an
            entire application. He comes into this with an extensive background
            as a Japanese to English translator and interpreter.
          </p>
        </div>
        <div className="developer">
          <h2>Joceliyn Valdez</h2>
          <p>
            Talented junior developer with a passion for coding and
            problem-solving. With a keen eye for detail and a strong foundation
            in programming languages, she constantly seeks to learn and grow in
            the world of software development.
          </p>
        </div>
        <div className="developer">
          <h2>Samuel Rey</h2>
          <p>
            Motivated Junior Full-Stack Web Developer with a background in
            Aviation Ordnance and a passion for creating innovative web
            solutions. He brings strong technological skills and meticulous
            attention to detail, driving his commitment to excel in the dynamic
            world of web development.
          </p>
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
          <p>
            Developer from Southern California. Backend authentication for
            Homez.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Developers;
