"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setIsCartOpen(true); // Automatically open cart when item is added
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    // This removes the ₹ symbol and converts to number
    const price = parseInt(item.price.replace(/[^\d]/g, ""));
    return acc + price;
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, isCartOpen, setIsCartOpen, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);