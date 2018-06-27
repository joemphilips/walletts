import gql from 'graphql-tag';

export const typeDef = gql`
  scalar Date
  union PaymentDestination = Account | Person | String
`;
