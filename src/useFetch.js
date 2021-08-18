import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetch(url);
        const json = await result.json();
        setData(json);
      } catch (error) {
        setError(error);
      }
    })();
  }, [url]);

  return { data, error };
};
