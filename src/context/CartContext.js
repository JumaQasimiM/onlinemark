import { createContext, useContext, useState } from "react";
import { Api_Url } from "./apiUrl";
import { useCart } from "../hooks/useCart";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //   use cart custom hook
  const { requst, loading, error } = useCart();

  // hahdleClick
  const handleDelete = async (productId) => {
    await requst(`${Api_Url}/products/${productId}`, { method: "DELETE" });
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  //   add to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);

      let updatedCart;

      if (existing) {
        updatedCart = prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        updatedCart = [...prev, { ...product, quantity: 1 }];
      }

      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        handleDelete,
        loading,
        error,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
