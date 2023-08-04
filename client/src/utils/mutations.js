import { gql } from '@apollo/client';

export const LOGIN_RIDER= gql`
  mutation login(
    $email: String!
    $password: String!
  ) {
    login(
      email: $email
      password: $password
    ) {
      token
      rider {
        _id
        username
      }
    }
  }
`;
export const LOGIN_HOMEZ= gql`
  mutation login(
    $email: String!
    $password: String!
  ) {
    login(
      email: $email
      password: $password
    ) {
      token
      homez {
        _id
        username
      }
    }
  }
`;

export const ADD_RIDER = gql`
  mutation addRider(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addRider(
      username: $username
      email: $email
      password: $password
    ) {
      token
      rider {
        _id
        username
        email
        
      }
    }
  }
`;
export const ADD_HOMEZ = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $role: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      role: $role
    ) {
      token
      homez {
        _id
        username
        email
        role
      }
    }
  }
`;

