import gql from "graphql-tag";

export const Query = gql`
  type Query {
    account(id: ID!): Account
    person(id: ID!): Person
  }
`;