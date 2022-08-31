import React, { useEffect, useState } from "react";
import Item from "./cards/Item";
/*const productos = [
  {
    nombre: "pepino",
    descripcion: "los mejores pepinos",
    stock: 25,
    precio: 100,
    img: "/images/pepino.png",
  },
  {
    nombre: "banana",
    descripcion: "las mejores bananas",
    stock: 25,
    precio: 100,
    img: "/images/pepino.png",
  },
];
function connection(verdadero) {
  const valor = new Promise((res, rej) => {
    if (verdadero) {
        setTimeout(() => {
            res(productos)
        }, 2000);
    } else {
      rej("error en la conexion");
    }
  });

  return valor;
}
const ItemList = () => {
  const [articulos, setArticulos] = useState([]);
useEffect(() => {
 

  connection(true)
  .then((articulos) => {
  
    setArticulos(articulos)

  })

  .catch(error =>{
    console.log(error)
  })
}, []);
  return <>{
    articulos.map((articulo, indice) => (
      <Item articulo={articulo} key={indice} />
    ))


  }</>;
};
*/

const ItemList = ({articulos}) => {

return <>{
  articulos.map((articulo, indice) => (
    <Item articulo={articulo} key={indice} />
  ))


}</>;

};
export default ItemList;
