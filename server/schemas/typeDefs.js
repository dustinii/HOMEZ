const { gql } = require('apollo-server-express');

const { GraphQLServer, PubSub } = require("graphql-yoga");

const typeDefs = gql`
  type Rider {
    _id: ID!
    username: String!
    email: String!
    role: String!
   
  }
  type Homez {
    _id: ID!
    username: String!
    email: String!
    role: String!
  }
  

  type rideInformation {
    
    user: User.role.rider
    price: Int!
    origin: String!
    destination: String!
    timeForDepartture: Int!

  }

  type Auth {
    token: ID!
    user: User
    
  }

  type Query {
    meAsRider: Rider
    meAsHomez: Homez
rides : [rideInformation!]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addRider(username: String!, email: String!, password: String!): Auth
    addHomezUser(username: String!, email: String!, password: String!): Auth

    bookRide(userID: ID,
      price: Int!,
      origin: String!,
      destination: String!,
      timeForDeparture: Int!): ID!
  }

  postRideInformation(userID: ID,
    price: Int!,
    origin: String!,
    destination: String!,
    timeForDeparture: Int!): ID!
}
type Subscription {
    rides: [rideInformation!]
  }


`;

module.exports = typeDefs;