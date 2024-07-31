import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserProfilePassword } from "../../../services/api/auth-api";
import toast from "react-hot-toast";

export function useUpdatePassword() {
  const queryClient = useQueryClient();

  const { mutate: updatePassword, isLoading } = useMutation({
    mutationFn: updateUserProfilePassword,

    onSuccess: () => {
      toast.success("Password Updated Successfully");

      queryClient.invalidateQueries(["updatePassword"]);
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updatePassword, isLoading };
}
