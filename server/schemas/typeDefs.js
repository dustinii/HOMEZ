const { gql } = require("apollo-server-express");

// const { GraphQLServer, PubSub } = require("graphql-yoga");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    role: String!
    rides: [Ride]
  }

  type Ride {
    _id: ID
    origin: String!
    destination: String!
    timeForDeparture: String!
    price: Int
    homezTeamId: ID
    riderID: ID
    active: Boolean
  }

  type Homez {
    _id: ID
    homie_usrnme_1: String
    homie_usrnme_2: String
    rides: [Ride]
  }

  

  input InputRide {
    rideId: String
    price: Int
      destination: String!
      origin: String!
      timeForDeparture: String!
  }


  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    # query where user role = rider
    meAsRider: User
    # query where user role = homie
    meAsHomez: User
    # query a single driver
    findSingleHomie: User
    # query the team
    homezTeam: Homez
    # query all rides
    rides: [Ride]
    allusers: [User]
    riderRides: [Ride]
    unclaimedRides: [Ride]
    ride(id: ID!): Ride
    myRides: [Ride]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, role: String!): Auth
    createTeam(homie_usrnme_1: String!, homie_usrnme_2: String!): Homez
    postRide(
      riderID: ID
      homezTeamId: ID
      price: Int
      destination: String!
      origin: String!
      timeForDeparture: String!
    ): Ride
    completeRide(HomezId: ID, RideId:ID!): Ride
  }
  type Subscription {
    ride: Ride
  }
`;

module.exports = typeDefs;