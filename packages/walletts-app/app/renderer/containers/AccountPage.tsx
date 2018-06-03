import * as React from "react";
import { AccountUIData } from "walletts-components";
import { withRouter } from "react-router";

export interface Props extends AccountUIData {
  readonly match: any;
  readonly location: any;
  readonly history: any;
}

export class AccountPage extends React.Component<Props> {
  constructor(props: Props, context: any) {
    super(props, context);
  }
  render() {
    const { id } = this.props.match.params;
    console.log(`going to render account of ${id}`);
    return <div> showing account info {id} </div>;
  }
}

export default withRouter(AccountPage as any);
