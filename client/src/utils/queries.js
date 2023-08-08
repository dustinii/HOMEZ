import { gql } from "@apollo/client";

export const GET_RIDER = gql`
  {
    meAsRider {
      _id
      email

      role
      username
      rides {
        _id
        destination
        homezTeamId
        origin
        price
        riderID
        timeForDeparture
      }
    }
  }
`;

export const GET_HOMEZ = gql`
  {
    meAsHomez {
      _id
      username
      email
    }
  }
`;

export const GET_USER = gql`
  {
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
`;

export const GET_RIDERS_RIDES = gql`
  query riderRides {
    riderRides {
      _id
      destination
      origin
      riderID
      homezTeamId
      price
      timeForDeparture
    }
  }
`;

export const GET_ONE_RIDE = gql`
  query Ride($rideId: ID!) {
    ride(id: $rideId) {
      _id
      origin
      destination
      timeForDeparture
      price
      riderID
    }
  }
`;

export const MY_RIDES = gql`
  query MyRides {
    myRides {
      _id
      origin
      destination
      timeForDeparture
      price
      riderID
      active
    }
  }
`;
export const GET_UNCLAIMED_RIDES = gql`
  {
    unclaimedRides {
      _id
      destination
      homezTeamId
      origin
      price
      riderID
      timeForDeparture
    }
  }
`;
