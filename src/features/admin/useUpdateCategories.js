import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCategoryApi } from "../../services/admin/apiService";
import toast from "react-hot-toast";

export function useUpdateCategories() {
  const queryClient = useQueryClient();

  //edit category using useMutation
  const { mutate: updateCategory, isLoading: isUpdating } = useMutation({
    mutationFn: updateCategoryApi,
    onSuccess: () => {
      toast.success("Category Updated Successfully");

      //reload immediately after update
      queryClient.invalidateQueries(["serviceCategories"]);
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateCategory, isUpdating };
}
