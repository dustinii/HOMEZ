const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Rider {
    _id: ID!
    username: String!
    email: String!
   
  }
  type HomezUser {
    _id: ID!
    username: String!
    email: String! 
  }

  type Auth {
    token: ID!
    user: Rider
    homez: HomezUser
  }

  type Query {
    meAsRider: Rider
    meAsHomez: HomezUser

  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addRider(username: String!, email: String!, password: String!): Auth
    addHomezUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;