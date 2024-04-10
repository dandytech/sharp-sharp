import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiAddCategories } from "../../services/admin/apiService";
import toast from "react-hot-toast";

export default function addCategories() {
  const queryClient = useQueryClient();

  const { mutate: addCategory, isLoading } = useMutation({
    mutationFn: apiAddCategories,
    onSuccess: () => {
      toast.success("Category Added Successfully");

      // Reload after adding a category
      queryClient.invalidateQueries(["serviceCategories"]);
    },
  });

  return { addCategory, isLoading };
}
