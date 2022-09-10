import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const valores = [
    { texto: "Inicio", href: "/" },
    { texto: "Productos", href: "/products"},
    { texto: "Nosotros", href: "about" },
    { texto: "Contacto", href: "/contact" },
    { texto: "Finalizar Compra", href: "/cart"}
]
const Menu = () => {
    return (
        <>
          <ul className="navbar-nav me-auto">
            { valores.map( (valor, indice) =>(
                <li key={indice} className="nav-item">
                <Link className="nav-link" to={valor.href}>{valor.texto}</Link>
              </li>
            ) ) }
 <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
<div className="dropdown-menu">
<Link className="dropdown-item" to={"/category/groceries"}>groceries</Link>
<Link className="dropdown-item" to={"/category/home-decoration"}>home-decoration</Link>
<Link className="dropdown-item" to={"/category/smartphones"}>smartphones</Link>


          </div>
          </li>

            </ul>   
        </>
    );
}

export default Menu;
