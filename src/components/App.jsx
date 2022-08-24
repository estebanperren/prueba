import "./App.css";
import Item from "./cards/Item";
import "./cards/Card.css"
import "./cart/Count.css"

import Navbar from "./navbar/Navbar";

function App() {


  const articulos = [
    { nombre: "pepino", descripcion:"los mejores pepinos", stock: 25, img: "/images/pepino.png" },
  ];

  return (
    <>
    <div>
      <Navbar />
    </div>
    <div>
          <Item articulos={articulos} />
         </div>
          </>
  );
}

export default App;
