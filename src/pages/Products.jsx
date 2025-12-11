import { useProducts } from "../apis/ProductsApi";
import { PopularProductCard } from "../components/PopularProductCard";

export const Products = () => {
  const { data: products = [] } = useProducts();
  return (
    <section className="w-full my-21">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
        {products.map((product) => (
          <PopularProductCard {...product} type="new" />
        ))}
      </div>
    </section>
  );
};
