import React, { useState } from "react";

export default function Cart({ articulo }) {
  const [cart, setCart] = useState({});

  function addToCart(articulo) {
    setCart(cart + articulo);
  }
  addToCart(articulo);

  return { cart };
}
