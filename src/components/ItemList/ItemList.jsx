import { React } from "react";
import Item from "../Item/Item";
import "./ItemList.css";

function ItemList({ productList }) {
  console.log(productList);
  return (
    <section>
      <h3>Lista de Productos</h3>
      <article>
        {productList.map((product) => (
          <Item key={product.id} product={product}></Item>
        ))}
      </article>
    </section>
  );
}

export default ItemList;
