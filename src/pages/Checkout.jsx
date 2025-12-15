import { useState } from "react";
import { MdLocalShipping, MdStore } from "react-icons/md";
import { FaPaypal, FaCreditCard } from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const navigate = useNavigate();
  // --- States ---
  const [showPickup, setShowPickup] = useState(false);
  const [showShip, setShip] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("card");

  // --- Handlers ---
  const handleShowPickup = () => {
    setShowPickup(true);
    setShip(false);
  };
  const handleShowShip = () => {
    setShip(true);
    setShowPickup(false);
  };

  // const handlePlaceOrder = () => {
  //   if (!paymentMethod) return toast.error("Please select a payment method");
  //   toast.success(`Processing order with ${paymentMethod}`);
  // };

  return (
    <section className="bg-gray-50 py-23">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ==================== LEFT FORM ==================== */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6 space-y-6">
          {/* --- Contact --- */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border rounded focus:outline-none"
            />
            <p className="text-sm text-gray-500 mt-1">
              You are currently checking out as a guest.
            </p>
          </div>

          {/* --- Delivery --- */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={handleShowShip}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md font-medium ${
                showShip
                  ? "bg-green-400 text-white"
                  : "border bg-white hover:bg-gray-100"
              }`}
            >
              <MdLocalShipping size={20} /> Ship
            </button>
            <button
              onClick={handleShowPickup}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md font-medium ${
                showPickup
                  ? "bg-green-400 text-white"
                  : "border bg-white hover:bg-gray-100"
              }`}
            >
              <MdStore size={20} /> Pick up
            </button>
          </div>

          {/* --- Pickup Addresses --- */}
          {showPickup && (
            <div className="mt-4 space-y-2 border p-3 rounded">
              <label className="flex items-center gap-2 p-2 cursor-pointer">
                <input type="radio" name="pickup" /> Rathaus 13, Heilbronn
                74546, Germany
              </label>
              <label className="flex items-center gap-2 p-2 cursor-pointer">
                <input type="radio" name="pickup" /> Rathaus 13, 74546 Öhingen,
                Germany
              </label>
            </div>
          )}

          {/* --- Shipping Address --- */}
          {showShip && (
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-3">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  placeholder="Country"
                  className="border py-2 px-2 rounded focus:outline-none "
                />
                <input
                  placeholder="First Name"
                  className="border py-2 px-2 rounded focus:outline-none "
                />
                <input
                  placeholder="Last Name"
                  className="border py-2 px-2 rounded focus:outline-none "
                />
                <input
                  placeholder="Street"
                  className="border py-2 px-2 rounded focus:outline-none "
                />
                <input
                  placeholder="House Number"
                  className="border py-2 px-2 rounded focus:outline-none "
                />
                <input
                  placeholder="ZIP Code"
                  className="border py-2 px-2 rounded focus:outline-none "
                />
                <input
                  placeholder="City"
                  className="border py-2 px-2 rounded focus:outline-none "
                />
              </div>
              <label className="flex items-center gap-2 mt-2 text-sm">
                <input type="checkbox" /> Use same address for billing
              </label>
            </div>
          )}

          {/* --- Payment --- */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
            <div className="space-y-4">
              {/* Card */}
              <label
                className={`border rounded-md p-4 flex gap-3 cursor-pointer ${
                  paymentMethod === "card" ? "border-gray-400 shadow-md" : ""
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <div className="flex-1">
                  <FaCreditCard size={24} />
                  <p className="font-medium">Credit / Debit Card</p>
                  {paymentMethod === "card" && (
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        placeholder="Card Number"
                        className="col-span-2 border py-2 px-2 rounded "
                      />
                      <input
                        placeholder="MM / YY"
                        className="border py-2 px-2 rounded "
                      />
                      <input
                        placeholder="CVC"
                        className="border py-2 px-2 rounded "
                      />
                      <input
                        placeholder="Cardholder Name"
                        className="col-span-2 border py-2 px-2 rounded "
                      />
                    </div>
                  )}
                </div>
              </label>

              {/* PayPal */}
              <label
                className={`border rounded-md p-4 flex gap-3 cursor-pointer ${
                  paymentMethod === "paypal" ? "border-gray-400 shadow-md" : ""
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <div className="flex-1">
                  <FaPaypal size={24} color="#003087" />
                  <p className="font-medium">PayPal</p>
                  {paymentMethod === "paypal" && (
                    <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md">
                      Continue with PayPal
                    </button>
                  )}
                </div>
              </label>

              {/* Google Pay */}
              <label
                className={`border rounded-md p-4 flex gap-3 cursor-pointer ${
                  paymentMethod === "googlepay"
                    ? "border-gray-400 shadow-md"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="googlepay"
                  checked={paymentMethod === "googlepay"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <div className="flex-1">
                  <SiGooglepay size={24} color="#4285F4" />
                  <p className="font-medium">Google Pay</p>
                  {paymentMethod === "googlepay" && (
                    <button className="mt-2 w-full bg-black text-white py-2 rounded-md">
                      Pay with Google Pay
                    </button>
                  )}
                </div>
              </label>
            </div>
          </div>

          {/* --- Note --- */}
          <div className="mt-6">
            <label className="flex items-center gap-2 text-sm font-medium">
              <input type="checkbox" /> Add a note to your order
            </label>
            <textarea
              placeholder="Special instructions..."
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none"
            />
          </div>

          {/* --- Place Order Button --- */}
          <div className="flex justify-between items-center pt-4 border-t mt-4">
            <a href="/cart" className="text-sm text-gray-600 hover:underline">
              ← Return to Cart
            </a>
            <button
              onClick={() => navigate("/receivedOrder")}
              // onClick={handlePlaceOrder}
              className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-black"
            >
              Place Order
            </button>
          </div>
        </div>

        {/* ==================== SUMMARY ==================== */}
        <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Total Items</span>
              <span>9</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$289</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-3">
              <span>Total</span>
              <span>$289</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
