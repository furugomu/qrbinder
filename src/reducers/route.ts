// ルーティング奴
export type Action = { type: "route/set"; payload: string };
export const reducer = (state: string = "/", action: Action) => {
  switch (action.type) {
    case "route/set":
      return action.payload;
    default:
      return state;
  }
};
