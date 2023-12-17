import { useState } from "react";
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-[80vh]  bg-[url('/src/data/bg9.jpeg')] bg-cover bg-center bg-no-repeat p-10  pt-[100px] lg:py-0 lg:pt-0 ">
      <form>
        <div className="m-auto justify-center p-10 pt-[10px] text-center  shadow-2xl md:w-[80%] lg:w-[70%] lg:pt-20">
          {" "}
          <p className="pb-5 pt-10 text-center font-semibold text-white">
            Enter The Required Details!
          </p>
          <div className="m-auto  h-auto rounded-2xl border-2 border-white px-10  pt-20 text-center lg:w-[50%]">
            <div className="m-auto mb-10 flex h-[50px]  items-center rounded-2xl border-2 border-white bg-gray-800 text-center text-white focus:border-white lg:mb-10 lg:w-[100%]">
              <span className=" flex h-[45px] w-[10%]  items-center justify-center  border-r text-center text-[30px] text-white  ">
                <MdOutlineAttachEmail />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                className=" h-[45px] w-[90%] bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
                placeholder="Email"
                required
              />
            </div>
            <div className="m-auto mb-10 flex h-[50px] items-center rounded-xl border-2 border-white bg-gray-800 text-center text-white focus:border-white lg:mb-0 lg:w-[100%]">
              <span className=" flex h-[45px] w-[10%]  items-center justify-center  border-r text-center text-[30px] text-white  ">
                <RiLockPasswordLine />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                className=" h-[45px] w-[90%] bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
                placeholder="Password"
                required
              />
              <i
                onClick={togglePasswordVisibility}
                className="cursor-pointer p-5 text-[24px]"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </i>
            </div>
            <p className="lg:mt-10">
              <span className="text-white">Don't Have An Account?</span>{" "}
              <NavLink to="/signup" className="font-semibold text-blue-500">
                Signup
              </NavLink>
            </p>
            <button className="my-20 rounded-full border-2 bg-blue-500 px-7 py-3 text-white hover:bg-black  ">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
