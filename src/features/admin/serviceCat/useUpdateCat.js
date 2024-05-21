import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { updateCategoryApi } from "../../../services/api/serviceCat-api";

export function useUpdateCat() {
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
