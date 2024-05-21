import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { adminAddCategory } from "../../../services/api/serviceCat-api";

export function useAddCategory() {
  const queryClient = useQueryClient();

  const { mutate: addCategory, isLoading } = useMutation({
    mutationFn: adminAddCategory,
    onSuccess: () => {
      toast.success("Category successfully Added!");

      // Reload after adding a category
      queryClient.invalidateQueries(["serviceCategory"]);
    },
    onError: (err) => {
      toast.error(
        err.response?.data?.message ||
          err.message ||
          "Failed to Add Service Category",
      );
    },
  });

  return { addCategory, isLoading };
}
