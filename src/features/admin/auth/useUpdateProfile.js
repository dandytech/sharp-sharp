import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { updateProfile } from "../../../services/api/auth-api";

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  //edit category using useMutation
  const { mutate: profileUpdtae, isLoading: isUpdating } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast.success("Pofile Updated Successfully");

      //reload immediately after update
      queryClient.invalidateQueries(["updateProfile"]);
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { profileUpdtae, isUpdating };
}
