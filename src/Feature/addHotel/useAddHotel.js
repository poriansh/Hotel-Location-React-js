import {useMutation, useQueryClient} from "@tanstack/react-query";
import {AddHotel} from "../../services/HotelServic";

function useAddHotel() {
  const queryClient = useQueryClient();
  const {isPending: isLoading, mutateAsync: AddNewHotel} = useMutation({
    mutationFn: AddHotel,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["get-Hotels"]});
    },
    // بدون toast اینجا
  });

  return {isLoading, AddNewHotel};
}


export default useAddHotel;
