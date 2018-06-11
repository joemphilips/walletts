import { Sidebar, SidebarProps } from "@walletts/components";
import { IState } from "../store";
import { connect, Dispatch } from "react-redux";
import { withRouter } from "react-router";
import { toggleAccount } from "../store/account/actions";

function mapStateToProps(state: IState): Partial<SidebarProps> {
  return {
    accounts: state.accounts.accounts
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onclick(id: string) {
      dispatch(toggleAccount(id));
    }
  };
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Sidebar as any)) as any) as React.StatelessComponent<{}>;
