export interface Form {
  qrUrl: string;
  // カード
  id: string;
  name: string;
  type: string;
  category: string;
  brand: string;
  appealPoint: number;
  rarity: string;
  rarityLevel: number;
}

export type Action =
  | { type: "form/update"; payload: Partial<Form> }
  | { type: "form/clear"; payload?: null };

const initialState: Form = {
  qrUrl: "",
  // カード
  id: "",
  name: "",
  type: "",
  category: "",
  brand: "",
  appealPoint: 0,
  rarity: "",
  rarityLevel: 0
};
export const reducer = (state: Form = initialState, action: Action): Form => {
  switch (action.type) {
    case "form/update":
      return { ...state, ...action.payload };
    case "form/clear":
      return initialState;
    default:
      return state;
  }
};
