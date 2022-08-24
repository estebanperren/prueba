import { isFocusable } from "@testing-library/user-event/dist/utils";
import React from "react";
import ItemCount from "../cart/ItemCount";
export default function Item({ articulos, onAdd}) {
  function onAdd(count, articulo){
    if(count>0 && count <= articulo.stock )
    console.log(`Se agrego correctamente ${count} unidades de ${articulo.nombre} al carrito` )
      }

  return (
    <>
      {articulos.map((articulo) => (
        <div className="card col-lg-2 col-md-4 col-sm-6">
          <div className="card-body">
            <h4 className="card-title">{articulo.nombre}</h4>
            <h6 className="card-subtitle mb-2 text-muted">Stock: {articulo?.stock}</h6>
            <img src={articulo.img} alt={articulo.nombre} width="50%" />
            <p className="card-text">{articulo?.descripcion}</p>         
            <p className="card-text">{articulo?.precio}</p>
        <ItemCount articulo={articulo} onAdd={onAdd} />
          </div>
        </div>
      ))}
    </>
  );
}
