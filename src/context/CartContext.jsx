import { createContext, useContext } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const getCart = () => {
    try {
      return JSON.parse(localStorage.getItem("ProductIdInToCart")) || [];
    } catch {
      return [];
    }
  };

  const saveCart = (cart) => {
    localStorage.setItem("ProductIdInToCart", JSON.stringify(cart));
  };

  const addToCart = (id) => {
    if (!id) {
      toast.error("Invalid product ID");
      return;
    }

    // Get cart from localStorage and parse it safely
    let cart = [];
    try {
      const storedCart = localStorage.getItem("ProductIdInToCart");
      cart = storedCart ? JSON.parse(storedCart) : [];
      if (!Array.isArray(cart)) cart = []; // ensure it's an array
    } catch (error) {
      cart = [];
    }

    // Check if product exists
    const existingProduct = cart.find((item) => item.id === id);

    if (existingProduct) {
      existingProduct.quantity += 1;
      toast.info("Quantity updated in cart");
    } else {
      cart.push({ id, quantity: 1 });
      toast.success("Product added to cart");
    }

    // Save updated cart
    localStorage.setItem("ProductIdInToCart", JSON.stringify(cart));
  };

  const removeFromCart = (id) => {
    const cart = getCart().filter((item) => item.id !== id);
    saveCart(cart);
    toast.error("Product removed");
  };

  return (
    <CartContext.Provider value={{ addToCart, removeFromCart, getCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used inside CartProvider");
  }
  return context;
};
