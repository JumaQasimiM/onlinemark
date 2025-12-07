import { Api_Url } from "./apiUrl";
import { useFetch } from "../hooks/useFetch";

export const useProducts = () => useFetch(`${Api_Url}/products`);
export const useProductById = (id) => useFetch(`${Api_Url}/products/${id}`);

// Custom Hook für die neuesten Produkte
export const useNewProducts = () => {
  return useFetch(`${Api_Url}/products?_limit=6`);
};
