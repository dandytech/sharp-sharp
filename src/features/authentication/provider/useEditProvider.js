import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../../services/provider/editProviderApi";

export function useEditProvider() {
  const queryClient = useQueryClient();

  //edit cabin using useMutation
  const { mutate: updateProvider, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("User account successfully updated");

      //reload the page immediately
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateProvider, isUpdating };
}
