import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { registerProvider } from "../../../services/api/auth-api";

export function useProviderRegister() {
  const navigate = useNavigate();

  const { mutate: signupProvider, isLoading } = useMutation({
    mutationFn: registerProvider,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account",
      );
      navigate("/verifyemail");
    },
    onError: (err) => {
      toast.error(
        err.response?.data?.message || err.message || "Registration failed",
      );
    },
  });

  return { signupProvider, isLoading };
}
