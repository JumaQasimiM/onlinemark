import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import img1 from "../assets/blueShirt.jpg";
import img2 from "../assets/grayTshirt.jpg";

export const Gallery = () => {
  const images = [img1, img2, img1, img2];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Trending Styles
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Explore our latest collection featuring premium quality and trendy
            designs.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center -space-x-10 md:-space-x-16"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={item}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-3xl overflow-hidden shadow-2xl bg-white transform hover:-translate-y-2 hover:scale-105 transition cursor-pointer"
              style={{
                zIndex: hoveredIndex === i ? 100 : images.length - i,
              }}
            >
              <img
                src={img}
                alt={`Product ${i + 1}`}
                className="w-full h-full object-cover rounded-3xl"
              />

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.3 + i * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1 shadow-md"
              >
                <FaStar className="text-white" /> Hot
              </motion.div>

              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-end p-4 rounded-3xl">
                <button className="w-full bg-white text-gray-900 py-2 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
