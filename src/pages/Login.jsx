import { useState } from "react";
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "../ui/Modal";
import MyButton from "../ui/MyButton";
import useProvicerLogin from "../features/authentication/provider/useLoginProviderApi";
import SpinnerMini from "../ui/SpinnerMini";

import { useClientLogin } from "../features/client/auth/useClientLogin";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //const { providerLogin, isLoading } = useProvicerLogin();

  const { login_Client, isLoading } = useClientLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) return;

    const payload = { email, password };
    login_Client(payload);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  return (
    <Modal>
      <div className="h-auto  bg-[url('/src/data/bg2.jpeg')] bg-cover bg-center bg-no-repeat pt-[100px]  lg:p-10 lg:py-0 lg:pt-0 ">
        <form onSubmit={handleSubmit}>
          <div className="m-auto justify-center p-5 pt-[10px] text-center shadow-2xl  md:w-[80%] lg:w-[70%] lg:p-10 lg:pt-20">
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
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  autoComplete="current-password"
                  disabled={isLoading}
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
                <p className="mb-5 mt-3 flex cursor-pointer justify-end font-semibold text-blue-500">
                  Forgot Password?
                </p>
              </Modal.Open>

              <p className="lg:mt-10">
                <span className="text-white">Don't Have An Account?</span>{" "}
                <NavLink to="/signup" className="font-semibold text-blue-500">
                  Signup
                </NavLink>
              </p>

              <p className="py-10 text-center">
                <MyButton type="primary" disabled={isLoading}>
                  {!isLoading ? "Login" : <SpinnerMini />}
                </MyButton>
              </p>
            </div>
          </div>
        </form>

        <Modal.Window name="forgotpassword">
          <div className="w-[290px] p-10 md:w-[400px] lg:w-[500px]">
            <p className="text-center font-semibold">FORGOT PASSWORD?</p>
            <p className="py-7 text-center">
              <input
                className="w-full rounded-lg border-2 border-gray-200 px-3 py-1"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your  Email"
              />
            </p>
            <p className="text-center">
              <MyButton
                type="primary"
                onClick={() => navigate("/forgotpassword")}
              >
                Submit
              </MyButton>
            </p>
          </div>
        </Modal.Window>
      </div>
    </Modal>
  );
}
