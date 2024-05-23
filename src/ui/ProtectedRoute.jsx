import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
//import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //const { user, userType } = useAuth();

  const isLoggedIn = window.localStorage.getItem("client_token");

  // //1. Load the authenticated user
  // const { isAuthenticated, isLoading, user } = useGetProvider();

  // console.log(user);
  // //console.log(user?.user_metadata?.userType);

  // //2. if there is NO authenticated user, redirect to the /login
  // useEffect(
  //   function () {
  //     if (!isAuthenticated && !isLoading) navigate("/login");
  //     if (user?.user_metadata?.userType === "admin") navigate("/admin/dashboard");
  //   },
  //   [isAuthenticated, isLoading, navigate, user],
  // );

  // //3. while loading, show spinner
  // if (isLoading)
  //   return (
  //     <FullPage>
  //       <SpinnerMini />
  //     </FullPage>
  //   );

  //4. if there is a user, render the app
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);
  if (!isLoggedIn) {
    return;
  }
  //if (isAuthenticated) return children;
  if (isLoggedIn) return children;
}
