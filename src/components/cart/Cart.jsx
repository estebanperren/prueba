import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import UseFirebase from "../../hooks/useFirebase";
import CartList from "./CartList";

const Cart = () => {
  const {
    cart,
    getTotal,
    getCantidad,
    getUser,
    getCartForFirebase,
    clear,
  } = useContext(CartContext);
  const { addOrder, isLoading } = UseFirebase();
  const navigate = useNavigate();
  const user = getUser() 
  const [buyer, setBuyer] = useState(user);

  function handleChange(event) {
    setBuyer({...buyer, [event.target.name]: event.target.value});
  }

  const Finish = (event => {
    event.preventDefault()
      addOrder(buyer, getCartForFirebase(), getTotal()).then((id) => {
        if (id) {
          navigate(`/checkout/${id}`);
          clear();
        }
      });

  })

  if (cart.length === 0) {
    navigate(`/`);
  }
  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-sm-12 ">
              <div className="card">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-sm-12 col-lg-7">
                      <h5 className="mb-3">Tu Compra</h5>
                      <hr />
                      <CartList tag={"h5"} description={false} />
                      <p className="clearcart" onClick={()=>{clear()}}>Vaciar Carrito</p>
                    </div>
                    <div className="col-sm-12 col-lg-5">
                      <div className="card bg-primary text-white rounded-3">
                        <div className="card-body">
                          <form className="mt-4" onSubmit={ (e)=>{Finish(e)}}>
                            <div className="form-outline form-white mb-4">
                              <input
                                type="text"
                                id="typeName"
                                name="name"
                                className="form-control form-control-lg"
                                siez={17}
                                placeholder="Name"
                                defaultValue={user.name} required
                                onChange={(e)=>{handleChange(e)}}
                              />
                              <label className="form-label" htmlFor="typeName">
                                Nombre
                              </label>
                            </div>
                            <div className="form-outline form-white mb-4">
                              <input
                                type="tel"
                                id="typePhone"
                                name="phone"
                                className="form-control form-control-lg"
                                siez={17}
                                placeholder="Phone"
                                defaultValue={user.phone} required
                                onChange={(e)=>{handleChange(e)}}

                              />
                              <label className="form-label" htmlFor="typePhone">
                                Telefono
                              </label>
                            </div>
                            <div className="form-outline form-white mb-4">
                              <input
                                type="email"
                                id="typeEmail"
                                name="email"
                                className="form-control form-control-lg"
                                siez={17}
                                placeholder="Email"
                                defaultValue={user.email} required
                                onChange={(e)=>{handleChange(e)}}

                              />
                              <label className="form-label" htmlFor="typeEmail">
                                Email
                              </label>
                            </div>
                          <hr className="my-4" />
                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Cantidad de articulos:</p>
                            <p className="mb-2">{getCantidad()}</p>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total</p>
                            <p className="mb-2">$ {getTotal()}</p>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-info btn-block btn-lg"
                            style={isLoading ? {display: "none"} : null}
                            
                          >                      
                                Finalizar Compra
                            
                          </button>
                          </form>

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
};

export default Cart;
