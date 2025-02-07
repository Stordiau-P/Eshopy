import React, { createContext, useContext, useState } from 'react';
import productsData from '../data/products.json';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    const product = productsData.products.find(p => p.id === productId);
    if (!product) return;

    setCartItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === productId);
      
      if (existingItem) {
        return currentItems.map(item => {
          if (item.id === productId && item.quantity < product.stock) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        return [...currentItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateCartItemQuantity = (id, newQuantity) => {
    setCartItems(items => 
      items.map(item => {
        if (item.id === id) {
          if (newQuantity <= 0) return { ...item, quantity: 0 };
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };

  const removeCartItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const value = {
    cartItems,
    addToCart,
    updateCartItemQuantity,
    removeCartItem
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}