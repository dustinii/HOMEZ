import React from "react";
import HomezNavbar from "../components/Navbar";
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
      {!Auth.loggedIn() ? (
       <Home /> 
       
      ) : (user.role === "rider" ? (<Rider rider={user} />) : (<Driver driver={user} />))}
    </>
  );
}

export default Ride;
