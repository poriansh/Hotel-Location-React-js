import axios from "axios";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";

function useFetch(url,query = "") {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const {data} = await axios.get(`${url}?${query}`);
        setdata(data); 
        setIsLoading(false);
      } catch (err) {
        setdata([]);
        toast.error(err.message);
      } finally {
          setIsLoading(false);
      }
    }
    fetchData();
  }, [url,query]);

  return {data,isLoading};
}

export default useFetch;
