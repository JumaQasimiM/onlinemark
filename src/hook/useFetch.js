// Custom React Hook for fetching data from any API URL

import { useEffect, useState } from "react";

export const useFetch = (url) => {
  // State to store fetched data
  const [data, setData] = useState([]);

  // State to track loading status
  const [loading, setLoading] = useState(false);

  // State to store error messages (if any)
  const [error, setError] = useState(null);

  useEffect(() => {
    // If no URL is provided, do nothing
    if (!url) return;

    // Function: Fetch data from API
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading

        // Fetch from URL
        const res = await fetch(url);

        // If response is not OK → throw custom error
        if (!res.ok) {
          throw new Error("Cannot fetch data.");
        }

        // Parse JSON response
        const result = await res.json();

        // Store result in state
        setData(result);
      } catch (error) {
        // Store error message
        setError(error.message || "Something went wrong");
      } finally {
        // End loading whether successful or failed
        setLoading(false);
      }
    };

    // Execute function
    fetchData();

    // Re-run effect whenever URL changes
  }, [url]);

  // Return everything needed by components
  return { data, error, loading };
};
