import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

//import { toast } from "react-toastify";
import { toast } from "react-hot-toast";
import { loginProviderApi } from "../../../services/provider/loginProviderApi";
export default function useProvicerLogin() {
  //const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate: providerLogin, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginProviderApi({ email, password }),

    onSuccess: (user) => {
      if (user.user?.user_metadata.userType === "provider") {
        //queryClient.setQueriesData(["user"], user.user);
        toast.success("Login Successfully");
        console.log(user);

        navigate("/provider");
      } else {
        toast.error("Email or Password are incorrect");
      }
    },

    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Email or Password are incorrect");
    },
  });

  return { providerLogin, isLoading };
}
