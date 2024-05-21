import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { registerClient } from "../../../services/api/auth-api";

export function useClientRegister() {
  const navigate = useNavigate();

  const { mutate: signupClient, isLoading } = useMutation({
    mutationFn: registerClient,
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

  return { signupClient, isLoading };
}
