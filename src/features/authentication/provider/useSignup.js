import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { signupProviderApi } from "../../../services/provider/providerSignupApi";

export function useProviderSignup() {
  const { mutate: signupProvider, isLoading } = useMutation({
    mutationFn: signupProviderApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account by clicking the link sent to your email address",
      );
    },
  });

  return { signupProvider, isLoading };
}
