const { Schema } = require('mongoose');


const rideSchema = new Schema({
  origin: {
    type: String,
    required: true,
  },

  destination: {
    type: Number,
    required: true,
  },
 
  timeForDeparture: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
  },
  
});

const Ride = model('Ride', rideSchema);

module.exports = Ride;
