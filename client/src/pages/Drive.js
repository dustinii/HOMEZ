import React from 'react';
import HomezNavbar from '../components/Navbar';

function Drive () {
    return (
        <div>
            <HomezNavbar />
            <h1>Drive Page</h1>
            <div className="drive-sections">
                <div className="current-drives">
                    <h2>Current Drives</h2>
                    
                </div>
                <div className="past-drives">
                    <h2>Past Drives</h2>
                    
                </div>
            </div>
        </div>
    );
}

export default Drive;
