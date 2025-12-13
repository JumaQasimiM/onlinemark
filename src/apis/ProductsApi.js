import { Api_Url } from "./apiUrl";
import { useFetch } from "../hooks/useFetch";

export const useProducts = () => useFetch(`${Api_Url}/products`);
export const useProductById = (id) => useFetch(`${Api_Url}/products/${id}`);
// relatit products
export const useRelatetProducts = (category) =>
  useFetch(`${Api_Url}/products/category/${category}`);

// Custom Hook für die neuesten Produkte
export const useNewProducts = () => {
  return useFetch(`${Api_Url}/products?_limit=6&sort=desc`);
};

// popular products

export const usePopularProducts = () => {
  const { data = [], error, loading } = useFetch(`${Api_Url}/products`);

  // Filter products with rating >= 4.5
  const popular = data.filter((product) => product.rating?.rate >= 4.5);
  return { data: popular, error, loading };
};

export const useProductCategories = () =>
  useFetch(`${Api_Url}/products/categories`);

// // discount
// const discounted = products.filter((p) => p.price < 50);

// // newProducts
// const newProducts = products.filter(
//   (p) => new Date(p.createdAt) > new Date("2025-01-01")
// );
