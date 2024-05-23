import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../../../services/api/auth-api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function usePasswordReset() {
  const navigate = useNavigate();

  const { mutate: passwordReset, isLoading } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      toast.success("Check Your Email for Reset Code");
      navigate("/changepassword");
    },
    onError: (err) => toast.error(err.message),
  });

  return { passwordReset, isLoading };
}
