import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserProfilePhoto } from "../../../services/api/auth-api";
import toast from "react-hot-toast";

export function useUpdateProfilePhoto() {
  const queryClient = useQueryClient();

  const { mutate: updatePhoto, isLoading } = useMutation({
    mutationFn: updateUserProfilePhoto,
    onSuccess: () => {
      toast.success("Photo Updated Successfully");

      queryClient.invalidateQueries(["updatePhoto"]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updatePhoto, isLoading };
}
