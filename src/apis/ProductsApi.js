import { Api_Url } from "./apiUrl";
import { useFetch } from "../hooks/useFetch";

// export const useProducts = () => useFetch(`${Api_Url}/products`);
export const useProducts = () => {
  const { data, loading, error } = useFetch(`${Api_Url}/products?limit=194`);
  return {
    data: data?.products || [],
    loading,
    error,
  };
};

export const useProductById = (id) => useFetch(`${Api_Url}/products/${id}`);
// relatit products
export const useRelatetProducts = (category) => {
  const { data, loading, error } = useFetch(
    `${Api_Url}/products/category/${category}`
  );

  return {
    data: data?.products || [],
    loading,
    error,
  };
};

// Custom Hook für die neuesten Produkte
export const useNewProducts = () => {
  const { data, loading, error } = useFetch(
    `${Api_Url}/products?limit=6&skip=7`
  );

  return {
    data: data?.products || [],
    loading,
    error,
  };
};

// popular products

export const usePopularProducts = () => {
  const { data, error, loading } = useFetch(`${Api_Url}/products`);

  const popular =
    data?.products?.filter((product) => product.rating >= 4.5) || [];

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

// ============new =======

// export const useProducts = () => {
//   const { data, loading, error } = useFetch(`${Api_Url}/products`);
//   return {
//     data: data?.products || [],
//     loading,
//     error,
//   };
// };

// export const useRelatedProducts = (category) => {
//   const { data, loading, error } = useFetch(
//     `${Api_Url}/products/category/${category}`
//   );

//   return {
//     data: data?.products || [],
//     loading,
//     error,
//   };
// };
