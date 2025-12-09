import { ImLab } from "react-icons/im";
import { FaStar, FaGift, FaArrowRight, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNewProducts, usePopularProducts } from "../apis/ProductsApi";
import { Hero } from "../components/Hero";
import { ProductCard } from "../components/ProductCard";
import { PopularProductCard } from "../components/PopularProductCard";
import T3 from "../assets/t3.png";
import { Gallery } from "../components/Gallary";

export const Home = () => {
  const { data: newProducts = [] } = useNewProducts();
  const { data: popular = [] } = usePopularProducts();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* New Arrival Products */}
      <section className="max-w-7xl mx-auto my-16 px-4 md:px-8">
        <motion.h2
          {...fadeInUp}
          className="text-xl md:text-2xl font-extrabold text-gray-900 mb-8 border-l-4 border-sky-500 pl-4 flex items-center gap-3"
        >
          New Arrival Products
        </motion.h2>
        <motion.div
          {...fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {newProducts.length > 0 ? (
            newProducts
              .slice(0, 4)
              .map((product) => (
                <PopularProductCard
                  key={product.id}
                  {...product}
                  type={"new"}
                />
              ))
          ) : (
            <p className="col-span-4 text-center text-gray-500">
              Loading new products...
            </p>
          )}
        </motion.div>
      </section>

      <Gallery />
      {/* Popular Products */}
      <section className="max-w-7xl mx-auto my-20 px-4 md:px-8">
        <motion.h2
          {...fadeInUp}
          className="text-xl md:text-2xl font-extrabold text-gray-900 border-l-4 border-sky-500 pl-4 my-4"
        >
          Popular Products
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {popular.length > 0 ? (
            popular
              .slice(0, 4)
              .map((product) => (
                <PopularProductCard key={product.id} {...product} />
              ))
          ) : (
            <p className="col-span-4 text-center text-gray-500">
              Loading popular products...
            </p>
          )}
        </motion.div>
      </section>

      {/* Newsletter Section */}
    </>
  );
};
