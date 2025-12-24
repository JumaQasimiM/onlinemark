import { useNavigate } from "react-router-dom";
import T from "../assets/t1.png";
import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useCartContext } from "../context/CartContext";

export const Cart = () => {
  const navigate = useNavigate();
  // use cart context custom hook
  const { removeFromCart, getCart, updateQuantity } = useCartContext();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCartProducts = async () => {
      const items = getCart(); // get cart items [{id, quantity}, ...]
      if (!items || items.length === 0) {
        setCartItems([]);
        return;
      }

      // Fetch product details for each cart item
      const products = await Promise.all(
        items.map(async (cartItem) => {
          try {
            const res = await fetch(
              `https://dummyjson.com/products/${cartItem.id}`
            );
            const data = await res.json();
            return { ...data, quantity: cartItem.quantity };
          } catch (error) {
            console.error("Failed to fetch product", cartItem.id, error);
            return null;
          }
        })
      );

      setCartItems(products.filter((p) => p !== null));
    };

    loadCartProducts();
  }, [getCart]);

  const handleAdd = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    updateQuantity(id, 1); // update in context/localStorage
  };

  const handleSub = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
    setCartItems(updatedCart);
    updateQuantity(id, -1);
  };

  const handleRemove = (id) => {
    removeFromCart(id);
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2); // rounds to 2 decimal places
  localStorage.setItem("totalPrice", totalPrice);

  return (
    <section className="w-full py-12 bg-gray-50 mt-23">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* PRODUCTS */}
        <div className="flex-[2] bg-white border border-gray-100 rounded shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[700px]">
              <thead className="bg-gray-100 border-b">
                <tr className="text-left text-sm font-semibold text-gray-700">
                  <th className="p-4">#</th>
                  <th className="p-4">Product</th>
                  <th className="p-4">Title</th>
                  <th className="p-4">Description</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Qty</th>
                  <th className="p-4">Total</th>
                  <th className="p-4"></th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-b text-sm hover:bg-gray-50"
                  >
                    <td className="p-4 whitespace-nowrap">{index + 1}</td>
                    <td className="p-4 whitespace-nowrap">
                      <img
                        src={item.thumbnail || T}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-md border"
                      />
                    </td>
                    <td className="p-4 font-sm text-gray-800 whitespace-wrap">
                      {item.title.slice(0, 20)}
                    </td>
                    <td className="p-4 text-gray-500 max-w-xs">
                      {item.description}
                    </td>
                    <td className="p-4 font-medium whitespace-nowrap">
                      ${item.price}
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 border w-fit">
                        <button
                          onClick={() => handleSub(item.id)}
                          className="px-3 py-1 text-gray-600 hover:bg-red-200"
                        >
                          −
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          onClick={() => handleAdd(item.id)}
                          className="px-3 py-1 text-gray-600 hover:bg-green-200"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4 font-semibold whitespace-nowrap">
                      ${(Number(item.price) * Number(item.quantity)).toFixed(2)}
                    </td>
                    <td className="p-4 font-semibold whitespace-nowrap">
                      <FaTrash
                        onClick={() => handleRemove(item.id)}
                        size={20}
                        className="text-red-500 cursor-pointer hover:-translate-y-1 transition"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr className="bg-gray-50">
                  <td colSpan={8} className="p-5">
                    <div className="flex flex-col md:flex-row justify-between text-sm font-medium gap-2 md:gap-0">
                      <p>
                        Total items:{" "}
                        <span className="font-semibold">
                          {cartItems.length}
                        </span>
                      </p>
                      <p>
                        Subtotal:{" "}
                        <span className="font-semibold text-gray-800">
                          ${totalPrice}
                        </span>
                      </p>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* CHECKOUT */}
        <div className="flex-1 bg-white border border-gray-100 rounded shadow-sm p-6 h-fit">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Order Summary
          </h2>
          <div className="border-t pt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${totalPrice}</span>
            </div>
            <div className="flex justify-between font-semibold text-base border-t pt-3">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            disabled={cartItems.length === 0} // disable when cart is empty
            className={`w-full mt-6 bg-gray-900 text-white py-3 
    rounded-md text-sm font-semibold hover:bg-black transition
    ${cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
};
