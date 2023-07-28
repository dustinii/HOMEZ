import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

const HomezNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">HOMEZ</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="https://polar-cove-07937.herokuapp.com/" target="_blank" >Ride</Nav.Link>
                    <Nav.Link href="#link">Drive</Nav.Link>
                    <Nav.Link href="#link">Deliver</Nav.Link>
                    <Nav.Link href="#link">Business</Nav.Link>
                    <Nav.Link href="#link">More</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Sign in</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HomezNavbar;


// import React from 'react';

// function Navigation({ currentPage, handlePageChange }) {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <a
//           href="#portfolio"
//           onClick={() => handlePageChange('Portfolio')}

//           className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//         >
//           Portfolio
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#about"
//           onClick={() => handlePageChange('About')}

//           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//         >
//           About
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#Resume"
//           onClick={() => handlePageChange('Resume')}
//           //  TODO: Add a comment explaining what this logic is doing

//           className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
//         >
//           Resume
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact"
//           //  TODO: Add a comment explaining what this logic is doing

//           onClick={() => handlePageChange('Contact')}
//           className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </a>
//       </li>
//     </ul>
//   );
// }

// export default Navigation; 