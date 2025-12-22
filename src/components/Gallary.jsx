import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import img1 from "../assets/blueShirt.jpg";
import img2 from "../assets/grayTshirt.jpg";

const products = [
  {
    id: 1,
    name: "Premium Blue Shirt",
    price: "$79.00",
    image: img1,
    badge: "Trending",
  },
  {
    id: 2,
    name: "Classic Gray T-Shirt",
    price: "$49.00",
    image: img2,
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Premium Blue Shirt",
    price: "$79.00",
    image: img1,
  },
  {
    id: 4,
    name: "Classic Gray T-Shirt",
    price: "$49.00",
    image: img2,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const Gallery = () => {
  return (
    <section className="w-full bg-white py-15">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-caveat text-4xl md:text-5xl font-extrabold text-gray-900">
            Trending Styles
          </h2>
          <p className="text-gray-500 mt-4 font-milonga">
            Discover our most loved pieces, crafted with premium materials and
            modern design.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              whileHover={{ y: -6 }}
              className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[22rem] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-black/80 text-white text-xs px-3 py-1 rounded-full tracking-wide">
                    {product.badge}
                  </span>
                )}

                {/* Overlay CTA */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <button className="w-full bg-white text-gray-900 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-amber-500 font-bold">
                    {product.price}
                  </span>

                  <div className="flex items-center gap-1 text-amber-400 text-sm">
                    <FaStar />
                    <span className="text-gray-600">4.8</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
