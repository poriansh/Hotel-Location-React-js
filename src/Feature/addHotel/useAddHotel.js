import {useMutation, useQueryClient} from "@tanstack/react-query";
import {AddHotel} from "../../services/HotelServic";
import toast from "react-hot-toast";

function useAddHotel() {
  const queryClient = useQueryClient();
  const {isPending: isLoading, mutateAsync: AddNewHotel} = useMutation({
    mutationFn: AddHotel,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Hotel Added Successfully");
      queryClient.invalidateQueries({queryKey: ["get-Hotels"]});
    },
    onError: () => {
      toast.error("Error Adding Hotel");
    },
  });
  return {isLoading, AddNewHotel};
}

export default useAddHotel;
