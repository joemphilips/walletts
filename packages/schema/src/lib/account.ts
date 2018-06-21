import gql from 'graphql-tag';

export const typeDef = gql`
  interface Account {
    id: ID!
    kind: AccountKind!
    balance: Float!
    owners: [Person]!
    inComingTx: [Transaction]
    outGoingTx: [Transaction]
  }

  type IndividualAccount implements Account {
    id: ID!
    kind: AccountKind!
    balance: Float!
    owners: [Person]!
    inComingTx: [Transaction]
    outGoingTx: [Transaction]
  }
  type CommunityAccount implements Account {
    id: ID!
    kind: AccountKind!
    balance: Float!
    owners: [Person]!
    inComingTx: [Transaction]
    outGoingTx: [Transaction]
    integratedChannels: [Channel]!
  }

  enum AccountKind {
    INDIVIDUAL
    COMMUNITY
    PROJECT
  }
`;

export const fakeDatas: ReadonlyArray<any> = [
  {
    id: 'fakeaccountdata1',
    balance: 0.2,
    owners: []
  }
];
