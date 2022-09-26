import "./App.css";
import "./cards/Card.css"
import "./cart/Count.css"
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from "./navbar/Navbar";
import Products from "./pages/products/Products";
import Cart from "./cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Account from "./pages/account/Account";

function App() {
  return (
    <BrowserRouter>
          <Navbar />

  <Routes>
    <Route path='/' element={<ItemListContainer/>}></Route>
    <Route path='/products' element={<Products/>}></Route>
    <Route path='/product/:id' element={<ItemDetailContainer/>}></Route>
    <Route path='/category/:category' element={<ItemListContainer/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/checkout/:orderId' element={<Checkout/>}></Route>
    <Route path='/checkout' element={<Checkout/>}></Route>
    <Route path='/account' element={<Account/>}></Route>



    </Routes>    
    </BrowserRouter>

  );
}

export default App;
