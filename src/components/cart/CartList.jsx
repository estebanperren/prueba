import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemDelete from "../buttons/ItemDelete";

const CartList = (props) => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <h5>Carrito Vacio</h5>;
  }

  return (
    <>
      {cart?.map((articulo, indice) => (
        <div key={indice} className="card mb-3">
          <div className="card-body cartwidget">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div>
                  <img
                    src={articulo.item.images[0]}
                    className="img-fluid rounded-3"
                    alt={articulo.item.title}
                    style={{ width: "80px" }}
                  />
                </div>

                <div className="ms-3 title">
                  <h5>{articulo.item.title}</h5>
                  <p
                    className="small mb-0 "
                    style={{ display: props.description ? "block" : "none" }}
                  >
                    {articulo.item.description}
                  </p>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                <div style={{ width: "50px" }}>
                  <h5 className="fw-normal mb-0">{articulo.cantidad}</h5>
                </div>
                <div style={{ width: "80px" }}>
                  <h5 className="mb-0">${articulo.item.price}</h5>
                </div>
                <div style={{ width: "80px" }}>
                  <h5 className="mb-0">
                    ${articulo.item.price * articulo.cantidad}
                  </h5>
                </div>
                <ItemDelete articuloId={articulo.item.id} titleShow={false} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartList;
