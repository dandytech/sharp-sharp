import { useMutation } from "@tanstack/react-query";
import { loginClient } from "../../../services/api/auth-api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useClientLogin() {
  const navigate = useNavigate();

  const { mutate: login_Client, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginClient({ email, password }),

    onSuccess: (data) => {
      // Store the token in local storage
      // localStorage.setItem("authToken", data.token);

      localStorage.setItem("client_token", data.token);

      localStorage.setItem("user_sharp_data", JSON.stringify(data.message));

      // Handle other success actions (e.g., navigate to dashboard)
      if (data.message.account_type === "Client") {
        console.log("Login successfully", data);
        toast.success("Login was successful");
        navigate("/client", { replace: true });
      } else if (data.message.account_type === "Service Provider") {
        console.log("Login successfully", data);
        toast.success("Login was successful");

        navigate("/provider", { replace: true });
      } else {
        toast.error("Account Doesn't exist");
      }
    },
    onError: (error) => {
      // Handle error (e.g., display error message)
      console.error("Login failed:", error.response.message);
      toast.error("Login failed:", error.response.message);
    },
  });

  return {
    login_Client,
    isLoading,
  };
}
