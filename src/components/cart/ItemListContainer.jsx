import React from 'react';
const articulos = [
    { nombre: "pepino", cantidad: "3", img: "/images/pepino.png" },
  ];
const ItemListContainer = () => {
    return (
        <>
                 <span>Articulos en el carrito:</span>
            {articulos.map((articulo) => (
              <>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <img src={articulo.img} alt={articulo.nombre} width="25%" />
                  {articulo.nombre}
                  <span class="badge bg-primary rounded-pill">
                    {articulo.cantidad}
                  </span>
                </li>
              </>
            ))}  
        </>
    );
}

export default ItemListContainer;
