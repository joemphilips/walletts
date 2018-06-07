import { createDefaultChannels, ChannelState } from "../state";
import { Actions } from "../actions";

const defaultChannels = createDefaultChannels();

export function ChannelReducer(
  state = defaultChannels,
  action: Actions
): ChannelState {
  switch (action.type) {
    case "TOGGLE_CHANNEL":
      const id = action.payload.id;
      const channel = state[id];
      return {
        ...state,
        id: {
          ...channel,
          isActive: !channel.isActive
        }
      };
    default:
      return state;
  }
}
