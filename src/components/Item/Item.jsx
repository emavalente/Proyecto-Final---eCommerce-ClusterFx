import React from "react";
import "./Item.css";

function Item({ product }) {
  let styles = { width: "190px" };
  return (
    <div className="cardContainer">
      <h3>{product.title}</h3>
      <img style={styles} src={product.hero} alt="imagen de producto" />
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
    </div>
  );
}
export default Item;
