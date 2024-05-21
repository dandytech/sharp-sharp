import logo from "../../src/data/logo.png";

import { MdOutlineMailOutline } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { useState } from "react";

import { NavLink } from "react-router-dom";
import useAdminLogin from "../features/authentication/admin/useLogin";
import SpinnerMini from "../ui/SpinnerMini";
import { ToastContainer } from "react-toastify";
import { useLoginAdmin } from "../features/admin/auth/useLoginAdmin";

export default function adminLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //const { adminLogin, isLoading } = useAdminLogin();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!email || !password) return;

  //   adminLogin(
  //     { email, password },
  //     {
  //       onSettled: () => {
  //         setEmail("");
  //         setPassword("");
  //       },
  //     },
  //   );
  // };

  const { adminLogin, isLoading } = useLoginAdmin();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) return;

    const payload = { email, password };
    adminLogin(payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" m-auto flex h-screen w-full flex-col items-center justify-center space-y-4 bg-[url('/src/data/bg2.jpeg')] bg-cover bg-center bg-no-repeat ">
        <div className="m-auto bg-white p-10 text-lg shadow-lg lg:w-[35%] lg:p-10">
          <div className="flex justify-center">
            <NavLink to="/">
              <img src={logo} alt="logo" width="100" />
            </NavLink>
          </div>
          <div className="flex flex-col gap-5">
            <p>Admin Login</p>
            <p>Fill In Your Credentials To Login To your Dashboard</p>
            <div>
              <label>Email</label>
              <div className="flex h-10 items-center justify-between border-2">
                <span className="px-2 py-1 text-2xl">
                  <MdOutlineMailOutline />
                </span>
                <span className="w-full border-l-2 border-r-2">
                  <input
                    type="email"
                    id="email"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    disabled={isLoading}
                    className="w-full bg-gray-800 px-2 py-1 text-white"
                  />
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                {" "}
                <label>Password</label>
              </div>
              <div className="flex h-10 items-center justify-between border-2">
                <span className="px-2 py-1 text-2xl">
                  <TbPasswordUser />
                </span>
                <span className="w-full border-l-2 border-r-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your Password"
                    disabled={isLoading}
                    className="w-full bg-gray-800 px-2 py-1 text-white"
                  />
                </span>
                <span>
                  <i
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer p-2 text-[24px]"
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </i>
                </span>
              </div>
            </div>
            <div className="mt-10 bg-blue-500 py-1 text-center text-xl font-bold text-white">
              <button className="cursor-pointer" disabled={isLoading}>
                {" "}
                {!isLoading ? "Login" : <SpinnerMini />}
              </button>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </form>
  );
}
