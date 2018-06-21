import gql from 'graphql-tag';

export const typeDef = gql`
  type Person {
    id: ID!
    name: String!
    following: [Person]
    followers: [Person]
    blocked: [Person]
    ownedProject: [Project]
    fundedProject: [Project]
  }
`;
