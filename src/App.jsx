import React from 'react';
import { Cart } from './components/Cart/Cart';
import { Footer } from './components/Footer';
import { Products } from './components/Products';
import { CartProvider } from './components/CartProvider';

function App() {
  return (
    <CartProvider>
      <Cart />
      <Products />
      <Footer />
    </CartProvider>
  );
}

export default App;