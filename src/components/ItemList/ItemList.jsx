import { React } from "react";
import Item from "../Item/Item";

function ItemList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <Item />
      ))}
    </div>
  );
}

export default ItemList;
