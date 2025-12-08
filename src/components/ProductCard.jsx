import { motion } from "framer-motion";
import { FaShoppingCart, FaCreditCard } from "react-icons/fa";

export const ProductCard = ({ image, title, price, rating }) => {
  return (
    <motion.div
      className="bg-white/90 backdrop-blur-lg p-5 rounded-xl shadow-sm 
                 border border-gray-200 cursor-pointer flex flex-col 
                 hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      {/* Image */}
      <div className="w-full rounded-lg overflow-hidden mb-4 bg-white">
        <motion.img
          src={image}
          alt={title}
          className="w-full aspect-[4/3] object-contain p-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Title */}
      <p className="text-lg font-semibold text-gray-900 mb-1 text-center px-2">
        {title.slice(0, 15)}
      </p>

      {/* Rating */}
      <div className="flex justify-center items-center gap-1 text-yellow-500 mb-2">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={
              i < Math.round(rating?.rate || 0) ? "opacity-100" : "opacity-30"
            }
          >
            ★
          </span>
        ))}
        <span className="text-gray-600 text-sm ml-1">
          ({rating?.rate || 0})
        </span>
      </div>

      {/* Price */}
      <p className="text-xl font-bold text-sky-700 mb-4 text-center">
        ${price}
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-3 w-full mt-auto">
        <button
          className="text-sm flex-1 flex items-center justify-center gap-2 py-2 
                     bg-sky-500 text-white rounded-lg font-medium
                     hover:bg-sky-600 active:scale-95 transition"
        >
          <FaShoppingCart /> Add to Cart
        </button>

        <button
          className="text-sm flex-1 flex items-center justify-center gap-2 py-2
                     bg-blue-700 text-white rounded-lg font-medium
                     hover:bg-blue-800 active:scale-95 transition"
        >
          <FaCreditCard /> Buy
        </button>
      </div>
    </motion.div>
  );
};
//
