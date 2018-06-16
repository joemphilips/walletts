import gql from "graphql-tag";

export const typeDef = gql`
  enum status {
    draft
    open
    failed
    active
    abandoned
    succeeded
  }
type Project {
  id: ID!
  status: status
  owners: [Person]!
  targetAmount: Int!
  purpose: String
  deadline: Date
  Funders: [Person]
  transaction: String
}
`
