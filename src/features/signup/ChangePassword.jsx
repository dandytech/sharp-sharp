import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import MyButton from "../../ui/MyButton";
import { useState } from "react";
import { useChangePassword } from "../client/auth/useChangePassword";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import { PiFootprintsThin } from "react-icons/pi";

export default function ChangePassword() {
  //const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //const [cpassword, setcPassword] = useState("");
  const [showcPassword, setShowcPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglecPasswordVisibility = () => {
    setShowcPassword(!showcPassword);
  };

  const navigate = useNavigate();

  const { resetPassword, isLoading } = useChangePassword();

  const { register, formState, getValues, handleSubmit, reset } = useForm();

  const { errors } = formState;

  function onSubmit({ code, password, password_confirmation }) {
    resetPassword(
      { code, password, password_confirmation },
      { onSettled: reset() },
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-auto mt-[10px] flex h-[100vh]  w-auto flex-col  items-center border-2 p-10 text-center shadow-md md:w-[60%] lg:w-[50%]">
        <p className="mb-10 text-lg font-bold">Forgot Password ?</p>
        <p>
          Provide The <span className="text-red-500">Reuired</span> Details
        </p>

        <div className="mb-5 w-[100%] border border-gray-300 bg-white px-1">
          <div className="flex items-center">
            <span className="text-[24px]">
              <PiFootprintsThin />
            </span>
            <input
              className="w-[100%] rounded border border-gray-100 p-2 hover:border-blue-500"
              type={showPassword ? "text" : "password"}
              id="code"
              defaultValue=""
              disabled={isLoading}
              {...register("code", {
                required: "This field is required",
                minLength: {
                  value: 4,
                  message: "Code needs a minimum of 4 characters",
                },
              })}
              placeholder="Enter the code"
            />

            <i
              onClick={togglePasswordVisibility}
              className="cursor-pointer text-[24px]"
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </i>
          </div>
          <p>
            {" "}
            <span className=" text-red-500">{errors?.password?.message}</span>
          </p>
        </div>

        <div className="mb-5 w-[100%] border border-gray-300 bg-white px-1">
          <div className="flex items-center">
            <span className="text-[24px]">
              <RiLockPasswordLine />
            </span>
            <input
              className="w-[100%] rounded border border-gray-100 p-2 hover:border-blue-500"
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
              placeholder="Enter New Password"
            />

            <i
              onClick={togglePasswordVisibility}
              className="cursor-pointer text-[24px]"
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </i>
          </div>
          <p>
            {" "}
            <span className=" text-red-500">{errors?.password?.message}</span>
          </p>
        </div>

        <div className="mb-5 w-[100%] border border-gray-300 bg-white px-1">
          <div className="flex items-center">
            <span className="text-[24px]">
              <GiConfirmed />
            </span>{" "}
            <input
              className="w-[100%] rounded border border-gray-100 p-2 hover:border-blue-500"
              type={showcPassword ? "text" : "password"}
              id="passwordConfirm"
              defaultValue=""
              disabled={isLoading}
              {...register("passwordConfirm", {
                required: "This field is required",

                validate: (value) =>
                  value === getValues().password || "Password need to match",
              })}
              placeholder="Confirm Password"
            />
            <i
              onClick={togglecPasswordVisibility}
              className="cursor-pointer text-[24px]"
            >
              {showcPassword ? "👁️" : "👁️‍🗨️"}
            </i>
          </div>
          <p>
            {" "}
            <span className=" text-red-500">
              {errors?.passwordConfirm?.message}
            </span>
          </p>
        </div>

        <p className="py-5 font-light">
          Already Remembered Password?{" "}
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer text-blue-500 "
          >
            Login
          </span>
        </p>
        <p className="py-10">
          <MyButton type="primary">Submit</MyButton>
        </p>
      </div>
    </form>
  );
}
