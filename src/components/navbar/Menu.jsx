import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <ul className="navbar-nav me-auto">
             <li className="nav-item">
            <NavLink activeclassname="active" className="nav-link" to={"/"}>
            Inicio            
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeclassname="active" className="nav-link" to={"/products"}>
            Productos            
            </NavLink>
          </li>
        <li className="nav-item dropdown">
          <a 
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Categorias
          </a>
          <div className="dropdown-menu">
            <NavLink activeclassname="active" className="dropdown-item" to={"/category/groceries"}>
              groceries
            </NavLink>
            <NavLink activeclassname="active" className="dropdown-item" to={"/category/home-decoration"}>
              home-decoration
            </NavLink>
            <NavLink activeclassname="active" className="dropdown-item" to={"/category/smartphones"}>
              smartphones
            </NavLink>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Menu;
