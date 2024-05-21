import { useMutation } from "@tanstack/react-query";
import { verifyClientResend } from "../../../services/api/auth-api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useResendVerifyClient() {
  const navigate = useNavigate();

  const { mutate: resendClientCode, isLoading } = useMutation({
    mutationFn: verifyClientResend,
    onSuccess: () => {
      toast.success("Code successfully resent! Check your email");
      navigate("/verifyemail");
    },
    onError: (err) => toast.error(err.message),
  });

  return { resendClientCode, isLoading };
}
