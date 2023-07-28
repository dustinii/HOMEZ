const { Schema } = require('mongoose');


const homieSchema = new Schema({
  rider: {
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

module.exports = homieSchema;