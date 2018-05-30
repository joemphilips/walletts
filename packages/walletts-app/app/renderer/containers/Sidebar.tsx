import { Sidebar } from "walletts-components";
import { SidebarProps } from "walletts-components";
import { IState } from "../store/reducers";
import { Dispatch, connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as SidebarAcitons from "../actions/sidebar";

function mapStateToProps(state: IState): Partial<SidebarProps> {
  return {
    accountsInfo: state.accountsInfo
  };
}

function mapDispatchToProps(dispatch: Dispatch): Partial<SidebarProps> {
  return bindActionCreators(SidebarAcitons, dispatch);
}

export default (connect(mapStateToProps, mapDispatchToProps)(
  Sidebar
) as any) as React.StatelessComponent<SidebarProps>;
