import { useForm } from "react-hook-form";
import MyButton from "../../ui/MyButton";

import { usePasswordReset } from "../client/auth/usePasswordReset";
import { useNavigate } from "react-router";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const { passwordReset, isLoading } = usePasswordReset();

  const { register, formState, getValues, handleSubmit, reset } = useForm();

  const { errors } = formState;

  function onSubmit({ email }) {
    passwordReset(
      {
        email,
      },
      { onSettled: reset() },
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-auto mt-[10px] flex h-[100vh]  w-auto flex-col  items-center border-2 p-10 text-center shadow-md md:w-[60%] lg:w-[50%]">
        <p className="mb-10 text-lg font-bold">Forgot Password ?</p>
        <p>
          Provide Your <span className="text-blue-500">Registered</span> Email
        </p>

        <div className="w-[100%]">
          <input
            type="email"
            id="email"
            defaultValue=""
            disabled={isLoading}
            {...register("email", {
              required: "This field is required",
            })}
            className="w-[100%] rounded-xl border-2 border-gray-300 p-2 hover:border-blue-500"
            placeholder="Enter Your Registered Email"
          />
          <span className=" text-red-500">{errors?.email?.message}</span>
        </div>

        <p className="py-5 font-light">
          I have Remembered it?{" "}
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
