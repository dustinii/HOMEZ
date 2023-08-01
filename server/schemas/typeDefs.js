const { gql } = require('apollo-server-express');

const { GraphQLServer, PubSub } = require("graphql-yoga");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
   
  }
  
  

  type rideInformation {
    token: ID!
    user: User.role.rider
    price: Number!
    origin: String!
    destination: String!
    timeForDepartture: Number!

  }

  type Auth {
    token: ID!
    user: User
    
  }

  type Query {
    meAsRider: User.role.rider
    meAsHomez: User.role.homez
rides : [rideInformation!]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addRider(username: String!, email: String!, password: String!): Auth
    addHomezUser(username: String!, email: String!, password: String!): Auth

    bookRide(user: User.role.rider,
      price: Number!,
      origin: String!,
      destination: String!,
      timeForDepartture: Number!): ID!
  }
type Subscription {
    rides: [rideInformation!]
  }


`;

module.exports = typeDefs;