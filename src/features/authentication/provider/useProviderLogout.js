import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import { toast } from "react-hot-toast";
import { logoutProviderApi } from "../../../services/provider/loginProviderApi";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutProviderApi,
    onSuccess: () => {
      queryClient.removeQueries(); //remove user from local storage
      toast.success("Logout Successfully");
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
