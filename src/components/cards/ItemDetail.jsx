import React, { useContext, useEffect, useState } from 'react';
import CheckOut from '../buttons/GoToCart';
import ItemDelete from '../buttons/ItemDelete';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount';
import GoToCart from '../buttons/GoToCart';





const ItemDetail = ({articulos}) => {
  const { addItem, isInCart, removeItem } = useContext(CartContext);


  function onAdd(count, articulo){
    if(count>0 && count <= articulo.stock){
    addItem(articulo, count)
  }
      }
  

  
  
  return <>{
    articulos.map((articulo, indice) => (
      <div key={indice} className="card detail col-6 col-6 col-sm-12">
  <div className="row">
    <div className="col "><img  src={articulo.images[0]} alt={articulo.title}/></div>
    <div className="col">
      <p>{articulo.title}</p>
      <p>{articulo.description}</p>
      <p>${articulo.price}</p>
      <p>STOCK DISPONIBLE: {articulo.stock}</p>
      { (!isInCart(articulo.id)) ? <ItemCount articulo={articulo} onAdd={onAdd} /> : <p> <strong style={{marginRight: "1rem", color: 'green'}} >Articulo agregado al carrito </strong><ItemDelete articuloId={articulo.id} /></p>}
      {  (isInCart(articulo.id)) ? <GoToCart/> : null}

      </div>
    </div>
    </div>
    ))
  
  
  }</>;
  
  };

export default ItemDetail;
