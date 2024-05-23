import { useMutation } from "@tanstack/react-query";
import { checkPasswordCode } from "../../../services/api/auth-api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function usePasswordCheckCode() {
  const navigate = useNavigate();

  const { mutate: checkCode, isLoading } = useMutation({
    mutationFn: checkPasswordCode,
    onSuccess: () => {
      toast.success("Code is Correct, proceed to Change Password");
      navigate("/changepassword");
    },
    onError: (err) => toast.error(err.message),
  });

  return { checkCode, isLoading };
}
