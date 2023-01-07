import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoding(true);
      try {
        const res = await axios.get(url,{
          sort:{data:-1},
          params: {
            _limit: 5
           }
        });
        setData(res.data.Novals);
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
      setData(res.data.Novals);
    } catch (err) {
      setError(err);
    }
    setLoding(false);
  };
  return {data,loading,error,reFetch}
};
export default useFetch