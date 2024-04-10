import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { apiAdminLogout } from "../../../services/admin/apiAuth";
import { toast } from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: apiAdminLogout,
    onSuccess: () => {
      queryClient.removeQueries(); //remove user from local storage
      toast.success("Logout Successfully");
      navigate("/adminLogin", { replace: true });
      
    },
  });

  return { logout, isLoading };
}
