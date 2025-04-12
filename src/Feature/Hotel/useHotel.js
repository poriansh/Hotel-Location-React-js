import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import { getHotelsId } from "../../services/HotelServic";
function useHotel() {
  const {id} = useParams();
  const {data, isLoading} = useQuery({
    queryKey: ["get-Hotel", id],
    queryFn: () => getHotelsId(id),
    refetchOnWindowFocus: true,
  });
  console.log(data);
  return {data, isLoading};
}

export default useHotel;
