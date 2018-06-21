import gql from 'graphql-tag';

export const typeDef = gql`
  type Channel {
    id: ID!
    account: Account!
    name: String
    url: String
  }
`;
