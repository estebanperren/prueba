import React, { useState } from 'react';
import ItemCount from '../ItemCount';
import CheckOut from './CheckOut';




const ItemDetail = ({articulos}) => {
  const [showCount, setShowCount] = useState(true);
  function onAdd(count, articulo){
    if(count>0 && count <= articulo.stock ){
    const artOnCart = {id: articulo.id, cantidad: count}
    setShowCount(false)
    console.log(artOnCart )
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

      {showCount ? <ItemCount articulo={articulo} onAdd={onAdd} /> : <p className={"alert-success"}>Articulo agregado al carrito</p>}
      {!showCount ? <CheckOut/> : null}

      </div>
    </div>
    </div>
    ))
  
  
  }</>;
  
  };

export default ItemDetail;
