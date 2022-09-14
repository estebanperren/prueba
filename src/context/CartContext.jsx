import React, { createContext, useState } from "react";

const CartContext = createContext();
const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);


  const addItem = (item, quantity) => {
    const carrito = cart
    const prodOnAdd = {item: item, cantidad: quantity };
    if(!isInCart(item.id)) {
    carrito.push(prodOnAdd)
    setCart([...carrito]) //ASI SI RENDERIZA
   // setCart(carrito); //ASI NO RENDERIZA
    console.log("articulo agregado")
    console.log(cart)}
  };



  const removeItem = (id) => {
    const carrito = cart
    let itemid = cart.findIndex(data => data.item.id === id)
carrito.splice(itemid,1)
setCart([...carrito]); //ASI SI RENDERIZA
//setCart(carrito) //ASI NO RENDERIZA
console.log("articulo eliminado")
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

const getTotal = () => {
 return cart.reduce((acc, curr) => acc + (curr.item.price * curr.cantidad), 0);
  
}
const getCantidad = () => {
  return cart.reduce((acc, curr) => acc + (curr.cantidad), 0);
   
 }
  return (
    <>
      <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, getTotal, getCantidad }}>
        {children}
      </CartContext.Provider>
    </>
  );
};
export { CartContext, CartProvider };
