import gql from "graphql-tag";

export const Query = gql`
  type Query {
    getAccount(id: ID!): Account
    getPerson(id: ID!): Person
  }
`;