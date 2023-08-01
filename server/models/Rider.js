const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');



const riderSchema = new Schema(
  {
    username: {
      type: String,
      
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
   
   
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash rider password
riderSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
riderSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};



const Rider = model('Rider', riderSchema);

module.exports = Rider;