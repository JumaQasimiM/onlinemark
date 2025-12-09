import React from "react";
import { FaMale, FaFemale, FaAppleAlt, FaSpa } from "react-icons/fa";
import { motion } from "framer-motion";

export const Category = () => {
  const categories = [
    { name: "Beauty", description: "Skincare & Wellness", icon: <FaSpa /> },
    { name: "Men", description: "Fashion & Accessories", icon: <FaMale /> },
    { name: "Women", description: "Trendy Styles", icon: <FaFemale /> },
    { name: "Foods", description: "Organic & Fresh", icon: <FaAppleAlt /> },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-1">
          Explore Categories
        </h2>
        <p className="font-semibold mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br />
          Debitis mollitia ipsum id totam reiciendis consequatur, quae
          dignissimos suscipit sed, asperiores,
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="relative flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform cursor-pointer"
              whileHover={{ scale: 1.06 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Gradient Icon */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-pink-400 to-pink-300 text-white text-4xl shadow-md mb-4">
                {cat.icon}
              </div>

              {/* Category Name */}
              <h3 className="text-xl font-semibold text-gray-800">
                {cat.name}
              </h3>

              {/* Category Description */}
              <p className="text-gray-500 text-sm mt-1">{cat.description}</p>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-50 via-white to-white opacity-0 hover:opacity-20 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
