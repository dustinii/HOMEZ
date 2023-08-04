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
    timeForDeparture: Int!
    price: Int!
    homezTeamId: ID
    riderID: ID!
  }

  type Homez {
    _id: ID
    homie_usrnme_1: String
    homie_usrnme_2: String
    rides: [Ride]
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

  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, role: String!): Auth
    createTeam(homie_usrnme_1: String!, homie_usrnme_2: String!): Homez
    postRide(
      riderId: ID!
      homezTeamId: ID
      price: Int!
      destination: String!
      origin: String!
      timeForDeparture: Int!
    ): Ride
  }
  type Subscription {
    ride: Ride
  }
`;

module.exports = typeDefs;