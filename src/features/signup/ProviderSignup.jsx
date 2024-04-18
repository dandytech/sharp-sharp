// const serviceCategories = [
//   {
//     id: 1,
//     name: "ICT",
//   },
//   {
//     id: 2,
//     name: "Dry Cleaning and Laundry",
//   },
//   {
//     id: 3,
//     name: "Cleaning",
//   },
//   {
//     id: 4,
//     name: "Clothing Alterations and Tailoring",
//   },
//   {
//     id: 5,
//     name: "Saloon, Hair Styling and Barbing",
//   },
//   {
//     id: 6,
//     name: "Makeup and Beauty",
//   },
//   {
//     id: 7,
//     name: "Massage Therapy",
//   },
//   {
//     id: 8,
//     name: "Shoe Repair and Maintenance",
//   },
//   {
//     id: 9,
//     name: "Spray Tanning",
//   },
//   {
//     id: 10,
//     name: "Others",
//   },
// ];

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaTransgender } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import { createRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "react-phone-number-input/style.css";

import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

import ReCAPTCHA from "react-google-recaptcha";
import MyButton from "../../ui/MyButton";
import useGetCategories from "../admin/useGetCategories";
import { useProviderSignup } from "../authentication/provider/useSignup";
import { useForm } from "react-hook-form";

export default function ProviderSignup() {
  const [showPassword, setShowPassword] = useState(false);

  const [showcPassword, setShowcPassword] = useState(false);
  const [phoneNo, setPhone] = useState();

  const navigate = useNavigate();

  //service categories
  const { serviceCategories, isLoadingCat } = useGetCategories();

  //password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglecPasswordVisibility = () => {
    setShowcPassword(!showcPassword);
  };

  //recapTCHA
  // const recaptchaRef = createRef();

  // const handleFormSubmit = () => {
  //   const isValid = recaptchaRef.current.getValue();
  //   if (!isValid) {
  //     alert("Please complete the reCAPTCHA challenge");
  //     return;
  //   }
  //   // Proceed with form submission
  // };

  const { signupProvider, isLoading } = useProviderSignup();

  const { register, formState, getValues, handleSubmit, reset } = useForm();

  const [userType, setUserType] = useState("provider");

  const { errors } = formState;

  function onSubmit({
    fullName,
    email,
    password,
    gender,
    busAddress,
    phone,
    serviceCategory,
    userType,
  }) {
    signupProvider(
      {
        fullName,
        email,
        password,
        gender,
        busAddress,
        phone,
        serviceCategory,
        userType,
      },
      { onSettled: reset },
    );
  }

  const spanIcon =
    "flex h-[45px] w-[10%]  items-center justify-center  border-r text-center text-[30px] text-white ";

  const div =
    "mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800 text-center text-white focus:border-white lg:mb-0 lg:w-[50%]";

  const input =
    " h-[45px] w-[90%] rounded-xl  bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white ";

  return (
    <form className=" lg:mt-0" onSubmit={handleSubmit(onSubmit)}>
      <div className="h-auto bg-[url('/src/data/bg2.jpeg')] bg-cover bg-center bg-no-repeat pt-20 ">
        <div className="m-auto justify-center  p-5 text-center  shadow-2xl md:w-[80%] lg:w-[70%] lg:pt-10">
          {" "}
          <p className="pb-10 pt-0 text-center font-semibold text-white">
            Signup As A Service Provider !
          </p>
          <p className="hidden">
            <input
              type="text"
              id="userType"
              disabled={isLoading}
              {...register("userType", {
                required: "This field is required",
              })}
              defaultValue={userType}
              className={input}
              placeholder="UserType"
            />
          </p>
          <div className="gap-10 lg:flex">
            <div className="mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800 text-center text-white focus:border-white lg:mb-0 lg:w-[50%]">
              <span className={spanIcon}>
                <FaRegUser />
              </span>
              <input
                type="text"
                id="fullName"
                disabled={isLoading}
                {...register("fullName", {
                  required: "This field is required",
                })}
                className={input}
                placeholder="Full Name"
              />
              <span className=" text-red-500">{errors?.fullName?.message}</span>
            </div>

            <div className={div}>
              <span className={spanIcon}>
                <FaTransgender />
              </span>
              <select
                className={input}
                type="text"
                id="gender"
                disabled={isLoading}
                {...register("gender", {
                  required: "This field is required",
                })}
              >
                <option value="" disabled selected>
                  Gender{" "}
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <span className=" text-red-500">{errors?.gender?.message}</span>
            </div>
          </div>
          <div className="mt-10 gap-10 lg:flex">
            <div className={div}>
              <span className={spanIcon}>
                <MdOutlineHomeRepairService />
              </span>
              <select
                className={input}
                type="text"
                id="serviceCategory"
                disabled={isLoading}
                {...register("serviceCategory", {
                  required: "This field is required",
                })}
              >
                <option value="" disabled selected>
                  SELECT CATEGORY
                </option>

                {!serviceCategories ? (
                  "Loading..."
                ) : (
                  <>
                    {serviceCategories &&
                      serviceCategories.map((serviceCategory) => (
                        <>
                          <option key={serviceCategory.id}>
                            {serviceCategory.catName}
                          </option>
                        </>
                      ))}
                  </>
                )}
                <option>Others</option>
              </select>
              <span className=" text-red-500">
                {errors?.serviceCategory?.message}
              </span>
              {/* {category == "Others" && (
                <input
                  type="text"
                  id="location"
                  name="location"
                  className=" h-[45px] rounded-xl  bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
                  placeholder="Type Your Category"
                  required
                />
              )} */}
            </div>

            <div className={div}>
              <span className={spanIcon}>
                <IoLocationOutline />
              </span>
              <input
                type="text"
                id="busAddress"
                disabled={isLoading}
                {...register("busAddress", {
                  required: "This field is required",
                })}
                className={input}
                placeholder="Business Address"
              />
              <span className=" text-red-500">
                {errors?.busAddress?.message}
              </span>
            </div>
          </div>
          <div className="mt-10 gap-10 lg:flex">
            <div className={div}>
              <span className={spanIcon}>
                <MdOutlineAttachEmail />
              </span>
              <input
                type="email"
                id="email"
                disabled={isLoading}
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please provide a valid email address",
                  },
                })}
                className={input}
                placeholder="Email"
              />
              <span className=" text-red-500">{errors?.email?.message}</span>
            </div>

            <div className={div}>
              <span className={spanIcon}>
                <IoIosPhonePortrait />
              </span>

              <span className="relative w-full">
                <PhoneInput
                  className="PhoneInputInput pl-5 font-semibold"
                  placeholder="Phone number"
                  country="NG"
                  defaultCountry="NG"
                  id="phone"
                  disabled={isLoading}
                  {...register("phone", {
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
              <span className=" text-red-500">
                {errors?.serviceCategory?.message}
              </span>
            </div>
          </div>
          <div className="mt-10 gap-10 lg:flex">
            <div className={div}>
              <span className={spanIcon}>
                <RiLockPasswordLine />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                disabled={isLoading}
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password needs a minimum of 8 characters",
                  },
                })}
                className={input}
                placeholder="Password"
              />

              <i
                onClick={togglePasswordVisibility}
                className="cursor-pointer p-5 text-[24px]"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </i>
              <span className=" text-red-500">{errors?.password?.message}</span>
            </div>

            <div className={div}>
              <span className={spanIcon}>
                <GiConfirmed />
              </span>
              <input
                type={showcPassword ? "text" : "password"}
                id="passwordConfirm"
                disabled={isLoading}
                {...register("passwordConfirm", {
                  required: "This field is required",

                  validate: (value) =>
                    value === getValues().password || "Password need to match",
                })}
                className={input}
                placeholder="Confirm Password"
              />
              <i
                onClick={togglecPasswordVisibility}
                className="cursor-pointer p-5 text-[24px]"
              >
                {showcPassword ? "👁️" : "👁️‍🗨️"}
              </i>
              <span className="text-red-500">
                {errors?.passwordConfirm?.message}
              </span>
            </div>
          </div>
          <div className="justify-between px-3 lg:mt-3 lg:flex">
            {/* <p>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LcfiYApAAAAAFMqdZWPiQyu2Vpg1CjZF0jBBGqK" // Replace with your site key
              />
            </p> */}

            <p className="mt-7 text-white lg:mt-10">
              Already Have An Account?{" "}
              <NavLink to="/login" className="font-semibold text-blue-500">
                Login
              </NavLink>
            </p>
          </div>
          <p className="py-10">
            <MyButton type="primary" disabled={isLoading}>
              Submit
            </MyButton>
          </p>
        </div>
      </div>
    </form>
  );
}
