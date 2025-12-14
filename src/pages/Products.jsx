import { FaSearch } from "react-icons/fa";
import { useProductCategories, useProducts } from "../apis/ProductsApi";
import { PopularProductCard } from "../components/PopularProductCard";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Products = () => {
  // Categories
  const {
    data: category = [],
    loading: catLoading,
    error: catError,
  } = useProductCategories();
  // Normalize categories first
  const categories = [{ slug: "All", name: "All" }, ...category];

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Products
  const {
    data: productes = [],
    loading: prodLoading,
    error: prodError,
  } = useProducts();

  // Filter by category and search
  const filteredData = productes.filter((product) => {
    const matchCategory =
      activeCategory === "All" || product.category === activeCategory;
    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Loading state
  if (catLoading || prodLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-gray-500 text-lg animate-pulse">Loading...</p>
      </div>
    );
  }

  // Error state
  if (catError || prodError) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-red-500 text-lg">
          Something went wrong. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full py-20 bg-gray-50">
      {/* Search & Filter */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-4">
          {/* Categories */}

          <div className="overflow-x-auto w-full">
            <ul className="flex gap-4 text-sm font-medium text-gray-600 px-2 sm:px-0">
              {categories.slice(0, 7).map((cate, idx) => (
                <motion.li
                  key={cate.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setActiveCategory(cate.slug)}
                  className={`flex-shrink-0 px-4 py-2 rounded cursor-pointer transition text-center
                            ${
                              activeCategory === cate.slug
                                ? "border-b-2 border-sky-600 text-sky-950 rounded-none hover:bg-gray-200"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                >
                  {cate.name}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Search */}
          <motion.div
            className="relative w-full md:w-100"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search products..."
              className="w-full pl-7 pr-4 py-2 border-b focus:outline-none bg-gray-100"
            />
            <FaSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" />
          </motion.div>
        </div>
      </div>

      {/* Products Grid with animation */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {filteredData.length > 0 ? (
            filteredData.slice(0, 20).map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                // whileHover={{ scale: 1.03 }}
              >
                <PopularProductCard {...product} type="new" />
              </motion.div>
            ))
          ) : (
            <motion.p
              className="col-span-full text-center text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No products found.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
