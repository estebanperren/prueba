import React from 'react';
import { Link } from 'react-router-dom';

const GoToCart = () => {
    return (
        <>
        <Link to={"/cart"}> <button type="button" className="btn btn-primary">Ir al Carrito</button></Link>
        </>
    );
}

export default GoToCart;
