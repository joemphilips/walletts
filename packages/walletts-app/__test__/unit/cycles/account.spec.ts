import { assertSourcesSinks } from "../../utils/helpers";
import { main as AccountCycle } from "../../../app/renderer/store/account/cycles";
import * as Actions from "../../../app/renderer/store/account/actions";

describe("Account", () => {
  it("fetches the balance information from bwallet and update state", done => {
    const actionsSource = {
      a: Actions.fetchBalance("testId")
    };

    const blockchainSink = {
      b: { method: "getBalance" }
    };

    const blockchainSource = {};
    assertSourcesSinks(
      {
        // prettier-ignore
        ACTION:     { "---a--|": actionsSource },
        Blockchain: { "------|": blockchainSource }
      },
      {
        Blockchain: { "---b--|": blockchainSink }
      },
      AccountCycle,
      done
    );
  });
});
