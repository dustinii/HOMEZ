import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import HomezNavbar from '../components/Navbar';

import {
  MY_RIDES
} from '../utils/queries';
import { useQuery } from '@apollo/client';


const PastDrives = () => {

  const { loading, data } = useQuery(MY_RIDES);
  const rides = data?.myRides || [];

  console.log(rides);

  if (loading) {
    return (
      <div>
        <HomezNavbar />

        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <HomezNavbar />
      <h1 className='PastDrivesTitle'>Your Past Drives</h1>
      <h2 className='PastDrivesSubTitle'>See where you've been!</h2>
      <div
        aria-live="polite"
        aria-atomic="true"
        className="bg-dark position-relative"
        style={{ minHeight: '240px' }}
      >
        <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
          <Toast>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Your past drives</strong>
              <small className="text-muted">Three Days Ago</small>
            </Toast.Header>
            <Toast.Body>Los Angeles...</Toast.Body>
          </Toast>
          <Toast>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Your past drives</strong>
              <small className="text-muted">A week ago</small>
            </Toast.Header>
            <Toast.Body>Santa Monica...</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>

    </>

  );
}



export default PastDrives;