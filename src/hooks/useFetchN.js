import axios from "axios";
import { useEffect, useState } from "react";

const useFetchN = (url) => {
  const [data, setData] = useState([]);
  const [tags,setTags]= useState('');
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoding(true);
      try {
        const res = await axios.get(url);
        setData(res.data.noval);
        setTags(res.data.noval.tags.join(" "))
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
      setData(res.data.noval);
    } catch (err) {
      setError(err);
    }
    setLoding(false);
  };
  return {data,loading,error,reFetch, tags}
};
export default useFetchN