import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCategoryApi } from "../../services/admin/apiService";

export function useDeleteCategory() {
  const queryClient = useQueryClient();

  //to delete Category
  const { isLoading: isDeletingCategory, mutate: deleteCategory } = useMutation(
    {
      mutationFn: deleteCategoryApi,
      onSuccess: () => {
        toast.success("Category deleted successfully");

        //reload after adding
        queryClient.invalidateQueries(["serviceCategories"]);
      },

      onError: (err) => toast.error(err.message),
    },
  );

  return { isDeletingCategory, deleteCategory };
}
