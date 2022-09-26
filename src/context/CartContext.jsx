import React, { createContext, useState } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const user = require("../usuario.json");

  const addItem = (item, quantity) => {
    const carrito = cart;
    const prodOnAdd = { item: item, cantidad: quantity };
    if (!isInCart(item.id)) {
      carrito.push(prodOnAdd);
      setCart([...carrito]); //ASI SI RENDERIZA
      // setCart(carrito); //ASI NO RENDERIZA
    }
  };

  const removeItem = (id) => {
    const carrito = cart;
    let itemid = cart.findIndex((data) => data.item.id === id);
    carrito.splice(itemid, 1);
    setCart([...carrito]); //ASI SI RENDERIZA
    //setCart(carrito) //ASI NO RENDERIZA
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    let itemid = cart.findIndex((data) => data.item.id === id);
    if (itemid === -1) {
      return false;
    }
    return true;
  };

  const getTotal = () => {
    return cart.reduce((acc, curr) => acc + curr.item.price * curr.cantidad, 0);
  };
  const getCantidad = () => {
    return cart.reduce((acc, curr) => acc + curr.cantidad, 0);
  };

  const getUser = () => {
    const user = require("../usuario.json");
    return user;
  };
  const getCartForFirebase = () => {
    return cart.reduce(
      (aux, curr) =>
        aux.concat({
          id: curr.item.id,
          title: curr.item.title,
          image: curr.item.images[0],
          count: curr.cantidad,
          price: curr.item.price,
        }),
      []
    );
  };
  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          addItem,
          removeItem,
          clear,
          isInCart,
          getTotal,
          getCantidad,
          getUser,
          getCartForFirebase,
          user,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};
export { CartContext, CartProvider };
