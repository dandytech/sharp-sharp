import logo from "../../../../src/data/logo.png";
import { useNavigate } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { NavLink } from "react-router-dom";

export default function adminLogin() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const notify = () => toast("Login Successfull");

    if (!email || !password) {
      alert("Enter Login Details");
    } else if (email !== "dannkwo@gmail.com" || password !== "Dandytech@2022") {
      alert("Incorrect Credentials");
    } else {
      notify;
      navigate("/admin");
    }
  };

  return (
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full bg-gray-800 px-2 py-1 text-white"
                />
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              {" "}
              <label>Password</label>
              <label>Forgot Password?</label>
            </div>
            <div className="flex h-10 items-center justify-between border-2">
              <span className="px-2 py-1 text-2xl">
                <TbPasswordUser />
              </span>
              <span className="w-full border-l-2 border-r-2">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your Password"
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
            <button onClick={handleLogin} className="cursor-pointer">
              Login
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
