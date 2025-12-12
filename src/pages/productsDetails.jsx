import { useParams } from "react-router-dom";
import { FaStar, FaHeart, FaShoppingCart, FaTag } from "react-icons/fa";
import { motion } from "framer-motion";

import { useProductById, useRelatetProducts } from "../apis/ProductsApi";
import { PopularProductCard } from "../components/PopularProductCard";

export const ProductDetail = () => {
  const { id } = useParams();
  const { data: productDetail } = useProductById(id);
  const { data: relatetProducts } = useRelatetProducts(productDetail?.category);

  if (!productDetail)
    return <p className="p-10 text-center text-gray-500">Loading...</p>;

  return (
    <section className="my-24">
      <div className="max-w-7xl mx-auto px-5">
        {/* === PRODUCT DETAIL GRID === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-20">
          {/* LEFT — IMAGES */}
          <div className="space-y-6 w-full">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-gray-100 rounded-xl p-4 md:p-5 shadow-md hover:shadow-lg transition w-full"
            >
              <motion.img
                src={productDetail.image}
                alt={productDetail.title}
                className="w-full max-w-[350px] md:max-w-[450px] mx-auto h-100 drop-shadow-sky-200 drop-shadow-xl object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            </motion.div>

            {/* Thumbnails (Stagger Animation) */}
            <motion.div
              className="grid grid-cols-4 sm:flex sm:flex-wrap sm:justify-center gap-3 w-full"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 sm:w-20 sm:h-20 bg-gray-100 rounded-lg p-2 cursor-pointer 
                    border border-gray-300 shadow-sm hover:shadow-md hover:border-sky-500 transition"
                >
                  <img
                    src={productDetail.image}
                    alt="thumb"
                    className="object-contain w-full h-full"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — PRODUCT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Category */}
            <div className="flex items-center gap-2 text-gray-500 uppercase font-semibold">
              <FaTag className="text-sky-600" />
              {productDetail.category}
            </div>

            {/* Title */}
            <h1 className="text-lg md:text-3xl font-bold text-gray-900 leading-snug">
              {productDetail.title}
            </h1>

            {/* Price + Rating */}
            <div className="flex justify-between items-center border-b pb-4">
              <h2 className="text-lg md:text-4xl font-extrabold text-sky-600">
                ${productDetail.price}
              </h2>

              <span className="flex items-center text-yellow-500 text-xl font-semibold gap-1">
                <FaStar /> {productDetail.rating?.rate}
              </span>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Description:</h3>
              <p className="text-gray-600 leading-relaxed">
                {productDetail.description}
              </p>
            </div>

            {/* Colors */}
            <div>
              <h3 className="font-bold text-gray-800 mb-2">
                Available Colors:
              </h3>
              <div className="flex gap-4">
                {["red", "blue", "black"].map((color) => (
                  <label key={color} className="cursor-pointer">
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      className="hidden"
                    />
                    <motion.span
                      whileHover={{ scale: 1.15 }}
                      className={`w-7 h-7 inline-block rounded-full border shadow 
                        ${color === "red" && "bg-red-600"}
                        ${color === "blue" && "bg-blue-600"}
                        ${color === "black" && "bg-black"}`}
                    ></motion.span>
                  </label>
                ))}
              </div>
            </div>

            {/* Add to Cart + Favorite + Quantity */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pt-2 w-full">
              {/* Quantity */}
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-full md:w-24 py-2 px-3 border rounded shadow-sm 
                  focus:ring-2 focus:ring-sky-500 outline-none"
              />

              {/* Buttons */}
              <div className="flex w-full md:flex-1 gap-3">
                {/* Add to Cart */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 
                    bg-sky-600 hover:bg-sky-700 text-white font-semibold 
                    py-3 rounded shadow transition"
                >
                  <FaShoppingCart /> Add to Cart
                </motion.button>

                {/* Favorite */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 
                    border border-gray-300 hover:bg-sky-600 hover:text-white 
                    text-gray-700 font-semibold py-3 rounded shadow transition"
                >
                  <FaHeart /> Favorite
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* === RELATED PRODUCTS === */}
        <div className="mt-20">
          <div className="flex justify-between items-center border-b pb-3 mb-5">
            <h4 className="text-xl font-semibold">Related Products</h4>
            <p className="text-sky-600 hover:underline cursor-pointer">
              View All
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatetProducts?.slice(0, 4).map((r) => (
              <PopularProductCard key={r.id} type="new" {...r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
