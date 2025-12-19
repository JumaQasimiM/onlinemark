import React from "react";
import { MdEmail, MdPayment, MdLocationOn, MdDateRange } from "react-icons/md";
import { FaCheckCircle, FaBoxOpen, FaCreditCard } from "react-icons/fa";
import { SiPaypal, SiGooglepay } from "react-icons/si";
// import Barcode from "react-barcode";
import { QRCode } from "react-qr-code";

export const RecivedOrder = () => {
  // fetch data from localStorage
  const address = JSON.parse(localStorage.getItem("address"));
  const orderDetail = JSON.parse(localStorage.getItem("orderDetail"));

  if (!address || !orderDetail) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        No order found.
      </div>
    );
  }

  const formattedDate = new Date(orderDetail.orderDate).toLocaleDateString();
  const orderNumber = orderDetail.orderNumber || "2726";

  // payment icons mapping
  const paymentIcons = {
    card: <FaCreditCard className="inline-block mr-1" />,
    paypal: <SiPaypal className="inline-block mr-1 text-blue-700" />,
    googlepay: <SiGooglepay className="inline-block mr-1 text-blue-500" />,
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 mt-20 px-4">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-2xl p-10 space-y-12">
        {/* ===== Header ===== */}
        <div className="text-center space-y-4">
          <FaCheckCircle className="text-green-600 text-8xl mx-auto animate-pulse" />
          <h1 className="text-5xl font-bold text-green-600">Order Received</h1>
          <p className="text-gray-600 text-lg">
            Thank you! Your order has been successfully placed.
          </p>
        </div>

        {/* ===== Order Summary ===== */}
        <div className="border rounded-xl p-6 bg-gray-50 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <MdPayment /> Order Summary
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <p className="flex items-center gap-1">
              <FaBoxOpen /> <span className="font-medium">Order #:</span>{" "}
              {orderNumber}
            </p>
            <p className="flex items-center gap-1">
              <MdDateRange /> {formattedDate}
            </p>
            <p className="flex items-center gap-1">
              <MdEmail /> {orderDetail.email}
            </p>
            <p className="flex items-center gap-1">
              {paymentIcons[orderDetail.paymentMethod.toLowerCase()] || (
                <FaCreditCard />
              )}
              <span className="font-medium">Payment:</span>{" "}
              <span className="font-semibold">
                {orderDetail.paymentMethod.toUpperCase()}
              </span>
            </p>
          </div>

          {/* Barcode & QR */}
          <div className="flex flex-col sm:flex-row gap-6 mt-6 justify-center items-center">
            <div className="p-4 bg-white shadow rounded-md">
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={`https://onlinemarkt.netlify.app/products/3`}
                viewBox={`0 0 256 256`}
              />
            </div>
          </div>
        </div>

        {/* ===== Items & Total ===== */}
        <div className="border rounded-xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaBoxOpen /> Items Ordered
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between border-b pb-2">
              <span>Lightweight Studio Headphones × 1</span>
              <span className="font-semibold">$289</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Shipping</span>
              <span className="font-semibold">$2</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-green-600 pt-2">
              <span>Total</span>
              <span>$291</span>
            </div>
          </div>
        </div>

        {/* ===== Addresses ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shipping */}
          <div className="border rounded-xl p-6 bg-gray-50">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <MdLocationOn /> Shipping Address
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {address.firstname} {address.lastname} <br />
              {address.street} {address.homeNo} <br />
              {address.zip} {address.city} <br />
              {address.country} <br />
              {address.email}
            </p>
          </div>

          {/* Billing */}
          <div className="border rounded-xl p-6 bg-gray-50">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <MdLocationOn /> Billing Address
            </h3>
            <p className="text-gray-500">Same as shipping address</p>
          </div>
        </div>

        {/* ===== Continue Shopping Button ===== */}
        <div className="text-center">
          <button
            onClick={() => (window.location.href = "/")}
            className="px-10 py-3 bg-gray-900 text-white rounded-full hover:bg-black transition-all transform hover:scale-105"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};
