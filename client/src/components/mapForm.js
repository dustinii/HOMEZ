import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
// import two things,BOOK_RIDE and useMutation from apollo/client

const MapForm = ({ handleInputFocus }) => {
    // const { bookRide } = useMutation(BOOK_RIDE);

    const [ formState, setFormState] = useState({
        origin: '',
        destination: '',
        time: ''
    });

    const handleChange = (event) => {
        const { name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value
        })
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
        console.table(formState);

        // bookRide();
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Origin:
          <input type="text" name="origin" value={formState.origin} onChange={handleChange} onFocus={() => handleInputFocus('origin')} />
        </label>
        <label>
          Destination:
          <input type="text" name="destination" value={formState.destination} onChange={handleChange} onFocus={() => handleInputFocus('destination')} />
        </label>
        <label>
          Time of Ride:
          <input type="datetime-local" name="time" value={formState.time} onChange={handleChange} />
        </label>
        <input type="submit" value="Book your HOMEZ" />
      </form>
    );
  }
  
  export default MapForm;