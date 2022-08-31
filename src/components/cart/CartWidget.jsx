import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import CartListContainer from "./CartListContainer";

const articulos = [
  { nombre: "pepino", cantidad: "3", img: "/images/pepino.png" },
];

const CartWidget = () => {
  return (
    <div>
      <ul className="nav nav-pills">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            Carrito
          </a>
          <div className="dropdown-menu" style={{}}>
     <CartListContainer articulos={articulos} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CartWidget;
