import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/admin/apiService";

export default function useGetCategories() {
  const {
    isLoading: isLoadingCat,
    data: serviceCategories,
    error,
  } = useQuery({
    queryKey: ["serviceCategories"],
    queryFn: getCategories,
  });

  
  return { isLoadingCat, serviceCategories, error };
}
