import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [amount, setAmount] = useState(initial);

  const toAddItem = () => {
    if (amount < stock) {
      setAmount(amount + 1);
    }
  };
  const toRemoveItem = () => {
    if (amount > initial) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className="itemBox">
      <div>
        <h4>ItemCount</h4>
      </div>
      <div>
        <button onClick={toRemoveItem}>-</button>
        <label>{amount}</label>
        <button onClick={toAddItem}>+</button>
      </div>
      <button
        onClick={() => {
          onAdd(amount);
        }}
      >
        Agregar al carrito <i className="fa-solid fa-cart-shopping cartIcon"></i>
      </button>
    </div>
  );
}

export default ItemCount;
