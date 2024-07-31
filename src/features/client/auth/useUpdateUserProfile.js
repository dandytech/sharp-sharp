import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { updateUserProfile } from "../../../services/api/auth-api";

export function useUpdateUserProfile() {
  const queryClient = useQueryClient();

  //edit category using useMutation
  const { mutate: profileUpdate, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserProfile,
    onSuccess: () => {
      toast.success("Pofile Updated Successfully");

      //reload immediately after update
      queryClient.invalidateQueries(["updateProfile"]);
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { profileUpdate, isUpdating };
}
