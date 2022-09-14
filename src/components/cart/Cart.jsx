import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartList from './CartList';

const Cart = () => {
    const {cart, removeItem, getTotal, getCantidad} = useContext(CartContext);
    if (cart.length == 0){return <h5>Carrito Vacio</h5>;}

    return (
        <>
            <section className="h-100 h-custom" style={{backgroundColor: '#eee'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card">
          <div className="card-body p-4">
            <div className="row">
              <div className="col-lg-7">
                <h5 className="mb-3"><a href="#!" className="text-body"><i className="fas fa-long-arrow-alt-left me-2" />Continue shopping</a></h5>
                <hr />
               <CartList tag={"h5"} description={true}/>
      
              </div>
              <div className="col-lg-5">
                <div className="card bg-primary text-white rounded-3">
                  <div className="card-body">
                    <p>Cantidad de Productos: {getCantidad()}</p>
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-2">Total</p>
                      <p className="mb-2">${getTotal()}</p>
                    </div>
                    <button type="button" className="btn btn-info btn-block btn-lg">
                      <div className="d-flex justify-content-between">
                        <span>Finalizar <i className="fas fa-long-arrow-alt-right ms-2" /></span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );
}

export default Cart;
