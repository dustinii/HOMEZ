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

export const COMPLETE_RIDE = gql`
  mutation completeRide($newRide: inputRide!) {
    completeRide(newRide: $newRide) {
      _id
      username
      email
      completeRides {
        rideId
        price
        destination
        origin
        timeForDeparture
      }
    }
  }
`;
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!, $role: String!) {
  addUser(username: $username, email: $email, password: $password, role: $role) {
    token
    user {
      _id
      email
      rides {
        _id
        destination
        homezTeamId
        origin
        price
        riderID
        timeForDeparture
      }
      role
      username
    }
  }
}
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      username
      role
    }
  }
}
`;

export const POST_NEW_RIDE = gql`
mutation postRide($riderID: ID, $price: Int, $destination: String!, $origin: String!, $timeForDeparture: String!) {
  postRide(riderID: $riderID, price: $price, destination: $destination, origin: $origin, timeForDeparture: $timeForDeparture) {
    _id
    destination
    origin
    riderID
    timeForDeparture
  }
}
`