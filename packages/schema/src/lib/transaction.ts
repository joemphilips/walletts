import gql from "graphql-tag";

export const typeDef = gql`
  type Transaction {
    id: ID!
    input: [TxIn]
    output: [TxOut]
  }

  type TxIn {
    index: Int
    previousOut: TxOut
    signature: String
  }

  type TxOut {
    amount: Float
    index: Int
    address: String
  }
`