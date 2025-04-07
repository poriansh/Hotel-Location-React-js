
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import { getHotels } from "../../services/HotelServic";

function useHotels(query = "") {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const {data} = await getHotels(query);
        
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
  }, [query]);

  return {data,isLoading};
}

export default useHotels;
