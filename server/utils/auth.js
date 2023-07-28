const jwt = require('jsonwebtoken');


// secret will get changed to a .env file later on. This is just a placeholder for now. and expiration can be changed later as well.
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

// we can change this to be whatever we want later if the names dont match up with the model or anything in the graphql things. This is pretty much the boiler plate for the auth.js file.

module.exports = {
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};


