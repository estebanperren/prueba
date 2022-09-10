import React, { createContext, useState } from "react";

const CartContext = createContext();
const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);


  const addItem = (item, quantity) => {
    const prodOnAdd = {item: item, cantidad: quantity };
    if(!isInCart(item.id)) {
    cart.push(prodOnAdd)
    setCart([...cart]);
    console.log(cart)}
  };


  const removeItem = (id) => {
    let itemid = cart.findIndex(data => data.item.id === id)
cart.splice(itemid)
setCart([...cart]);
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
  return (
    <>
      <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, getTotal }}>
        {children}
      </CartContext.Provider>
    </>
  );
};
export { CartContext, CartProvider };
