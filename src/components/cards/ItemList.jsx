import React, { useEffect, useState } from "react";
import Item from "./Item";
const productos = [
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
    const listadoarticulos = articulos.map((articulo, indice) => (
      <Item articulo={articulo} key={indice} />
    ));

    setArticulos(listadoarticulos)
 
  })

  .catch(error =>{
    console.log(error)
  })
}, []);
  return <>{articulos}</>;
};

export default ItemList;
