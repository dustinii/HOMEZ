import react from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import HomezNavbar from '../components/Navbar';


const PastDrives = () => {

    return (
    <>
    <HomezNavbar />
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
            <small className="text-muted">just now</small>
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