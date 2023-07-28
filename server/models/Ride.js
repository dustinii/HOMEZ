const { Schema } = require('mongoose');


const rideSchema = new Schema({
  driver: {
    type: String,
    required: true,
  },

  milesAway: {
    type: Number,
    required: true,
  },
 
  EstimatedDropOff: {
    type: Number,
    required: true,
  },
  Price: {
    type: Number,
  },
  
});

module.exports = rideSchema;