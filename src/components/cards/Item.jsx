import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
export default function Item({articulo}) {
 

  return (
    <>

        <div  className="card col-lg-2 col-md-3 col-sm-12">
          <div className="card-body">
            <h4 className="card-title">{articulo.title}</h4>
            <h6 className="card-subtitle mb-2 text-muted">Marca: {articulo?.brand}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Stock: {articulo?.stock}</h6>
            <img src={articulo.images[0]} alt={articulo.title} width="50%" />
            <p className="card-text">{articulo?.description}</p>         
            <p className="card-text">${articulo?.price}</p>
            <Link className="nav-link" to={`/product/${articulo.id}`}> <button type="button" className="btn btn-light">Ver Detalle</button>
</Link>
          </div>
        </div>

    </>
  );
}
