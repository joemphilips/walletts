import { Sidebar } from "walletts-components";
import { SidebarProps } from "walletts-components";
import { IState } from "../store";
import { Dispatch, connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as SidebarAcitons from "../store/account/actions/sidebar";

function mapStateToProps(state: IState): Partial<SidebarProps> {
  return {
    accountsInfo: state.accounts.accounts
  };
}

function mapDispatchToProps(dispatch: Dispatch): Partial<SidebarProps> {
  return bindActionCreators(SidebarAcitons, dispatch);
}

export default (connect(mapStateToProps, mapDispatchToProps)(
  Sidebar
) as any) as React.StatelessComponent<SidebarProps>;
