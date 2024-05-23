import { useMutation } from "@tanstack/react-query";
import { loginAdmin } from "../../../services/api/auth-api";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useLoginAdmin() {
  const navigate = useNavigate();

  const { mutate: adminLogin, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAdmin({ email, password }),

    onSuccess: (data) => {
      // Store the token in local storage
      // localStorage.setItem("authToken", data.token);

      localStorage.setItem("admin_token", data.token);
      localStorage.setItem("user_sharp_data", JSON.stringify(data.message));

      // Handle other success actions (e.g., navigate to dashboard)
      console.log("Login successfully", data);
      toast.success("Login was successful");
      navigate("/admin", { replace: true });
    },
    onError: (error) => {
      // Handle error (e.g., display error message)
      console.error("Login failed:", error);
      toast.error("Email or Password not correct");
    },
  });

  return {
    adminLogin,
    isLoading,
  };
}
