import React from "react";
import QrCode from "./QrCode";
import { Item as ItemType } from "../reducers/items";

interface Props {
  items: ItemType[];
}
const ItemList = ({ items }: Props) => (
  <div>
    {items.map(item => (
      <Item item={item} key={item.qrUrl} />
    ))}
  </div>
);
export default ItemList;

const Item = ({ item }: { item: ItemType }) => (
  <div>
    {item.name}
    <QrCode text={item.qrUrl} />
  </div>
);
