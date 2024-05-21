import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { logoutClient } from "../../../services/api/auth-api";
import toast from "react-hot-toast";

export function useLogoutClient() {
  const navigate = useNavigate();

  const { mutate: clientLogout, isLoading } = useMutation({
    mutationFn: () => logoutClient(),

    onSuccess: () => {
      // Remove the token from local storage
      localStorage.removeItem("client_token");

      // Handle other success actions (e.g., navigate to login page)
      console.log("Logout successfully");
      toast.success("Logout successfully");
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      // Handle error (e.g., display error message)
      console.error("Logout failed:", error.message);
      toast.error("Something went wrong");
    },
  });

  return {
    clientLogout,
    isLoading,
  };
}
