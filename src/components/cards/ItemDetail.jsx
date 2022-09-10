import React, { useContext, useEffect, useState } from 'react';
import CheckOut from '../buttons/CheckOut';
import ItemDelete from '../buttons/ItemDelete';
import { CartContext } from '../context/CartContext';
import ItemCount from '../ItemCount';





const ItemDetail = ({articulos}) => {
  const { addItem, isInCart, removeItem } = useContext(CartContext);


  function onAdd(count, articulo){
    if(count>0 && count <= articulo.stock){
    addItem(articulo, count)
  }
      }
  
      function onDel(articuloId){
        if(isInCart(articuloId)){
          console.log("articulo eliminado")
        removeItem(articuloId)

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
      { (!isInCart(articulo.id)) ? <ItemCount articulo={articulo} onAdd={onAdd} /> : <p> <span style={{marginRight: "1rem"}} className={"alert-success"}>Articulo agregado al carrito </span><ItemDelete articuloId={articulo.id} onDel={onDel} /></p>}
      {  (isInCart(articulo.id)) ? <CheckOut/> : null}

      </div>
    </div>
    </div>
    ))
  
  
  }</>;
  
  };

export default ItemDetail;
