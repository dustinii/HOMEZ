import React from 'react';
import HomezNavbar from '../components/Navbar';
import MapForm from '../components/mapForm';

function Ride () {
    const handleInputFocus = (inputName) => {
        console.log('Focus:', inputName);
    }

    return (
        <div>
            <HomezNavbar />
            <h1 className='rideTitle'>Have a Seat, HOMEZ Will Take the Wheel</h1>
            <div className='mapForm'>
            <MapForm handleInputFocus={handleInputFocus} />
            </div>
        </div>
    );
}

export default Ride;
