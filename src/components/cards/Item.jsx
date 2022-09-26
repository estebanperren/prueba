import React from "react";
import { Link } from "react-router-dom";
export default function Item({ articulo }) {
  return (
    <>
      <div className="col-md-3 col-sm-6">
        <div className="product-grid item">
          <div className="product-image">
            <img
              className="pic-1"
              src={articulo.images[0]}
              alt={articulo.title}
            />
          </div>
          <div className="product-content">
            <span className="brand">{articulo?.brand}</span>
            <h3 className="title">{articulo.title}</h3>
            <div className="price">${articulo?.price}</div>
            <Link
              className="add-to-cart bg-primary"
              to={`/product/${articulo.id}`}
            >
              Ver
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
