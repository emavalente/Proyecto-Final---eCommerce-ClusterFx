import React from "react";

function ItemListContainer(props) {
  console.log(props);
  return <div>{props.children}</div>;
}

export default ItemListContainer;
