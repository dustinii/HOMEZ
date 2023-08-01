import React, { useState } from 'react';

const MapForm = ({ handleInputFocus }) => {
    const [time, setTime] = useState('');
  
    const handleTimeChange = (event) => {
      setTime(event.target.value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Origin:', event.target.origin.value);
      console.log('Destination:', event.target.destination.value);
      console.log('Time of Ride:', time);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Origin:
          <input type="text" name="origin" onFocus={() => handleInputFocus('origin')} />
        </label>
        <label>
          Destination:
          <input type="text" name="destination" onFocus={() => handleInputFocus('destination')} />
        </label>
        <label>
          Time of Ride:
          <input type="datetime-local" name="time" value={time} onChange={handleTimeChange} />
        </label>
        <input type="submit" value="Book your HOMEZ" />
      </form>
    );
  }
  
  export default MapForm;