import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getData } from "../../mocks/FakeApi";
//Inicializo useEfect como un array vacio.

function ItemListContainer(props) {
  // ItemlistContainter recibe props de su padre App.

  // Inicializa el estado del componente usando useState (Siempre al inicio de la lógica)
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorPromise, setErrorPromises] = useState(false);

  // Uso useEffect para que la promise no intervenga en el renderizado del componente.
  // Tratamiento de la promise.
  useEffect(() => {
    console.warn("se ejecuta el useEffect");
    setLoading(true);
    getData
      .then((res) => {
        setProductList(res);
      })
      .catch((error) => {
        console.error("Error en respuesta", error);
        setErrorPromises(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(getData);
  // console.log(productList);

  return (
    <div>
      {props.children}
      {errorPromise ? <h2>UPS!... Algo salió mal</h2> : loading ? <h2>Cargando Productos...</h2> : <ItemList productList={productList} />}
    </div>
  );
}

export default ItemListContainer;
