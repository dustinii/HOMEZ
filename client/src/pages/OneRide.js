import React from 'react';
import { useParams } from 'react-router-dom';
import HomezNavbar from '../components/Navbar'
import { Button } from 'react-bootstrap';

import {
    useQuery,
    useMutation
} from '@apollo/client';
import { GET_ONE_RIDE } from '../utils/queries';
import { COMPLETE_RIDE } from '../utils/mutations';

function OneRide() {
    const { rideId } = useParams();
    const [completeRide] = useMutation(COMPLETE_RIDE);
    const { loading, data } = useQuery(GET_ONE_RIDE, {
        variables: { rideId: rideId }
    });

    const ride = data?.ride || {};

    console.log(ride);

    return (
        <>
            <HomezNavbar />

            <div className="container">
                <div className="row">
                    {!loading ? <div className="col">
                        <div className="card mt-5">
                            <div className="card-body">
                                <h5 className="card-title">{ride.origin} to {ride.destination} @ ${ride.price}</h5>
                                {/* TODO: What is this paragraph? */}
                                <p className="card-text">Mark the ride as complete to finalize your booking.</p>
                                <Button type="submit" className="submitBtn" variant="outline-success" onClick={async () => {
                                    await completeRide({ variables: { rideId: rideId } });
                                    window.location.assign('/pastrides');
                                }}>Mark Ride as Complete</Button>
                            </div>
                        </div>
                    </div> : <div className="col">Loading...</div>}
                </div>
            </div>
        </>
    );
}

export default OneRide;