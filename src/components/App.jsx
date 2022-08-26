import "./App.css";
import "./cards/Card.css"
import "./cart/Count.css"

import Navbar from "./navbar/Navbar";
import ItemList from "./cards/ItemList";

function App() {




  return (
    <>
    <div>
      <Navbar />
    </div>
    <div>
          <ItemList />
         </div>
          </>
  );
}

export default App;
