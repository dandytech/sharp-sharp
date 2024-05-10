import { getAllProviders } from "../../services/provider/getProvidersApi";
import { useQuery } from "@tanstack/react-query";

export default function useGetProviders() {
  const {
    isLoading: isLoadingProvider,
    data: providers,
    error,
  } = useQuery({
    queryKey: ["providers"],
    queryFn: getAllProviders,
  });

  return { isLoadingProvider, providers, error };
}
