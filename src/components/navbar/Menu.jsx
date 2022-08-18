import React from 'react';

const valores = [
    { texto: "Inicio", href: "#" },
    { texto: "Categorias", href: "#"},
    { texto: "Nosotros", href: "#" },
    { texto: "Contacto", href: "#" },
]
const Menu = () => {
    return (
        <>
          <ul className="navbar-nav me-auto">
            { valores.map( valor =>(
                <li className="nav-item">
                <a className="nav-link active" href={valor.href}>
                {valor.texto}
                </a>
              </li>
            ) ) }
            </ul>   
        </>
    );
}

export default Menu;
