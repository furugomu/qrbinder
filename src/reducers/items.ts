import { AikatsuCard } from "../aikatsu-card";

export interface Item extends AikatsuCard {
  qrUrl: string;
}
export type Action =
  | { type: "items/set"; payload: Item[] }
  | { type: "items/add"; payload: Item };

export const reducer = (state: Item[] = [], action: Action) => {
  switch (action.type) {
    case "items/set":
      return action.payload;
    case "items/add":
      return [...state, action.payload];
    default:
      return state;
  }
};
