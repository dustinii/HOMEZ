const { Schema } = require('mongoose');

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
  
});

module.exports = homieSchema;
