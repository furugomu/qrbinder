export interface AikatsuCard {
  id: string;
  name: string;
  type: "キュート" | "クール" | "セクシー" | "ポップ";
  category:
    | "トップス"
    | "ボトムス"
    | "シューズ"
    | "アクセサリー"
    | "トップス＆ボトムス";
  brand: string;
  appealPoint: number;
  rarity: string; // ノーマル | レア | ...
  rarityLevel: number; // 1 - 4
}
