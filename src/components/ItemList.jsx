import React, { useEffect, useState } from "react";
import Item from "./cards/Item";

const ItemList = ({articulos}) => {

return <>
<div className="container">
  <div className="row">
{
  articulos.map((articulo, indice) => (
    <Item articulo={articulo} key={indice} />
  ))
}
</div>
</div>
</>;

};
export default ItemList;
