import axios from "axios";
import { useEffect, useState } from "react";

const useFetchSc = (url) => {
  const [singleChapter, setsinglechapter] = useState([]);
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoding(true);
      try {
        const res = await axios.get(url);
        setsinglechapter(res.data.chapter);
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
      setsinglechapter(res.data.chapter);
    } catch (err) {
      setError(err);
    }
    setLoding(false);
  };
  return {singleChapter,loading,error,reFetch}
};
export default useFetchSc