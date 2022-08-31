import React, { useEffect, useState } from 'react';
const productos = [
    {
      id: 0,
      nombre: "pepino",
      descripcion: "los mejores pepinos",
      stock: 25,
      precio: 100,
      img: "/images/pepino.png",
    },
    {
      id: 1,
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

const UseConnection = (id = -1) => {
    const [articulos, setArticulos] = useState([]);
    
        useEffect(() => {
         
        
         const getItems = async () =>{ 
          const data = await connection(true)
          
          if (id === -1)
           setArticulos(data) 
           else
           setArticulos([data[id]]) 
        }          
        
         
         getItems()
        }, []);
    
    

    return (articulos)
      }



export default UseConnection;
