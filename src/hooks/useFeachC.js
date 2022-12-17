import axios from "axios";
import { useEffect, useState } from "react";

const useFetchC = (url) => {
  const [chapter, setData] = useState([]);
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoding(true);
      try {
        const res = await axios.get(url);
        setData(res.data.chapter);
      } catch (err) {
        setError(err);
      }
      setLoding(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoding(true);
    try {
      const res = await axios.get(url);
      setData(res.data.chapter);
    } catch (err) {
      setError(err);
    }
    setLoding(false);
  };
  return {chapter,loading,error,reFetch}
};
export default useFetchC