import { useEffect, useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user_sharp_data"));
    if (items) {
      setUser(items);
    }
  }, []);

  const userType = user ? user.account_type : null;

  return { user, userType };
};

export default useAuth;
