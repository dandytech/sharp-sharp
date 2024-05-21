import { FaRegUser } from "react-icons/fa";
import { FaTransgender } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "react-phone-number-input";
import MyButton from "../../ui/MyButton";

import { useForm } from "react-hook-form";
import { useClientRegister } from "../client/auth/useClientRegister";

export default function ClientSignup() {
  //const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //const [cpassword, setcPassword] = useState("");
  const [showcPassword, setShowcPassword] = useState(false);
  const [phoneNo, setPhone] = useState();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglecPasswordVisibility = () => {
    setShowcPassword(!showcPassword);
  };

  //const navigate = useNavigate();

  const { signupClient, isLoading } = useClientRegister();

  const { register, formState, getValues, handleSubmit, reset } = useForm();

  //const [userType, setUserType] = useState("provider");

  const { errors } = formState;

  function onSubmit({ name, email, phone_number, gender, password }) {
    signupClient(
      {
        name,
        email,
        phone_number,
        gender,
        password,
      },
      { onSettled: reset() },
    );
  }

  const divStyle =
    "mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800 text-center text-white focus:border-white lg:mb-0 lg:w-[50%]";

  const spanStyle =
    "flex h-[45px] w-[10%]  items-center justify-center  border-r text-center text-[30px] text-white ";

  const inputStle =
    " h-[45px] w-[90%] rounded-xl bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white";

  return (
    <form className=" lg:mt-0" onSubmit={handleSubmit(onSubmit)}>
      <div className="h-auto bg-[url('/src/data/bg2.jpeg')] bg-cover bg-center bg-no-repeat pt-20">
        <div className=" lg:mt-0">
          <div className="m-auto justify-center  p-5 text-center  shadow-2xl md:w-[80%] lg:w-[70%] lg:pt-10">
            {" "}
            <p className="pb-10 pt-0 text-center font-semibold text-white">
              Signup As A Client !
            </p>
            <div className="gap-10 lg:flex">
              <div className={divStyle}>
                <span className={spanStyle}>
                  <FaRegUser />
                </span>

                <input
                  type="text"
                  id="name"
                  defaultValue=""
                  disabled={isLoading}
                  {...register("name", {
                    required: "This field is required",
                  })}
                  className={inputStle}
                  placeholder="Full Name"
                />
                <span className=" text-red-500">{errors?.name?.message}</span>
              </div>
              <div className={divStyle}>
                <span className={spanStyle}>
                  <FaTransgender />
                </span>
                <select
                  className={inputStle}
                  type="text"
                  id="gender"
                  defaultValue="Male"
                  disabled={isLoading}
                  {...register("gender", {
                    required: "This field is required",
                  })}
                >
                  <option>Gender </option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <span className=" text-red-500">{errors?.gender?.message}</span>
              </div>
            </div>
            <div className="mt-10 gap-10 lg:flex">
              <div className={divStyle}>
                <span className={spanStyle}>
                  <MdOutlineAttachEmail />
                </span>
                <input
                  type="email"
                  id="email"
                  defaultValue=""
                  disabled={isLoading}
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please provide a valid email address",
                    },
                  })}
                  className={inputStle}
                  placeholder="Email"
                />
                <span className=" text-red-500">{errors?.email?.message}</span>
              </div>

              <div className={divStyle}>
                <span className={spanStyle}>
                  <IoIosPhonePortrait />
                </span>

                <span className="relative w-full">
                  <PhoneInput
                    className="PhoneInputInput pl-5 font-semibold"
                    placeholder="Phone number"
                    country="NG"
                    defaultCountry="NG"
                    id="phone_number"
                    defaultValue=""
                    disabled={isLoading}
                    {...register("phone_number", {
                      required: "This field is required",
                    })}
                    onChange={setPhone}
                    international={true}
                    error={
                      phoneNo
                        ? isValidPhoneNumber(phoneNo)
                          ? undefined
                          : "Invalid phone number"
                        : "Phone number required"
                    }
                  />

                  <p
                    className={`absolute right-0 text-red-500 ${
                      phoneNo ? "block" : "hidden"
                    }`}
                  >
                    {phoneNo && isValidPhoneNumber(phoneNo)
                      ? ""
                      : "invalid phone"}
                  </p>
                </span>
              </div>
            </div>
            <div className="mt-10 gap-10 lg:flex">
              <div className={divStyle}>
                <span className={spanStyle}>
                  <RiLockPasswordLine />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  defaultValue=""
                  disabled={isLoading}
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 8,
                      message: "Password needs a minimum of 8 characters",
                    },
                  })}
                  className={inputStle}
                  placeholder="Password"
                />
                <span className=" text-red-500">
                  {errors?.password?.message}
                </span>
                <i
                  onClick={togglePasswordVisibility}
                  className="cursor-pointer p-5 text-[24px]"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </i>
              </div>
              <div className={divStyle}>
                <span className={spanStyle}>
                  <GiConfirmed />
                </span>
                <input
                  type={showcPassword ? "text" : "password"}
                  id="passwordConfirm"
                  defaultValue=""
                  disabled={isLoading}
                  {...register("passwordConfirm", {
                    required: "This field is required",

                    validate: (value) =>
                      value === getValues().password ||
                      "Password need to match",
                  })}
                  className={inputStle}
                  placeholder="Confirm Password"
                />
                <span className=" text-red-500">
                  {errors?.passwordConfirm?.message}
                </span>
                <i
                  onClick={togglecPasswordVisibility}
                  className="cursor-pointer p-5 text-[24px]"
                >
                  {showcPassword ? "👁️" : "👁️‍🗨️"}
                </i>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white lg:mt-10">
              Already Have An Account?{" "}
              <NavLink to="/login" className="font-semibold text-blue-500">
                Login
              </NavLink>
            </p>
            <p className="py-10">
              <MyButton type="primary">Submit</MyButton>

              {/* onClick={() => navigate("/verifyemail")} */}
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
