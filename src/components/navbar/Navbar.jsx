import React from "react";
import CartWidget from "../cart/CartWidget.jsx";
import AccountWidget from "./AccountWidget.jsx";
import Logoandsanwitch from "./Logoandsanwitch.jsx";
import Menu from "./Menu.jsx";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Logoandsanwitch />
          <div className="collapse navbar-collapse" id="navbarColor03">
            <Menu />
            <CartWidget />
            <AccountWidget />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
