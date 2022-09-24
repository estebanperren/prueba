import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UseFirebase from '../../../hooks/useFirebase';

const Checkout = () => {
    const [order, setOrder] = useState({});
    let params = useParams();
    const user = require('../../../usuario.json')
    const { getOrderById } = UseFirebase();

    function parseDate(fecha){
        let today = new Date(fecha)
        let date = today.getDate() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getFullYear()
        return date
    }

    useEffect(() => {
        getOrderById(params.orderId).then(value => setOrder(value))

    }, []);
    console.log(order)
    return (
        <>
<div className="container mt-5 mb-5 ">
  <div className="row d-flex justify-content-center">
    <div className="col-md-12">
      <div className="card" style={{width: "100%"}}>
        
        <div className="invoice p-5">
            <h6>{parseDate(order.date)}</h6>
          <h4>Gracias por su compra.</h4>
          <h4>N°: {order.id}</h4>
          <span className="font-weight-bold d-block mt-4">Hola, {user.name}</span>
          <span>Tu compra ha sido confirmada.</span>
      <hr/>
          <div className="product border-bottom table-responsive">
            <table className="table table-borderless">
              <tbody>
                {  order.items?.map((articulo, indice) => (

                <tr key={indice}>
                  <td width="20%">
                    <img src={articulo.image} width={90} />
                  </td>
                  <td width="60%">
                    <span className="font-weight-bold">{articulo.name}</span>
                    <div className="product-qty">
                      <span className="d-block">Cantidad: {articulo.count}</span>
                    </div>
                  </td>
                  <td width="20%">
                    <div className="text-right">
                      <span className="font-weight-bold">${articulo.price}</span>
                    </div>
                  </td>
                </tr>
))}
              </tbody> 
            </table>
          </div>
          <div className="row d-flex justify-content-end">
            <div className="col-md-5">
            <p> Total: ${order.total}</p>
            </div>
            <div>
                <Link to={"/account"}><button type="button" className="btn btn-primary btn-sm">Mi Cuenta</button></Link>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  </div>
</div>
        </>
    );
}

export default Checkout;
