import { useState } from "react";
import { Api_Url } from "./apiUrl";

export const useDelete = () => {
  const deleteItem = async (cartId) => {
    const res = await fetch(`${Api_Url}/products/${cartId}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Failed to delete item");
    }
  };
  return { deleteItem };
};
const { deleteItem } = useDelete();
const handledelet = async (cartId) => {
  const [cart, setCart] = useState([]);
  try {
    await deleteItem(cartId);
    setCart((prev) => prev.filter((item) => item.id !== cartId));
  } catch (error) {
    console.error(error);
  }
};
