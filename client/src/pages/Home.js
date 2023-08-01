import React from 'react';
import HomezNavbar from '../components/Navbar';

function Home () {
    return (
        <div>
            <HomezNavbar />
            <h1 className='homeTitle'>Welcome to HOMEZ: Responsible Ride-Sharing</h1>
            <p>Earn $420.69 in Los Angeles every day</p>
            <button>Get started</button>
            <p>Already have an account? Sign in</p>
        </div>
    );
}

export default Home;
