import { Sidebar } from "walletts-components";
import { SidebarProps } from "walletts-components";
import { IState } from "../store";
import { Dispatch, connect } from "react-redux";
import { AccountID } from "walletts-core";

function mapStateToProps(state: IState): Partial<SidebarProps> {
  return {
    accounts: state.accounts.accounts
  };
}

function mapDispatchToProps(dispatch: Dispatch): Partial<SidebarProps> {
  return {
    onclick: (id: AccountID) =>
      dispatch({ type: "TOGGLE_ACCOUNT", payload: { id: id } })
  };
}

export default (connect(mapStateToProps, mapDispatchToProps)(
  Sidebar
) as any) as React.StatelessComponent<{}>;
