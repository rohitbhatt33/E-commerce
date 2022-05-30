import React from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import Cart from './Cart';
import {CartProvider} from'react-use-cart';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <>
     <Navbar/>
     <CartProvider>
     <Home/>
     <Cart/>
     </CartProvider>
    </>
  );
}

export default App;
