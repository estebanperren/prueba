import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartList from "./CartList";

const CartListContainer = () => {
  const {cart, getTotal} = useContext(CartContext);

  return (
    <>
    <p>Cantidad de articulos: {cart.length} --  Monto Total: {getTotal()}</p>
    <CartList />
    </>
  );
};

export default CartListContainer;
