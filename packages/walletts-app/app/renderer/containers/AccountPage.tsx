import { withRouter } from "react-router";
import {
  AccountPage as AccountPageComponent,
  Props
} from "../components/Account";
import { IState } from "../store";
import { connect } from "react-redux";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

function mapStateToProps(state: IState): Partial<Props> {
  return {
    accounts: state.accounts.accounts,
    knownUsers: state.users,
    knownChannels: state.channels
  };
}

const accountDetailQuery = gql`
  query getAccountDetail(id: ID!): Account
`;

const AccountPageWithData = graphql(accountDetailQuery, {
  props: ({ data: id }) => ({ id })
})(AccountPageComponent);

export const AccountPage = withRouter(connect(mapStateToProps)(
  AccountPageWithData
) as any);
