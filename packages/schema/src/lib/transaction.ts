import gql from "graphql-tag";

export const typeDef = gql`
  type Transaction {
    id: ID!
    input: [TxIn]
    output: [TxOut]
  }

  type TxIn {
    index: number
    previousOut: TxOut
    signature: String
  }

  type TxOut {
    amount: number
    index: number
    address: String
  }
`