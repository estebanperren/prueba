import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import UseFirebase from "../../../hooks/useFirebase";
import Loading from "../../loading/Loading";

const Account = () => {
  const [orders, setOrders] = useState([]);
  const { getOrdersByUser, isLoading } = UseFirebase();
  const { user } = useContext(CartContext);

  function parseDate(fecha) {
    let today = new Date(fecha);
    let date =
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    return date;
  }

  useEffect(() => {
    getOrdersByUser(user).then((value) => setOrders(value));
  }, []);
  return (
    <>
      <div className="container mt-5 mb-5 ">
        <h3>Tus Compras</h3>
        {isLoading ? <Loading /> : null}
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Numero de Orden</th>
              <th scope="col">Fecha</th>
              <th scope="col">Monto</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, indice) => (
              <tr key={indice}>
                <td>
                  {<Link to={`/checkout/${order.id}`}> {order.id} </Link>}
                </td>
                <td>{parseDate(order.date)}</td>
                <td>${order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Account;
