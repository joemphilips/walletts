import gql from 'graphql-tag';

export const typeDef = gql`
  type Account {
    id: ID!
    balance: Float!
    owners: [Person]!
  }
`;

export const fakeDatas: ReadonlyArray<any> = [
  {
    id: "fakeaccountdata1",
    balance: 0.2,
    owners: []
  }
]
