import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
// import { updateCurrentUser } from "../../../services/provider/editProviderApi";

import { updateCurrentAdmin } from "../../../services/admin/editAdminApi";

export function useEditAdmin() {
  const queryClient = useQueryClient();

  //edit cabin using useMutation
  const { mutate: updateAdmin, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentAdmin,
    onSuccess: () => {
      toast.success("User account successfully updated");

      //reload the page immediately
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateAdmin, isUpdating };
}
