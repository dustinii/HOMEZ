const { Schema, model } = require('mongoose');

// these are your driver teams. their id will go in the driverId on Ride:
const homezSchema = new Schema(
  {
   
    homie_usrnme_1: {
      type: String,
      required: true,

    },
    homie_usrnme_2: {
      type: String,
      required: true,

    },

    rides: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Ride',
      },
    ],
   
  },
  {
    toJSON: {
      virtuals: true,
    },
   id: false
  }
);

homezSchema.virtual('rideCount').get(function () {
  return this.rides.length;
});

const Homez = model('Homez', homezSchema);

module.exports = Homez;