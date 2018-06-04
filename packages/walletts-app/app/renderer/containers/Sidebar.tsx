import { Sidebar } from "walletts-components";
import { SidebarProps } from "walletts-components";
import { IState } from "../store";
import { connect } from "react-redux";
import { withRouter } from "react-router";

function mapStateToProps(state: IState): Partial<SidebarProps> {
  return {
    accounts: state.accounts.accounts
  };
}

export default (connect(mapStateToProps)(
  withRouter(Sidebar as any)
) as any) as React.StatelessComponent<{}>;
