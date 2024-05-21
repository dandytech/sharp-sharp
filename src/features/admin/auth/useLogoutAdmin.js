import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { logoutAdmin } from "../../../services/api/auth-api";
import toast from "react-hot-toast";

export function useLogoutAdmin() {
  const navigate = useNavigate();

  const { mutate: adminLogout, isLoading } = useMutation({
    mutationFn: () => logoutAdmin(),

    onSuccess: () => {
      // Remove the token from local storage
      localStorage.removeItem("admin_token");

      // Handle other success actions (e.g., navigate to login page)
      console.log("Logout successfully");
      toast.success("Logout successfully");
      navigate("/adminLogin", { replace: true });
    },
    onError: (error) => {
      // Handle error (e.g., display error message)
      console.error("Logout failed:", error.message);
      toast.error("Something went wrong");
    },
  });

  return {
    adminLogout,
    isLoading,
  };
}
