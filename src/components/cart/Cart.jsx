import React, { useContext, useEffect } from 'react';
import { Navigate, useNavigate} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import UseFirebase from '../../hooks/useFirebase';
import CartList from './CartList';


const Cart = () => {
    const {cart, removeItem, getTotal, getCantidad, getUser, getCartForFirebase, clear} = useContext(CartContext);
    const {isLoading, addOrder} = UseFirebase()
    let id = 0;
    const navigate = useNavigate()

      console.log(id)

  function Finish(){
   console.log(getCartForFirebase());
    addOrder(getUser(), getCartForFirebase(), getTotal()).then(id => { 
      if(id){
        clear();
        navigate(`/checkout/${id}`)
    }})
    
  
  
       
    }

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
                <h5 className="mb-3">Tu Compra</h5>
                <hr />
               <CartList tag={"h5"} description={true}/>
      
              </div>
              <div className="col-lg-5">
                <div className="card bg-primary text-white rounded-3">
                  <div className="card-body">
                    <form className="mt-4">
                      <div className="form-outline form-white mb-4">
                        <input type="text" id="typeName" className="form-control form-control-lg" siez={17} placeholder="Name" defaultValue={getUser().name} />
                        <label className="form-label" htmlFor="typeName">Nombre</label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input type="text" id="typePhone" className="form-control form-control-lg" siez={17} placeholder="Phone" defaultValue={getUser().phone} />
                        <label className="form-label" htmlFor="typePhone">Telefono</label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input type="text" id="typeEmail" className="form-control form-control-lg" siez={17} placeholder="Email" defaultValue={getUser().email} />
                        <label className="form-label" htmlFor="typeEmail">Email</label>
                      </div>
              
                    </form>
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-2">Cantidad de articulos:</p>
                      <p className="mb-2">{getCantidad()}</p>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-2">Total</p>
                      <p className="mb-2">$ {getTotal()}</p>
                    </div>
                    <button type="button" className="btn btn-info btn-block btn-lg" onClick={()=>{Finish()}}>
                      <div className="d-flex justify-content-between">
                        <span>Finalizar Compra <i className="fas fa-long-arrow-alt-right ms-2" /></span>
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
