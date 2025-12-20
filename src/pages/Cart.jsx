import { useNavigate } from "react-router-dom";
import T from "../assets/t1.png";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
export const Cart = () => {
  const [qauntity, setQauntity] = useState(0);
  // use cart context
  const { removeCart } = useCartContext();

  const navigate = useNavigate();
  // add and sub
  const add = () => {
    setQauntity((prev) => prev + 1);
  };
  const sub = () => {
    setQauntity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <section className="w-full py-12 bg-gray-50 mt-23">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* ================= PRODUCTS ================= */}
        <div className="flex-[2] bg-white border border-gray-100 rounded shadow-sm overflow-hidden">
          {/* Make table scrollable on small screens */}
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
                <tr className="border-b text-sm hover:bg-gray-50">
                  <td className="p-4 whitespace-nowrap">1</td>

                  <td className="p-4 whitespace-nowrap">
                    <img
                      src={T}
                      alt="product"
                      className="w-16 h-16 object-cover rounded-md border"
                    />
                  </td>

                  <td className="p-4 font-medium text-gray-800 whitespace-nowrap">
                    T-Shirt Blue
                  </td>

                  <td className="p-4 text-gray-500 max-w-xs">
                    T-shirt blue, size 40, brand Nike
                  </td>

                  <td className="p-4 font-medium whitespace-nowrap">$20</td>

                  <td className="p-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 border w-fit">
                      <button
                        onClick={() => sub()}
                        className="px-3 py-1 text-gray-600 hover:bg-red-200"
                      >
                        −
                      </button>
                      <span className="px-2">{qauntity}</span>
                      <button
                        onClick={() => add()}
                        className="px-3 py-1 text-gray-600 hover:bg-green-200"
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <td className="p-4 font-semibold whitespace-nowrap">$40</td>
                  <td className="p-4 font-semibold whitespace-nowrap">
                    <FaTrash
                      onClick={() => removeCart(2)}
                      size={20}
                      className="text-red-500 cursor-pointer hover:-translate-y-1 transition"
                    />
                  </td>
                </tr>
              </tbody>

              <tfoot>
                <tr className="bg-gray-50">
                  <td colSpan={8} className="p-5">
                    <div className="flex flex-col md:flex-row justify-between text-sm font-medium gap-2 md:gap-0">
                      <p>
                        Total items: <span className="font-semibold">12</span>
                      </p>
                      <p>
                        Subtotal:{" "}
                        <span className="font-semibold text-gray-800">$30</span>
                      </p>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* ================= CHECKOUT ================= */}
        <div className="flex-1 bg-white border border-gray-100 rounded shadow-sm p-6 h-fit">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Order Summary
          </h2>

          {/* Promo Code */}
          <div className="mb-6">
            <p className="text-sm font-medium mb-2">Discount / Promo Code</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter code"
                className="flex-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              <button className="px-4 py-2 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-900">
                Apply
              </button>
            </div>
          </div>

          {/* Totals */}
          <div className="border-t pt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">$300</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Discount</span>
              <span className="text-green-600">− $45</span>
            </div>

            <div className="flex justify-between font-semibold text-base border-t pt-3">
              <span>Total</span>
              <span>$255</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button
            onClick={() => navigate("/checkout")}
            className="w-full mt-6 bg-gray-900 text-white py-3 rounded-md text-sm font-semibold hover:bg-black transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
};
