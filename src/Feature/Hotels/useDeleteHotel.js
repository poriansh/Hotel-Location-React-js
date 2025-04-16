import {useMutation, useQueryClient} from "@tanstack/react-query";
import {DeleteHotel} from "../../services/HotelServic";
import toast from "react-hot-toast";

function useDeleteHotel() {
  const queryClient = useQueryClient();
  const {mutate: DeleteHotelApi} = useMutation({
    mutationFn: DeleteHotel,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["get-Hotels"]});
      toast.success("Delete Hotel successfuly");
    },
    onError: () => {
      toast.success("Delete Hotel Error");
    },
  });
  return {DeleteHotelApi};
}

export default useDeleteHotel;
