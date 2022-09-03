import React from 'react';
import UseCounter from '../../hooks/useCounter';
import ItemCount from '../ItemCount';
import Item from './Item';

function onAdd(count, articulo){
  if(count>0 && count <= articulo.stock )
  console.log(`Se agrego correctamente ${count} unidades de ${articulo.nombre} al carrito` )
    }
const ItemDetail = ({articulos}) => {
  
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
      <ItemCount articulo={articulo} onAdd={onAdd} />
      </div>
    </div>
    </div>
    ))
  
  
  }</>;
  
  };

export default ItemDetail;
