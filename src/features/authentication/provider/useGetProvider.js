import { useQuery } from "@tanstack/react-query";
import { getCurrentProvider } from "../../../services/provider/getProviderApi";

export function useGetProvider() {
  const { isLoading, data: user, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentProvider,
  });

  //console.log(user);

  return { isLoading, user, refetch, isAuthenticated: user?.role === "authenticated" };
}
