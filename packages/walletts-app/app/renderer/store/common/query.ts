import gql from "graphql-tag";
import { GraphQLRequest } from "apollo-link";
export const createAccountsQuery = (accountName): GraphQLRequest => ({
  query: gql`
    query Account($accountName: accountName) {
      account(aid: $accountName)
        @rest(type: BWalletAccount, path: "/:wid/account/:aid") {
        name
        initialized
        witness
        watchOnly
        type
        m
        n
        accountIndex
        receiveAddress
        accountKey
        keys
        balance {
          tx
          coin
          unconfirmed
          confirmed
        }
      }
    }
  `,
  variables: { accountName }
});
