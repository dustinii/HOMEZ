import MapForm from './mapForm';


export default function Rider ({rider}) {
  return (
    <div>
      <h1> Rider Page</h1>
      <h1 className="rideTitle">Have a Seat, HOMEZ Will Take the Wheel</h1>
      <div className="mapForm">
        <MapForm className="mapForm"  />
      </div>
    </div>
  )
}