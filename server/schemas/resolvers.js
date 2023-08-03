const { signToken } = require('../utils/auth');
// going to need this for the login and signup mutations.
const { AuthenticationError } = require('apollo-server-express');
const { User, Ride, Homez } = require('../models');

const rides = [];

const resolvers = {
  Query: {
    // this is for the user with a account type of "rider", logged in role is rider
    meAsRider: async (parent, args, context) => {
      if (context.user) {
        const riderData = await User.findOne({ _id: context.user._id, role: "rider" }).select('-__v -password');
        return riderData;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // this is for the user who is is logged in as a driver - role enum is homieuser
    meAsHomez: async (parent, args, context) => {
      if (context) {
        const homezData = await User.findOne({ _id: context.user._id, role: "homezuser" }).select('-__v -password');
        return homezData;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // find a single driver
    findSingleHomie: async (_, args, context) => {
      const homie = await User.findOne({ username: args.username })
      return homie;
    },
    // find a driving team
    homezTeam: async (_, args, context) => {
      const homezTeam = await Homez.findOne({ _id: args._id })
      return homezTeam
    },
    // return all rides
    rides: () => {
      return Ride.find({})
    }

  },

  Mutation: {
    addUser: async (parent, args) => {
      const rider = await User.create(args);
      const token = signToken(rider);
      return { token, rider };
    },
    createTeam: async (parent, args)=> {
      const team = Homez.create(args)
      return team;
    },
    // login rider
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
   
     postRide: async (parent, args, context) => {
      if (context.user) {
    
        const newRide = await Ride.create({...args, riderId: context.user._id})
        return newRide;
      }
     }


  },
};

module.exports = resolvers;