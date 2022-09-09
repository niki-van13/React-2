import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './context/cart-context';
import { CheckoutProvider } from './context/checkout-context';
import { CartContext } from './context/cart-context';
import App from './App'
import Footer from './layouts/footer'
import Header from './layouts/header'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CheckoutProvider>
        <CartProvider>
          <Header />
          <App />
          <Footer />
        </CartProvider>
      </CheckoutProvider>
    </BrowserRouter>
  </React.StrictMode>
)
