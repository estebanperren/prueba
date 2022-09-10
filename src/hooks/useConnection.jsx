import React, { useEffect, useState } from 'react';
import Productos from '../Productos';
/*const productos = [
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
  ];*/
  
const productos = Productos();



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

const UseConnection = (id = -1, category="") => {
    const [articulos, setArticulos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
         setIsLoading(true)

        
         const getItems = async () =>{ 
          const data = await connection(true)

          if (id === -1) // -1 muestra todos los productos
          if(category == "") {
          setArticulos(data)
          setIsLoading(false)}
          else
          {
            const data2 = data.filter(prod => prod.category == category)
            setArticulos(data2)
            setIsLoading(false)

          } 
           else{
           setArticulos([data[id-1]])
           setIsLoading(false)
           }
        }          
        
         
         getItems()
        }, [category]);
    
    

    return {isLoading, articulos}
      }



export default UseConnection;
