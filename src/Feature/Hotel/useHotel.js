
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import { getHotelsId } from "../../services/HotelServic";

function useHotelId(id) {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const {data} = await getHotelsId(id);
        console.log(data)
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
  }, [id]);

  return {data,isLoading};
}

export default useHotelId;
