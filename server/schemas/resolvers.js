const { signToken } = require('../utils/auth');
// going to need this for the login and signup mutations.
const { AuthenticationError } = require('apollo-server-express');
const { Rider, HomezUser } = require('../models');

const resolvers = {
    Query: {
      meAsRider: async (parent, args, context) => {
        if (context.rider) {
          const riderData = await Rider.findOne({ _id: context.rider._id }).select('-__v -password');
          return riderData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },

      meAsHomez: async (parent, args, context) => {
        if (context.homez) {
          const homezData = await HomezUser.findOne({ _id: context.homez._id }).select('-__v -password');
          return homezData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
    },
  
    Mutation: {
      addRider: async (parent, args) => {
        const rider = await Rider.create(args);
        const token = signToken(rider);
        return { token, rider };
      },
      addHomezUser: async (parent, args) => {
        const homez = await HomezUser.create(args);
        const token = signToken(homez);
        return { token, homez };
      },
      login: async (parent, { email, password }) => {
        const rider = await Rider.findOne({ email });
  
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
        const homez = await HomezUser.findOne({ email });
  
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
      
      
      
    },
  };

  module.exports = resolvers;
