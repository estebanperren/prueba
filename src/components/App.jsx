import "./App.css";
import "./cards/Card.css"
import "./cart/Count.css"
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";

import Navbar from "./navbar/Navbar";

function App() {
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div>
          <ItemListContainer />
         </div>
         <div>
          <ItemDetailContainer id={1} />
         </div>
          </>
  );
}

export default App;
