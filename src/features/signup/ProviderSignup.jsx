const serviceCategories = [
  {
    id: 1,
    name: "ICT",
  },
  {
    id: 2,
    name: "Dry Cleaning and Laundry",
  },
  {
    id: 3,
    name: "Cleaning",
  },
  {
    id: 4,
    name: "Clothing Alterations and Tailoring",
  },
  {
    id: 5,
    name: "Saloon, Hair Styling and Barbing",
  },
  {
    id: 6,
    name: "Makeup and Beauty",
  },
  {
    id: 7,
    name: "Massage Therapy",
  },
  {
    id: 8,
    name: "Shoe Repair and Maintenance",
  },
  {
    id: 9,
    name: "Spray Tanning",
  },
  {
    id: 10,
    name: "Others",
  },
];

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaTransgender } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import "react-phone-number-input/style.css";

import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import ReCAPTCHA from "react-google-recaptcha";

export default function ProviderSignup() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [cpassword, setcPassword] = useState("");
  const [showcPassword, setShowcPassword] = useState(false);
  const [phone, setPhone] = useState();
  const [category, setCategory] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglecPasswordVisibility = () => {
    setShowcPassword(!showcPassword);
  };

  const onChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  };
  const onSubmit = () => {
    // Validate captchaValue on form submission
    if (!captchaValue) {
      alert("Please complete the reCAPTCHA challenge.");
      return;
    }
  };

  return (
    <div className="h-auto bg-[url('/src/data/bg2.jpeg')] bg-cover bg-center bg-no-repeat pt-20 ">
      <form className=" lg:mt-0" onSubmit={onSubmit}>
        <div className="m-auto justify-center  p-5 text-center  shadow-2xl md:w-[80%] lg:w-[70%] lg:pt-10">
          {" "}
          <p className="pb-10 pt-0 text-center font-semibold text-white">
            Signup As A Service Provider !
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
                className=" h-[45px] w-[90%] rounded-xl  bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
                placeholder="Full Name"
              />
            </div>
            <div className="mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800  text-center focus:border-white lg:mb-0 lg:w-[50%]">
              <span className=" flex h-[45px]  w-[10%] items-center  justify-center border-r  text-center text-[30px] text-white ">
                <FaTransgender />
              </span>
              <select
                className=" h-[45px] w-[90%] rounded-xl  bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
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
            <div className="mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800  text-center focus:border-white lg:mb-0 lg:w-[50%]">
              <span className=" flex h-[45px]  w-[10%] items-center  justify-center border-r  text-center text-[30px] text-white ">
                <MdOutlineHomeRepairService />
              </span>
              <select
                className=" h-[45px] w-[90%] rounded-xl  bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
                id="service"
                name="service"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>SELECT CATEGORY</option>
                {serviceCategories.map((serviceCategory) => (
                  <>
                    <option key={serviceCategory.id}>
                      {serviceCategory.name}
                    </option>
                  </>
                ))}
              </select>

              {category == "Others" && (
                <input
                  type="text"
                  id="location"
                  name="location"
                  className=" h-[45px] rounded-xl  bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
                  placeholder="Type Your Category"
                  required
                />
              )}
            </div>

            <div className="mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800 text-center text-white focus:border-white lg:mb-0 lg:w-[50%]">
              <span className=" flex h-[45px] w-[10%]  items-center justify-center  border-r text-center text-[30px] text-white  ">
                <IoLocationOutline />
              </span>
              <input
                type="text"
                id="location"
                name="location"
                className=" h-[45px] w-[90%] rounded-xl  bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
                placeholder="Business Address"
                required
              />
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
                className=" h-[45px] w-[90%] rounded-xl  bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800 text-center text-white focus:border-white lg:mb-0 lg:w-[50%]">
              <span className=" flex h-[45px] w-[10%]  items-center justify-center  border-r text-center text-[30px] text-white  ">
                <IoIosPhonePortrait />
              </span>
              <span className="relative w-full">
                <PhoneInput
                  className="PhoneInputInput pl-5 font-semibold"
                  placeholder="Phone number"
                  country="NG"
                  defaultCountry="NG"
                  value={phone}
                  onChange={setPhone}
                  international={true}
                  error={
                    phone
                      ? isValidPhoneNumber(phone)
                        ? undefined
                        : "Invalid phone number"
                      : "Phone number required"
                  }
                />

                <p
                  className={`absolute right-0 text-red-500 ${
                    phone ? "block" : "hidden"
                  }`}
                >
                  {phone && isValidPhoneNumber(phone) ? "" : "invalid phone"}
                </p>
              </span>
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
                className=" h-[45px] w-[90%] rounded-xl  bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
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
          <div className="justify-between lg:mt-3 px-3 lg:flex">
            <p>
              {" "}
              <ReCAPTCHA
                sitekey="6LcH_HYpAAAAAIe-pp3S2pPQd1yL-_qgKnk8Qj6f"
                onChange={onChange}
              />
            </p>

            <p className="mt-7 text-white lg:mt-10">
              Already Have An Account?{" "}
              <NavLink to="/login" className="font-semibold text-blue-500">
                Login
              </NavLink>
            </p>
          </div>
          <button
            type="submit"
            className="my-20 rounded-full border-2 bg-blue-500 px-7 py-3 text-white hover:bg-black  "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
