import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import HomezNavbar from "../components/Navbar";

//Template for Reviews page
const Reviews = () => {
    return (
        <>

            <HomezNavbar />

            <Container>
                <h1 className='reviewTitle'>Had a good experience? Didn't? Either way, review us HOMEZ!</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="Form.ControlTextarea">
                        <Form.Label>Give us a review HOMEZ:</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button className="ReviewBtn" variant="outline-success">Submit Review</Button>
                </Form>
            </Container>

        </>
    );
}


export default Reviews;