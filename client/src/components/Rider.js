import MapForm from './mapForm';
import { Container, Col } from 'react-bootstrap';


export default function Rider ({rider}) {
  return (
    <div>
       <Container className="d-flex justify-content-center">
        <Col md={6}>
          <h1 className='text-center' style={{ marginTop: '50px' }}>Have a Seat,</h1>
          <h1 className='text-center' style={{ marginBottom: '50px' }}>HOMEZ Will Take the Wheel</h1>
          <div>
            <MapForm  rider={rider}/>
          </div>
        </Col>
      </Container>
    </div>
  )
}