import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { deleteCategoryApi } from "../../../services/api/serviceCat-api";

export function useDeleteCat() {
  const queryClient = useQueryClient();

  //edit category using useMutation
  const { mutate: deleteCategory, isLoading: isDeleting } = useMutation({
    mutationFn: deleteCategoryApi,
    onSuccess: () => {
      toast.success("Category Deleted Successfully");

      //reload immediately after update
      queryClient.invalidateQueries(["serviceCategories"]);
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteCategory, isDeleting };
}
