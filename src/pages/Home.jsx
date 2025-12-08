import { ImLab } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import { useNewProducts, usePopularProducts } from "../apis/ProductsApi";
import { Hero } from "../components/Hero";
import { ProductCard } from "../components/ProductCard";
import { PopularProductCard } from "../components/PopularProductCard";

export const Home = () => {
  const { data: newProducts = [] } = useNewProducts();
  const { data: popular = [] } = usePopularProducts();
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* New Arrival Products */}
      <section className="max-w-7xl mx-auto my-10 px-3">
        <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-4 border-sky-500 pl-3">
          New Arrival Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newProducts.length > 0 ? (
            newProducts.slice(0, 4).map((product) => (
              <li key={product.id} className="list-none">
                <ProductCard {...product} />
              </li>
            ))
          ) : (
            <p className="col-span-4 text-center text-gray-500">
              Loading new products...
            </p>
          )}
        </div>
      </section>
      {/* popular  */}
      <section className="max-w-7xl mx-auto my-15 px-3">
        <div className="flex items-center gap-3 mb-10">
          {/* Decorative Stars */}
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400 w-5 h-5 animate-pulse" />
            <FaStar className="text-yellow-400 w-5 h-5 animate-pulse delay-75" />
            <FaStar className="text-yellow-400 w-5 h-5 animate-pulse delay-150" />
          </div>

          {/* Section Title */}
          <h2 className="text-xl sm:text-xl font-extrabold text-gray-900 relative after:block after:w-20 after:h-1 after:bg-sky-500 after:rounded-full after:absolute after:-bottom-2">
            Popular Products
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {popular.length > 0 ? (
            popular.slice(0, 4).map((product) => (
              <li key={product.id} className="list-none">
                <PopularProductCard {...product} />
              </li>
            ))
          ) : (
            <p className="col-span-4 text-center text-gray-500">
              Loading new products...
            </p>
          )}
        </div>
      </section>

      {/* Popular Products */}
      {/* Offer Section */}
      {/* Social Media */}
      {/* Newsletter */}
    </>
  );
};
