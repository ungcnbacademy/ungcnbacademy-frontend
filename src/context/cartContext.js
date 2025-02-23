'use client';
import { createContext, useState } from 'react';
export const CartContext = createContext(null);
export default function CartContextProvider({ children }) {
  const [globalCart, setGlobalCart] = useState();
  return <CartContext.Provider value={{ globalCart, setGlobalCart }}>{children}</CartContext.Provider>;
}
