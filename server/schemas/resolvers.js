const { signToken } = require("../utils/auth");
// going to need this for the login and signup mutations.
const { AuthenticationError } = require("apollo-server-express");
const { User, Ride, Homez } = require("../models");
// const dayjs = require('dayjs');

const rides = [];

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    // this is for the user with a account type of "rider", logged in role is rider
    meAsRider: async (parent, args, context) => {
      if (context.user) {
        console.log(context.user);
        const riderData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return riderData;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // this is for the user who is is logged in as a driver - role enum is homieuser
    meAsHomez: async (parent, args, context) => {
      if (context) {
        const homezData = await User.findOne({
          _id: context.user._id,
          role: "homezuser",
        }).select("-__v -password");
        return homezData;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // find a single driver
    findSingleHomie: async (_, args, context) => {
      const homie = await User.findOne({ username: args.username });
      return homie;
    },
    // find a driving team
    homezTeam: async (_, args, context) => {
      const homezTeam = await Homez.findOne({ _id: args._id });
      return homezTeam;
    },
    // return all rides
    rides: async () => {
      return Ride.find({});
    },
    myRides: async (_, args, context) => {
      if (context.user) {
        const rides = await Ride.find({ riderID: context.user._id, active: false });
        return rides;
      }
      throw new AuthenticationError("you must be logged in");
    },
    ride: async (_, args) => {
      return await Ride.findById(args.id);
    },
    allusers: async (_, args, context) => {
      console.log("all users");
      return await User.find({});
    },
    riderRides: async (parent, args, context) => {
      if (context.user) {
        console.log(context.user._id);
        const rides = await Ride.find({ riderID: context.user._id });
        return rides;
      }
      throw new AuthenticationError("you must be logged in");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const rider = await User.create(args);
      const token = signToken(rider);
      return { token, rider };
    },
    createTeam: async (parent, args) => {
      const team = Homez.create(args);
      return team;
    },
    // login rider
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user found");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    postRide: async (parent, args, context) => {
      if (context.user) {
        // Use Day.js to format the timeForDeparture field
        // const formattedTimeForDeparture = dayjs.unix(args.timeForDeparture).format('YYYY-MM-DD HH:mm:ss');
        // Create the ride with the formatted timeForDeparture
        const newRide = await Ride.create({
          ...args,
          riderID: context.user._id,
          // timeForDeparture: formattedTimeForDeparture, // Use the formatted timeForDeparture
        });
        return newRide;
      }
    },

    completeRide: async (parent, { HomezId, RideId }, context) => {
      if (context.user) {
        const ride = await Ride.findById(RideId);
        ride.active = false;
        ride.save();

        return ride;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};
module.exports = resolvers;
