import "./App.css";
import "./cards/Card.css"
import "./cart/Count.css"
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from "./navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";
import Cart from "./cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Account from "./account/account";

function App() {
  return (
    <BrowserRouter>
          <Navbar />

  <Routes>
    <Route path='/' element={<ItemListContainer/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
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
