import React, { useState } from 'react';
// import two things,BOOK_RIDE and useMutation from apollo/client
import { POST_NEW_RIDE } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const MapForm = ({rider}) => {
   const [postRide, {data, error, loading}] = useMutation(POST_NEW_RIDE)

    const [ formState, setFormState] = useState({
        origin: '',
        destination: '',
        timeForDeparture: ''
    });

    const handleChange = (event) => {
        const { name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value
        })
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
        console.table(formState);
        await postRide({variables: {
          ...formState
        }})
        setFormState({
          origin: '',
          destination: '',
          timeForDeparture: ''
      })
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Origin:
          <input type="text" name="origin" value={formState.origin} onChange={handleChange}  />
        </label>
        <label>
          Destination:
          <input type="text" name="destination" value={formState.destination} onChange={handleChange} />
        </label>
        <label>
          Time of Ride:
          <input type="datetime-local" name="timeForDeparture" value={formState.timeForDeparture} onChange={handleChange} />
        </label>
        <input className='bookHomez' type="submit" value="Book your HOMEZ" />
      </form>
    );
  }
  
  export default MapForm;