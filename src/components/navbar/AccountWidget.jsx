import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const AccountWidget = () => {
  const { user } = useContext(CartContext);

  return (
    <>
      <ul className="navbar-nav" style={{ marginRight: "1rem" }}>
        <li className="nav-item ">
          <Link to="/account">
            <FontAwesomeIcon icon={faUser} />
            <span> Hola, {user.name}</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AccountWidget;
