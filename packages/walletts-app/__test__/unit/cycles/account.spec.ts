import { mockTimeSource } from "@cycle/time";
import xs from "xstream";
import { main as AccountCycle } from "../../../app/renderer/store/account/cycles";
import * as Actions from "../../../app/renderer/store/account/actions";
import { Satoshi } from "walletts-core";

describe("Account", () => {
  it("fetches the balance information from bwallet and update state", done => {
    const Time = mockTimeSource();

    // --------- define expected output -------
    const actionsSink = Time.diagram("---a--|", {
      a: Actions.updateBalance("testWallet", Satoshi.fromNumber(1000)
        .value as Satoshi)
    });

    const expected = {
      ACTION: actionsSink
    };

    // --------- define input to the cycle ---------
    const blockchainSource = Time.diagram("---b--|", {
      b: {
        type: "getBalance",
        nodeType: "bitcoin-core",
        result: Satoshi.fromNumber(1000).value as Satoshi,
        meta: {
          walletId: "testWallet"
        }
      }
    });

    const acitonSource = xs.of({
      type: "FETCH_BALANCE"
    });

    const actual = AccountCycle({
      ACTION: acitonSource,
      Blockchain: blockchainSource
    });

    Time.assertEqual(actual.Action, expected.ACTION);
    Time.run(done);
  });
});
