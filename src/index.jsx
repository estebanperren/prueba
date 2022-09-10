import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';
import { CartProvider } from './components/context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<CartProvider>   
   <App />
  </CartProvider>
  </React.StrictMode>

);


