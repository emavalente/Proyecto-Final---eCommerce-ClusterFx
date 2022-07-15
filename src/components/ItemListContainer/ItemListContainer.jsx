import { React, useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

//Inicializo useEfect como un array vacio.

// const randomError = () => {
//   return Math.random() > 0.1;
// };

function ItemListContainer(props) {
  //Inicializa el estado del componente
  const [productList, setProductList] = useState([]);

  const products = [
    { id: 340005523, title: "Nombre de Producto1", description: "Descripción del producto 1", precio: "$500", stock: 9 },
    { id: 340005678, title: "Nombre de Producto2", description: "Descripción del producto 2", precio: "$800", stock: 6 },
    { id: 340005381, title: "Nombre de Producto2", description: "Descripción del producto 2", precio: "$800", stock: 6 },
    { id: 340005298, title: "Nombre de Producto2", description: "Descripción del producto 2", precio: "$800", stock: 6 },
    { id: 340005169, title: "Nombre de Producto2", description: "Descripción del producto 2", precio: "$800", stock: 6 },
  ];

  //Uso useEffect para que la promise no intervenga en el renderizado del componente.
  const getData = new Promise((res, rej) => {
    //acciones que realizará la Promise...

    let condition = true;

    if (condition) {
      //ejecutará el resolve
      setTimeout(() => {
        //resolvemos con un tiempo de espera
        res(products);
        console.warn("se resolvió la promise");
      }, 3000);
    } else {
      //ejecutará el reject
      rej("Algo salió mal");
    }
  });

  //Tratamiento de la promise.
  useEffect(() => {
    getData.then((res) => setProductList(res)).catch((err) => {});
  }, []);

  console.log(productList);

  return (
    <div>
      {props.children[0]}
      <ItemList productList={productList} />
    </div>
  );
}

export default ItemListContainer;
