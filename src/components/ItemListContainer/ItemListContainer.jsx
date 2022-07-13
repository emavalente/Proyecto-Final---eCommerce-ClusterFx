import { React, useState, useEffect } from "react";

const randomError = () => {
  return Math.random() > 0.1;
};

const data = [
  { id: 340005523, title: "Nombre de Producto1", description: "Descripción del producto 1", precio: "$500", stock: 9 },
  { id: 340005678, title: "Nombre de Producto2", description: "Descripción del producto 2", precio: "$800", stock: 6 },
];

data.map(() => {
  return data.title;
});

function ItemListContainer(props) {
  console.log(props);
  return <div>{props.children[0]}</div>;
}

export default ItemListContainer;
