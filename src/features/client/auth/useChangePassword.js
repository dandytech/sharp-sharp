import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { changePassword } from "../../../services/api/auth-api";

export function useChangePassword() {
  const navigate = useNavigate();

  const { mutate: resetPassword, isLoading } = useMutation({
    mutationFn: changePassword,
    onSuccess: () => {
      toast.success("Password Changed Successfully");
      navigate("/login");
    },
    onError: (err) => toast.error(err.message),
  });

  return { resetPassword, isLoading };
}
