import React from 'react';
import Item from './Item';
/*const articulo =  {
  id: 0,
  nombre: "pepino",
  descripcion: "los mejores pepinos",
  stock: 25,
  precio: 100,
  img: "/images/pepino.png",
}*/
const ItemDetail = ({articulos}) => {
  
  return <>{
    articulos.map((articulo, indice) => (
      <div key={indice} className="card detail">
  <div className="row">
    <div className="col"><img  src={articulo.img} alt={articulo.nombre}/></div>
    <div className="col">
      <p>{articulo.nombre}</p>
      <p>{articulo.descripcion}</p>
      <p>${articulo.precio}</p>
      <p>STOCK DISPONIBLE: {articulo.stock}</p>

      </div>
    </div>
    </div>
    ))
  
  
  }</>;
  
  };

export default ItemDetail;
