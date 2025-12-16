import { createContext, useContext, useState } from "react";
import { Api_Url } from "./apiUrl";
// create context
const CartContext = createContext(null);

// create provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //  handleCart,
  const handleCart = () => {};
  //         handleDelete,
  const handleDelete = (productId) => {
    useFetch(`${Api_Url}/products/${productId}`, {
      method: "DELETE",
    });
    setCart(cart.filter(item.id !== productId));
  };
  //         handleIncrement,
  const handleIncrement = (productId, currentQuantity) => {
    const newQuantity = currentQuantity + 1;
    updateQuantity(productId, newQuantity);
  };
  //         handleDecrement,
  const handleDecrement = (productId, currentQuantity) => {
    const newQuantity = currentQuantity - 1;
    updateQuantity(productId, newQuantity);
  };
  // updateQuantity
  const updateQuantity = (productId, newQuantity) => {};

  //         addToCart,
  const addToCart = () => {};
  return (
    <CartContext.Provider
      value={{
        handleCart,
        handleDelete,
        handleIncrement,
        handleDecrement,
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useAuthContext = () => useContext(CartContext);
