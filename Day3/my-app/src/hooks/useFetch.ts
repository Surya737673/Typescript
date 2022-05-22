import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = <T>(URL: string, params: Record<string, unknown>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(URL, {
        params: {
          ...params,
        },
      })
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [params.q]);
  console.log(data)
  return { data, loading, error };
};

export default useFetch;