import React from "react";
import { Link } from "react-router-dom";

const Logoandsanwitch = () => {
  return (
    <>
      <span className="navbar-brand">
        <Link className="nav-link" to={"/"}>
PERREN STORE    </Link>
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
    </>
  );
};

export default Logoandsanwitch;
