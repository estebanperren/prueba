import React from "react";
import Item from "./cards/Item";

const ItemList = ({ articulos }) => {
  return (
    <>
      <div className="container home">
        <div className="row">
          {articulos.map((articulo, indice) => (
            <Item articulo={articulo} key={indice} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ItemList;
