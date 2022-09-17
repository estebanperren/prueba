import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import "./CartWidget.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const {getCantidad} = useContext(CartContext);
  return (
    <>
      <ul className="navbar-nav me-auto" style={{display: (getCantidad()!==0) ? 'block' : 'none'}}>
        <li className="nav-item ">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className='badge badge-warning' id='lblCartCount'> {getCantidad()} </span>
            
            </Link>
</li>
</ul>

    </>
  );
};

export default CartWidget;
