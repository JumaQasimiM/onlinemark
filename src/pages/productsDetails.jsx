import { useParams } from "react-router-dom";
import { useProductById, useRelatetProducts } from "../apis/ProductsApi";
import { h2 } from "framer-motion/client";
import { PopularProductCard } from "../components/PopularProductCard";

export const ProductDetail = () => {
  const { id } = useParams();
  const { data: productDetail } = useProductById(id);
  const { data: relatetProducts } = useRelatetProducts(productDetail.category);
  return (
    <section className="my-22">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between gap-4 my-5 border mt-22">
          <div className="flex-2">
            <img src={productDetail.image} alt="" />
          </div>
          <div className="flex-3 justify-">
            <h2>{productDetail.title}</h2>
            <h2>${productDetail.price}</h2>
            <h2>{productDetail.description}</h2>
            {/* <h2>{productDetail.rating}</h2> */}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center font-semibold border-b-2 pb-1">
            <h4>Relatet Products</h4>
            <p>View alls</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
            {relatetProducts.map((r) => (
              <PopularProductCard type="new" {...r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
