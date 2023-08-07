const { Schema, model } = require('mongoose');

const rideSchema = new Schema({

  
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  timeForDeparture: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  homezTeamId: {
    type: Schema.Types.ObjectId,
    ref: 'Homez',
  },       
  riderID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
  
},
// set this to use virtual below
{
  toJSON: {
    virtuals: true,
  },
}
);

const Ride = model('Ride', rideSchema);

module.exports = Ride;
