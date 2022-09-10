import React from 'react';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    return (
        <>
        <Link to={"/cart"}> <button type="button" className="btn btn-primary">Finalizar compra</button></Link>
        </>
    );
}

export default CheckOut;
