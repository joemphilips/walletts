import gql from "graphql-tag";

export const typeDef = gql`
  type Mutation {
    proposeProject(owners: [Person]!, targetAmount: Int!, deadline: Date!, purpose: String!): Project,
    proposeCreateAccount(owners: [Person]!, purpose: String),
    fundProject(id: ID!, amount: Int!)
  }
`