import { motion } from "framer-motion";
import { FaShoppingCart, FaCreditCard } from "react-icons/fa";

export const ProductCard = ({ image, title, price }) => {
  return (
    <motion.div
      className="bg-sky-100 p-4 rounded-xl shadow-lg cursor-pointer flex flex-col items-center hover:bg-sky-200 transition-colors duration-300"
      whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full aspect-[4/3] object-cover rounded-lg mb-4"
      />
      <div className="text-center">
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          {title.length > 25 ? title.slice(0, 25) + "..." : title}
        </h2>
        <p className="text-gray-700 mb-4">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </p>
        <div className="flex gap-3 justify-center">
          <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
            <FaShoppingCart /> Add to Cart
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
            <FaCreditCard /> Checkout
          </button>
        </div>
      </div>
    </motion.div>
  );
};
