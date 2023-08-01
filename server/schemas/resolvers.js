const { signToken } = require('../utils/auth');
// going to need this for the login and signup mutations.
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');

const rides = [];

const resolvers = {
    Query: {
      // find rider user
      meAsRider: async (parent, args, context) => {
        if (context.rider) {
          const riderData = await User.role.rider.findOne({ _id: context.rider._id }).select('-__v -password');
          return riderData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
// find homez user
      meAsHomez: async (parent, args, context) => {
        if (context.homez) {
          const homezData = await User.role.homezuser.findOne({ _id: context.homez._id }).select('-__v -password');
          return homezData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },

// return rides information
rides: () => rides,

    },
  
    Mutation: {
      addRider: async (parent, args) => {
        const rider = await User.role.rider.create(args);
        const token = signToken(rider);
        return { token, rider };
      },
      addHomezUser: async (parent, args) => {
        const homez = await User.role.homezuser.create(args);
        const token = signToken(homez);
        return { token, homez };
      },
      // login rider
      login: async (parent, { email, password }) => {
        const rider = await User.role.rider.findOne({ email });
  
        if (!rider) {
          throw new AuthenticationError('No rider found');
        }
  
        const correctPw = await rider.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(rider);
  
        return { token, rider };
      },
      login: async (parent, { email, password }) => {
        const homez = await User.role.homezuser.findOne({ email });
  
        if (!homez) {
          throw new AuthenticationError('No homez found');
        }
  
        const correctPw = await homez.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(homez);
  
        return { token, homez };
      },
      
      // post ride information
      postRideInformation: (parent, {user, price, destination, origin, timeForDeparture }) => {

      }
      
      
    },
  };

  module.exports = resolvers;



module.exports = resolvers;