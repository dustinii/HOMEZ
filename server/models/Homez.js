const { Schema } = require('mongoose');
const rideSchema = require('./Ride');

const homieSchema = new Schema({
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
  rides: [rideSchema]
  
  
});

module.exports = homieSchema;
