import { useState } from "react";

export const useCart = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const requst = async (url, option) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        ...option,
      });
      if (!res.ok) {
        throw new Error("Request failed");
      }
      return await res.json();
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { requst, loading, error };
};
