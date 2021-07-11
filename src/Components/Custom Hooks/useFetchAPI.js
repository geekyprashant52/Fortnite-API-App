import { useState, useEffect } from "react";

export default function useFetchAPI(url) {
  const [apiResults, setApiResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const rawData = await fetch(url);
    const data = await rawData.json();
    //console.log(data);
    setApiResults(data.data);
    data && setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    apiResults,
    isLoading,
  };
}
