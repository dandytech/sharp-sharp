import { useQuery } from "@tanstack/react-query";

import { getCategoriesProvider } from "../../../services/api/serviceCat-api";

export default function useGetCategories() {
  const {
    isLoading: isLoadingCat,
    data: serviceCategories,
    error,
  } = useQuery({
    queryKey: ["serviceCategories"],
    queryFn: getCategoriesProvider,
  });

  return { isLoadingCat, serviceCategories, error };
}
