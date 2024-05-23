import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { usePasswordCheckCode } from "../client/auth/usePasswordCodeCheck";
import MyButton from "../../ui/MyButton";

export default function VerifyForgotPassword() {
  const navigate = useNavigate();

  const { checkCode, isLoading } = usePasswordCheckCode();

  const { register, formState, getValues, handleSubmit, reset } = useForm();

  const { errors } = formState;

  function onSubmit({ code }) {
    checkCode(
      {
        code,
      },
      { onSettled: reset() },
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-auto mt-[10px] flex h-[100vh]  w-auto flex-col  items-center border-2 p-10 text-center shadow-md md:w-[60%] lg:w-[50%]">
        <p className="mb-10 text-lg font-bold">Change Password Password?</p>
        <p>Provide the Code sent to your email</p>

        <div className="w-[100%]">
          <input
            type="text"
            id="code"
            defaultValue=""
            disabled={isLoading}
            {...register("code", {
              required: "This field is required",
            })}
            className="w-[100%] rounded-xl border-2 border-gray-300 p-2 hover:border-blue-500"
            placeholder="Enter OTP"
          />
          <span className=" text-red-500">{errors?.code?.message}</span>
        </div>

        <p className="py-5 font-light">
          Didn't receive any Code?{" "}
          <span
            onClick={() => navigate("/forgotpassword")}
            className="cursor-pointer text-blue-500 "
          >
            Resend
          </span>
        </p>
        <p className="py-10">
          <MyButton type="primary">Submit</MyButton>
        </p>
      </div>
    </form>
  );
}
