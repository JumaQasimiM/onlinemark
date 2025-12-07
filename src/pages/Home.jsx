import { ImLab } from "react-icons/im";
import { useProducts } from "../apis/ProductsApi";
import { Hero } from "../components/Hero";
import { ProductCard } from "../components/ProductCard";

export const Home = () => {
  const { data } = useProducts();
  return (
    <>
      {/* hero */}
      <Hero />
      {/* new products */}
      <div className="max-w-7xl mx-auto grid grid-cols-5 gap-2.5 my-5">
        {data?.map((product) => (
          <li key={product.id} className="list-none">
            <ProductCard {...product} />{" "}
          </li>
        ))}
      </div>
      {/* popular products */}

      {/* offer */}
      {/* social media */}
      {/* newslatter */}
    </>
  );
};
