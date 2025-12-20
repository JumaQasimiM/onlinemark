import { createContext, useContext } from "react";
import { toast } from "react-toastify";

// create context
const CartContext = createContext(null);

// cretea provider
export const CartProvider = ({ children }) => {
  const addToCart = (id) => {
    toast.info(`this  ${id} is from cart context `);
  };
  const removeCart = (id) => {
    toast.error(`cart ${id} removed`);
  };
  const value = "1";
  return (
    <CartContext.Provider value={{ value, addToCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};

// create custom hook
export const useCartContext = () => useContext(CartContext);
