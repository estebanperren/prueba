import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartList = () => {
const {cart} = useContext(CartContext);

if (cart.length == 0){return <h5>Carrito Vacio</h5>;}

    return (
        <>
           <ul className="list-group">

    {cart?.map((articulo, indice) => (
          <li key={indice} className="list-group-item d-flex justify-content-between align-items-center">
            <img src={articulo.img} alt={articulo.nombre} width="25%" />
            {articulo.nombre}

            <span className="badge bg-primary rounded-pill">
              {articulo?.cantidad}
            </span>
          </li>
    ))}
              </ul> 
        </>
    );
}

export default CartList;
