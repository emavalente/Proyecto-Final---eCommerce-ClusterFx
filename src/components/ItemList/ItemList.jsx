import { React } from "react";
import Item from "react";

function ItemList({ productList }) {
  console.log(productList);
  return (
    <div>
      <h3>Lista de Productos</h3>
      {productList.map((product) => (
        <Item key={product.id} product={product}></Item>
      ))}
    </div>
  );
}

export default ItemList;
