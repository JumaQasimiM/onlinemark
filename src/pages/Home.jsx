import { ImLab } from "react-icons/im";
import { getProducts } from "../apis/ProductsApi";
import { Hero } from "../components/Hero";

export const Home = () => {
  const { data } = getProducts();
  return (
    <>
      {/* hero */}
      <Hero />
      {/* new products */}
      {data?.map((product) => (
        <li>{product.title}</li>
      ))}
      {/* popular products */}

      {/* offer */}
      {/* social media */}
      {/* newslatter */}
    </>
  );
};
