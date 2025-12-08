import { motion } from "framer-motion";
import { FaShoppingCart, FaCreditCard, FaStar, FaHeart } from "react-icons/fa";

export const PopularProductCard = ({ image, title, price, rating }) => {
  //   const displayedTitle = title.length > 30 ? title.slice(0, 27) + "..." : title;

  return (
    <motion.div
      className="relative bg-white/90 backdrop-blur-xl rounded-xl border border-gray-100
                 cursor-pointer flex flex-col hover:shadow-xl hover:-translate-y-1
                 transition-all duration-300 group"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Popular Badge */}
      <p className="absolute top-3 left-3 flex items-center gap-1 bg-sky-600 text-white text-sm font-semibold px-3 py-1 rounded shadow-md z-10">
        <FaStar className="w-3 h-3" />
        Popular
      </p>

      {/* Image */}
      <div className="bg-gray-100 w-full p-4 rounded-t-xl overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full aspect-[4/3] object-contain p-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.35 }}
        />
      </div>

      {/* Favorite & Extra Icons (on hover) */}
      <div className="absolute top-3 right-3 opacity-0 flex flex-col gap-2  group-hover:opacity-100 transition-all duration-700 z-20">
        <div className="bg-white/70 backdrop-blur-md p-2 rounded-full shadow-md cursor-pointer hover:bg-white">
          <FaHeart className="w-4 h-4 text-black/70" />
        </div>
        <div className="bg-white/70 backdrop-blur-md p-2 rounded-full shadow-md cursor-pointer hover:bg-white">
          <FaShoppingCart className="w-4 h-4 text-red-500" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-start py-3 px-4">
        {/* Title */}
        <h3 className="text-md font-bold text-gray-900 mb-2 leading-snug">
          {title.slice(0, 15)}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={
                i < Math.round(rating?.rate || 0)
                  ? "text-yellow-400"
                  : "text-yellow-300/40"
              }
            >
              ★
            </span>
          ))}
          <span className="text-gray-600 text-sm ml-1">
            {rating?.rate?.toFixed(1) || "0.0"}
          </span>
        </div>

        {/* Price */}
        <p className="text-2xl font-bold text-sky-600 mb-3">${price}</p>

        {/* Buttons */}
        <div className="flex items-center gap-3 w-full mt-auto">
          <button className="flex-1 flex items-center justify-center gap-2 py-1 text-sm bg-sky-500 text-white rounded-lg font-medium hover:bg-sky-600 hover:shadow-md active:scale-95 transition">
            <FaShoppingCart /> Add to Cart
          </button>

          <button className="flex-1 flex items-center justify-center gap-2 py-1 text-sm border border-sky-500 text-gray-900 rounded-lg font-medium hover:bg-sky-100 hover:shadow-md active:scale-95 transition">
            <FaCreditCard /> Buy
          </button>
        </div>
      </div>
    </motion.div>
  );
};
