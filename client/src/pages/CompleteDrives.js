import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const CompleteDrives = () => {
    return (
        <>
            <HomezNavbar />
            <h2 className='CompletedDrivesTitle'>Completed Drives</h2>
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
                            <strong className="me-auto">Your completed drives</strong>
                            <small className="text-muted">just now</small>
                        </Toast.Header>
                        <Toast.Body>LAX</Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>

        </>

    );
}

export default CompleteDrives;