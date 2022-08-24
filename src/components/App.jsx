import "./App.css";
import Item from "./cards/Item";
import "./cards/Card.css"
import "./cart/Count.css"

import Navbar from "./navbar/Navbar";

function App() {


  const articulos = [
    { nombre: "pepino", descripcion:"los mejores pepinos", stock: 25, img: "/images/pepino.png" },
  ];
  function onAdd(){
    console.log(`Se agrego correctamente el producto al carrito` )
      }

  return (
    <>
    <div>
      <Navbar />
    </div>
    <div>
          <Item articulos={articulos} onAdd={onAdd} />
         </div>
          </>
  );
}

export default App;
