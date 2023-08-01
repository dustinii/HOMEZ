const { signToken } = require('../utils/auth');
// going to need this for the login and signup mutations.
const { Homie, Ride, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

module.exports = resolvers;