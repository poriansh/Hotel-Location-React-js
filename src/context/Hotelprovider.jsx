import {createContext, useContext, useState} from "react";
import useFetch from "../hooks/useFetch";
import {useSearchParams} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Hotelcontext = createContext();
const BASE_URL = "http://localhost:5000/hotels";



function Hotelprovider({ children }) {
  const [currenthotel, setcurrenthotel] = useState({})
  const [isLoadingcurrenthotel, setisLoadingcurrenthotel] = useState(false);
  
  const [searchparams] = useSearchParams();
  const destination = searchparams.get("destination");
  const room = JSON.parse(searchparams.get("options"))?.room;
  const {isLoading, data: hotels} = useFetch(
    BASE_URL,
    `q=${destination || ""}&accommodates_gte=${room || 1}`
  );
  async function getHotel(id) {
    
    try {
      setisLoadingcurrenthotel(true)
      const { data } = await axios.get(`${BASE_URL}/${id}`)
      setcurrenthotel(data)
    } catch (error) {
      setisLoadingcurrenthotel(false);
      toast.error(error.massage)
    } finally {
      setisLoadingcurrenthotel(false);
    }

  }
  return (
    <Hotelcontext.Provider
      value={{isLoading, hotels, currenthotel, getHotel, isLoadingcurrenthotel}}
    >
      {children}
    </Hotelcontext.Provider>
  );
}

export default Hotelprovider;

export function useHotel() {
  return useContext(Hotelcontext);
}
