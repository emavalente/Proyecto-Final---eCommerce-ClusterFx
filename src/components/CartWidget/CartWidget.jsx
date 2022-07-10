import React from "react";
import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="cartBox">
      <a>
        <i className="fa-solid fa-cart-shopping cartIcon"></i>
      </a>
    </div>
  );
}

export default CartWidget;
