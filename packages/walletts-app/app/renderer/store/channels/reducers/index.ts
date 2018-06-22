import { createDefaultChannels, ChannelState } from "../state";
import { Actions } from "../actions";

const defaultChannels = createDefaultChannels();

export function ChannelReducer(
  state = defaultChannels,
  action: Actions
): ChannelState {
  switch (action.type) {
    default:
      return state;
  }
}
