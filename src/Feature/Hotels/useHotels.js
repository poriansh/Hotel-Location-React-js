import {useQuery} from "@tanstack/react-query";
import {getHotels} from "../../services/HotelServic";

function useHotels(query) {
  
  const {data, isLoading} = useQuery({
    queryKey: ["get-Hotels", query],
    queryFn: () => getHotels(query),
    refetchOnWindowFocus: true,
  });

  return {
    data: data?.data || [],
    totalCount: data?.totalCount || 0,
    isLoading,
  };
}

export default useHotels;
