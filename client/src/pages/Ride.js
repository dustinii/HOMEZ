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
            <h1>Have a Seat, HOMEZ Will Take the Wheel</h1>
            <MapForm handleInputFocus={handleInputFocus} />
        </div>
    );
}

export default Ride;
