import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import ItemListContainer from "./ItemListContainer";


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
     <ItemListContainer/>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CartWidget;
