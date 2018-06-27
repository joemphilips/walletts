import gql from 'graphql-tag';

export const typeDef = gql`
  type Mutation {
    registerWallet(by: Person!, publicKey: String!)
    proposeProject(owners: [Person]!, targetAmount: Int!, deadline: Date!, purpose: String!): Project,
    proposeCreateAccount(owners: [Person]!, purpose: String),
    fundProject(id: ID!, amount: Int!)
  }
`;
