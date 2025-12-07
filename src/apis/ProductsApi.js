import { Api_Url } from "./apiUrl";
import { useFetch } from "../hooks/useFetch";

export const getProducts = () => useFetch(`${Api_Url}/products`);
export const getProductById = (id) => useFetch(`${Api_Url}/products/${id}`);
