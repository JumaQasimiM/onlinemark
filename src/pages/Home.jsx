import { motion } from "framer-motion";
import { useNewProducts, usePopularProducts } from "../apis/ProductsApi";
import { Hero } from "../components/Hero";
import { PopularProductCard } from "../components/PopularProductCard";
import { Gallery } from "../components/Gallary";
import { Newsletter } from "../components/Newslatter";
import { Category } from "../components/category";
import { SocialMedia } from "../components/SocialMedia";

export const Home = () => {
  // use custom hooks
  const { data: newProducts = [] } = useNewProducts(); // get new produts from api (custom hook)
  const { data: popular = [] } = usePopularProducts(); // get popular products from api (custom hook)

  // animation
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* category */}
      <Category />

      {/* New Arrival Products */}
      <section className="max-w-7xl mx-auto my-16 px-4 md:px-8">
        <motion.h2
          {...fadeInUp}
          className="font-caveat text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 border-l-4 border-sky-500 pl-4 flex items-center gap-3"
        >
          New Arrival Products
        </motion.h2>
        <motion.div
          {...fadeInUp} // animation
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {newProducts.length > 0 ? ( // check when 0 product to avoid error
            newProducts
              .slice(0, 4) // get only 4 products
              .map((product) => (
                // <PopularProductCard /> component
                //
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

      {/* Gallary section */}
      <Gallery />

      {/* Popular Products */}
      <section className="max-w-7xl mx-auto my-20 px-4 md:px-8">
        <motion.h2
          {...fadeInUp} // animation
          className="font-caveat text-2xl md:text-4xl  font-extrabold text-gray-900 border-l-4 border-sky-500 pl-4 my-4"
        >
          Popular Products
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {popular.length > 0 ? ( // to avoid error when 0 products
            popular
              .slice(0, 4) // get only 4 products
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

      {/* social media section */}
      <SocialMedia />

      {/* Newsletter Section */}
      <Newsletter />
    </>
  );
};
