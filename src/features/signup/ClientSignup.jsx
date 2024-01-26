import { FaRegUser } from "react-icons/fa";
import { FaTransgender } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

import "react-phone-number-input/style.css";

export default function ClientSignup() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [cpassword, setcPassword] = useState("");
  const [showcPassword, setShowcPassword] = useState(false);
  const [phone, setPhone] = useState();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglecPasswordVisibility = () => {
    setShowcPassword(!showcPassword);
  };
  return (
    <div className="h-auto  bg-[url('/src/data/bg2.jpeg')] bg-cover bg-center bg-no-repeat ">

    <form className=" lg:mt-0">
      <div className="m-auto justify-center  p-5 text-center  shadow-2xl md:w-[80%] lg:w-[70%] lg:pt-10">
        {" "}
        <p className="pb-10 pt-0 text-center font-semibold text-white">
          Signup As A Client !
        </p>
        <div className="gap-10 lg:flex">
          <div className="mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800 text-center text-white focus:border-white lg:mb-0 lg:w-[50%]">
            <span className=" flex h-[45px] w-[10%]  items-center justify-center  border-r text-center text-[30px] text-white  ">
              <FaRegUser />
            </span>
            <input
              type="text"
              id="name"
              name="name"
              required
              className=" h-[45px] w-[90%] rounded-xl bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
              placeholder="Full Name"
            />
          </div>
          <div className="mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800  text-center focus:border-white lg:mb-0 lg:w-[50%]">
            <span className=" flex h-[45px]  w-[10%] items-center  justify-center border-r  text-center text-[30px] text-white ">
              <FaTransgender />
            </span>
            <select
              className=" h-[45px] w-[90%] rounded-xl bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
              id="gender"
              name="gender"
              label="gender"
              required
            >
              <option>Gender </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
        <div className="mt-10 gap-10 lg:flex">
          <div className="mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800 text-center text-white focus:border-white lg:mb-0 lg:w-[50%]">
            <span className=" flex h-[45px] w-[10%]  items-center justify-center  border-r text-center text-[30px] text-white  ">
              <MdOutlineAttachEmail />
            </span>
            <input
              type="email"
              id="email"
              name="email"
              className=" h-[45px] w-[90%] rounded-xl bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800 text-center text-white focus:border-white lg:mb-0 lg:w-[50%]">
            <span className=" flex h-[45px] w-[10%]  items-center justify-center  border-r text-center text-[30px] text-white  ">
              <IoIosPhonePortrait />
            </span>
            <PhoneInput
              className="PhoneInputInput pl-5 font-semibold"
              placeholder="Phone number"
              country="NG"
              defaultCountry="NG"
              value={phone}
              onChange={setPhone}
              international={true}
            />
          </div>
        </div>
        <div className="mt-10 gap-10 lg:flex">
          <div className="mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800 text-center text-white focus:border-white lg:mb-0 lg:w-[50%]">
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

          <div className="mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800 text-center text-white focus:border-white lg:mb-0 lg:w-[50%]">
            <span className=" flex h-[45px] w-[10%]  items-center justify-center  border-r text-center text-[30px] text-white  ">
              <GiConfirmed />
            </span>
            <input
              type={showcPassword ? "text" : "password"}
              value={cpassword}
              onChange={(e) => setcPassword(e.target.value)}
              id="confirm-password"
              name="confirm-password"
              className=" h-[45px] w-[90%] bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
              placeholder="Confirm Password"
              required
            />
            <i
              onClick={togglecPasswordVisibility}
              className="cursor-pointer p-5 text-[24px]"
            >
              {showcPassword ? "👁️" : "👁️‍🗨️"}
            </i>
          </div>
        </div>
        <p className="lg:mt-10 text-white">
          Already Have An Account?{" "}
          <NavLink to="/login" className="font-semibold text-blue-500">
            Login
          </NavLink>
        </p>
        <button className="my-20 rounded-full border-2 bg-blue-500 px-7 py-3 text-white hover:bg-black  ">
          Submit
        </button>
      </div>
    </form>
    </div>
  );
}
