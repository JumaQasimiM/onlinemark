import React from "react";
import { FaMale, FaAppleAlt, FaSpa } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Category = () => {
  const categories = [
    {
      name: "Beauty",
      description: "Skincare & Wellness",
      icon: <FaSpa />,
      accent: "from-pink-400 to-rose-500",
    },
    {
      name: "Fragrances",
      description: "Luxury Scents",
      icon: <FaMale />,
      accent: "from-slate-600 to-gray-800",
    },
    {
      name: "Groceries",
      description: "Daily Essentials",
      icon: <FaAppleAlt />,
      accent: "from-emerald-400 to-lime-500",
    },
    {
      name: "Kitchen",
      description: "Smart Tools",
      icon: <FaAppleAlt />,
      accent: "from-orange-400 to-amber-500",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-caveat font-bold text-2xl sm:text-4xl md:text-5xl text-gray-900">
            Shop by Category
          </h2>
          <p className="text-gray-500 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-milonga">
            Discover curated collections designed for quality and lifestyle.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-3 sm:gap-6 md:gap-10">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to="/products"
              aria-label={`Browse ${cat.name}`}
              className="focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-xl sm:rounded-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative h-full bg-white/70 backdrop-blur-md border border-gray-100 
                rounded-xl sm:rounded-2xl 
                p-3 sm:p-6 md:p-8
                shadow-sm hover:shadow-xl transition-all"
              >
                {/* Accent Line */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 rounded-t-xl sm:rounded-t-2xl bg-gradient-to-r ${cat.accent}`}
                />

                {/* Icon */}
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 
                  flex items-center justify-center rounded-lg sm:rounded-xl 
                  bg-gradient-to-br ${cat.accent} 
                  text-white text-lg sm:text-xl md:text-2xl 
                  mb-3 sm:mb-6 shadow-md`}
                >
                  {cat.icon}
                </div>

                {/* Text */}
                <h3 className="text-sm sm:text-base md:text-xl font-semibold text-gray-900 mb-1">
                  {cat.name}
                </h3>
                <p className="text-[6px] sm:text-xs md:text-sm text-gray-500">
                  {cat.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-white/40 to-transparent" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
