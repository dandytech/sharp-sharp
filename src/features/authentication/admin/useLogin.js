import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { apiAdminLogin } from "../../../services/admin/apiAuth";
//import { toast } from "react-toastify";
import { toast } from "react-hot-toast";
export default function useAdminLogin() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate: adminLogin, isLoading } = useMutation({
    mutationFn: ({ email, password }) => apiAdminLogin({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueriesData(["user"], user.user);
      toast.success("Login Successfully");
      navigate("/admin", { replace: true });
    },

    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Email or Password are incorrect");
    },
  });

  return { adminLogin, isLoading };
}
