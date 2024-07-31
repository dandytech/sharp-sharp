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

  const updateImage = (url) => {
    const payload = {
      ...user,
      photo: url
    }
    localStorage.setItem('user_sharp_data', JSON.stringify(payload))
  }

  return { user, userType, updateImage };
};

export default useAuth;
