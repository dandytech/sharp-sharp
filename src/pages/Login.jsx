import { useState } from "react";
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Modal from "../ui/Modal";

export default function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Modal>
      <div className="h-auto  bg-[url('/src/data/bg2.jpeg')] bg-cover bg-center bg-no-repeat pt-[100px]  lg:p-10 lg:py-0 lg:pt-0 ">
        <form>
          <div className="m-auto justify-center p-5 lg:p-10 pt-[10px] text-center  shadow-2xl md:w-[80%] lg:w-[70%] lg:pt-20">
            {" "}
           
            <div className="m-auto h-auto w-[100%] rounded-2xl border-2 border-white px-3 pt-20  text-center lg:w-[50%] lg:px-10">
            <p className="pb-5  text-center font-semibold text-white">
              Enter The Required Details!
            </p>
              <div className="m-auto mb-10 flex h-[50px]  items-center rounded-2xl border-2 border-white bg-gray-800 text-center text-white focus:border-white lg:mb-10 lg:w-[100%]">
                <span className=" flex h-[45px] w-[10%]  items-center justify-center  border-r text-center text-[30px] text-white  ">
                  <MdOutlineAttachEmail />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className=" h-[45px] w-[100%] rounded-xl bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white lg:w-[90%] "
                  placeholder="Email"
                  required
                />
              </div>

              <div className="m-auto mb-1 flex h-[50px] items-center rounded-xl border-2 border-white bg-gray-800 text-center text-white focus:border-white lg:mb-0 lg:w-[100%]">
                <span className=" flex h-[45px] w-[10%]  items-center justify-center  border-r text-center text-[30px] text-white  ">
                  <RiLockPasswordLine />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  className=" h-[45px] w-[100%] bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white lg:w-[90%] "
                  placeholder="Password"
                  required
                />
                <i
                  onClick={togglePasswordVisibility}
                  className="cursor-pointer p-2 text-[24px]"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </i>
              </div>

              <Modal.Open opens="forgotpassword">
                <p className="mb-5 mt-3 flex justify-end font-semibold text-blue-500 cursor-pointer">
                  Forgot Password?
                </p>
              </Modal.Open>

              <p className="lg:mt-10">
                <span className="text-white">Don't Have An Account?</span>{" "}
                <NavLink to="/signup" className="font-semibold text-blue-500">
                  Signup
                </NavLink>
              </p>
              <NavLink to="/provider">
                <button className="my-20 rounded-full border-2 bg-blue-500 px-7 py-2 text-white hover:bg-black  ">
                  Login
                </button>
              </NavLink>
            </div>
          </div>
        </form>

        <Modal.Window name="forgotpassword">
          <form className="w-[300px] p-10"> 
            <p className="font-semibold">FORGOT PASSWORD?</p>
            <p className="py-7">
              <input className="border-2 w-full border-gray-200 px-3 py-1 rounded-lg"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your  Email"
              />
            </p>
            <button className="rounded-full bg-blue-500 px-5 py-2 text-white hover:bg-black">
              Submit
            </button>
          </form>
        </Modal.Window>
      </div>
    </Modal>
  );
}
