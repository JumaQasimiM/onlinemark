export const RecivedOrder = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 mt-20">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          ✅ Order Received
        </h1>
        <p className="text-gray-600 mb-8">
          Thank you! Your order has been successfully placed.
        </p>

        {/* Order Summary */}
        <div className="border rounded-lg p-6 mb-8 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <p>
              <span className="font-semibold">Order #:</span> 2726
            </p>
            <p>
              <span className="font-semibold">Date:</span> December 15, 2025
            </p>
            <p>
              <span className="font-semibold">Email:</span> jbkj@dkf.com
            </p>
            <p>
              <span className="font-semibold">Payment:</span> Direct Bank
              Transfer
            </p>
          </div>
        </div>

        {/* Order Details */}
        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Order Details</h2>

          <div className="flex justify-between border-b pb-3 mb-3">
            <span>Lightweight Studio Headphones × 1</span>
            <span className="font-semibold">$289</span>
          </div>

          <div className="flex justify-between border-b pb-3 mb-3">
            <span>Shipping</span>
            <span className="font-semibold">$2</span>
          </div>

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>$291</span>
          </div>
        </div>

        {/* Addresses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shipping Address */}
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Shipping Address</h3>
            <p className="text-gray-700">
              dfsdf ndflkn dsfsdf dfngl
              <br />
              IN 23435
              <br />
              United States (US)
              <br />
              📞 457943753894
            </p>
          </div>

          {/* Billing Address */}
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Billing Address</h3>
            <p className="text-gray-700">
              dfsdf ndflkn dsfsdf dfngl
              <br />
              IN 23435
              <br />
              United States (US)
              <br />
              📞 457943753894
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-black transition">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};
