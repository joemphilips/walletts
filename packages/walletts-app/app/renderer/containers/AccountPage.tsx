import { withRouter } from "react-router";
import { AccountChannelWrapper, Props } from "../components/Account";
import { IState } from "../store";
import { connect } from "react-redux";

function mapStateToProps(state: IState): Partial<Props> {
  return {
    accounts: state.accounts.accounts,
    knownUsers: state.users,
    knownChannels: state.channels
  };
}

export const AccountComponent = withRouter(connect(mapStateToProps)(
  AccountChannelWrapper
) as any);
