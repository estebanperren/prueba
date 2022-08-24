import React from "react";
import ItemCount from "../cart/ItemCount";
import Cart from "../cart/Cart";
export default function Item({ articulos }) {
  return (
    <>
      {articulos.map((articulo) => (
        <div className="card col-lg-2 col-md-4 col-sm-6">
          <div className="card-body">
            <h4 className="card-title">{articulo.nombre}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{articulo?.short}</h6>
            <img src={articulo.img} alt={articulo.nombre} width="50%" />
            <p className="card-text">{articulo?.descripcion}</p>         
            <p className="card-text">{articulo?.precio}</p>
        <ItemCount articulo={articulo} />
        <p><button style={{margin: "1rem"}}>+AGREGAR</button></p>
            {console.log(<Cart articulo={articulo} />)}
          </div>
        </div>
      ))}
    </>
  );
}
