import { withRouter } from "react-router";
import {
  AccountPage as AccountPageComponent,
  Props
} from "../components/Account";
import { IState } from "../store";
import { connect } from "react-redux";

function mapStateToProps(state: IState): Partial<Props> {
  return {
    accounts: state.accounts.accounts,
    knownUsers: state.users,
    knownChannels: state.channels
  };
}

export const AccountPage = withRouter(connect(mapStateToProps)(
  AccountPageComponent
) as any);
