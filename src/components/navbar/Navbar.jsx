import React from 'react';
import CartWidget from '../cart/CartWidget.jsx';
import Search from '../forms/Search.jsx';
import Logoandsanwitch from './Logoandsanwitch.jsx';
import Menu from './Menu.jsx';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
         <Logoandsanwitch />
          <div className="collapse navbar-collapse" id="navbarColor03">
           <Menu />
           <CartWidget />

           <Search nombre={"Productos..."} />
           
          </div>
        </div>
      </nav>
        </>
    );
}

export default Navbar;
