import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../../services/api/serviceCat-api";

export default function useGetCat() {
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
