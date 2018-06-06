export const ToggleChannel = (id: string) => ({
  type: "TOGGLE_ACTION",
  payload: {
    id
  }
});

export type Actions = ReturnType<typeof ToggleChannel>;
