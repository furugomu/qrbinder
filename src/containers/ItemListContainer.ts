import { connect } from "react-redux";
import { State } from "../reducer";
import ItemList from "../components/ItemList";

const ItemListContainer = connect(({ items }: State) => ({ items }))(ItemList);

export default ItemListContainer;
