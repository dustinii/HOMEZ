import { gql } from '@apollo/client';

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