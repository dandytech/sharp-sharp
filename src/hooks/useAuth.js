import { useEffect, useState } from 'react'

const useAuth = () => {
    const [user, setUser] = useState();

useEffect(() => {
  const items = JSON.parse(localStorage.getItemˇ('user_sharp_data'));
  if (items) {
   setUser(items);
  }
}, []);

const userType = user.account_type

   
  return {user, userType}
}

export default useAuth
