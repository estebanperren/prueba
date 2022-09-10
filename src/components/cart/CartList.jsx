import React, { useContext } from 'react';
import ItemDelete from '../buttons/ItemDelete';
import { CartContext } from '../context/CartContext';

const CartList = () => {
const {cart, removeItem} = useContext(CartContext);

if (cart.length == 0){return <h5>Carrito Vacio</h5>;}

    return (
        <>
           <ul className="list-group">

    {cart?.map((articulo, indice) => (
          <li key={indice} className="list-group-item d-flex justify-content-between align-items-center">
            <img src={articulo.item.images[0]} alt={articulo.item.title} width="25%" />
            {articulo.item.title}

            <span className="badge bg-primary rounded-pill">
              {articulo?.cantidad}
            </span>

            <ItemDelete articuloId={articulo.id} onDel={removeItem} titleShow={false} />
          </li>
    ))}
              </ul> 
        </>
    );
}

export default CartList;
