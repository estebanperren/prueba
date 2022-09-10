import React, { createContext, useState } from "react";

const CartContext = createContext();
const CartProvider = (props) => {

  const [cart, setCart] = useState([]);


  const addItem = (item, quantity) => {
    const prodOnAdd = {item: item, cantidad: quantity };
    const carrito = cart;
    if(!isInCart(item.id)) {
    carrito.push(prodOnAdd)
    setCart(carrito);
    console.log(cart)}
  };


  const removeItem = (id) => {
    const carrito = cart;
    let itemid = carrito.findIndex(data => data.item.id === id)
carrito.splice(itemid)
setCart(carrito);
    console.log(cart)
  }; 


  const clear = () =>{
    setCart([])
  }

const isInCart = (id) => {
    let itemid = cart.findIndex((data) => data.item.id === id)
    if(itemid === -1) 
    {
        return false
    }
    return true;
}

  return (
    <>
      <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};
export { CartContext, CartProvider };
