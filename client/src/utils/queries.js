import { gql } from '@apollo/client';

export const GET_RIDER = gql`
  {
    meAsRider {
      _id
      username
      email
      
      
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