import { useMutation } from "@tanstack/react-query";
import { verifyClient } from "../../../services/api/auth-api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useVerifyClient() {
  const navigate = useNavigate();

  const { mutate: verifyClientEmail, isLoading } = useMutation({
    mutationFn: verifyClient,
    onSuccess: () => {
      toast.success("Account successfully verified! You can now Login");
      navigate("/login");
    },
    onError: (err) => toast.error(err.message),
  });

  return { verifyClientEmail, isLoading };
}
