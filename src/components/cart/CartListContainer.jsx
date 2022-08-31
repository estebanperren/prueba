import React from "react";

const CartListContainer = ({ articulos }) => {
  return (
    <>
      <span>Articulos en el carrito:</span>
      <ul className="list-group">

      {articulos.map((articulo, indice) => (
            <li key={indice} className="list-group-item d-flex justify-content-between align-items-center">
              <img src={articulo.img} alt={articulo.nombre} width="25%" />
              {articulo.nombre}

              <span className="badge bg-primary rounded-pill">
                {articulo.cantidad}
              </span>
            </li>
      ))}
                </ul>

    </>
  );
};

export default CartListContainer;
