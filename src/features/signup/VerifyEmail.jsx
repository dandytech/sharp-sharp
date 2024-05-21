import { useForm } from "react-hook-form";
import MyButton from "../../ui/MyButton";

import { useNavigate } from "react-router";
import { useVerifyClient } from "../client/auth/useVerifyClient";

export default function VerifyEmail() {
  const navigate = useNavigate();

  const { verifyClientEmail, isLoading } = useVerifyClient();

  const { register, formState, getValues, handleSubmit, reset } = useForm();

  const { errors } = formState;

  function onSubmit({ code }) {
    verifyClientEmail(
      {
        code,
      },
      { onSettled: reset() },
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-auto mt-[10px] flex h-[100vh]  w-auto flex-col  items-center border-2 p-10 text-center shadow-md md:w-[60%] lg:w-[50%]">
        <p className="mb-10 text-lg font-bold">Email Verification !</p>
        <p>Provide the Code sent to your email</p>
        {/* <p className="mt-5 flex w-[100%] items-center justify-between gap-5 md:w-[70%] lg:w-[35%]">
          <div className="w-[100%]">
            <input
              type="text"
              id="v1"
              value={v1}
              onChange={(e) => setV1(e.target.value)}
              className="w-[100%] rounded-xl border-2 border-gray-300 p-2 hover:border-blue-500"
            />
          </div>{" "}
          <div className="w-[100%]">
            <input
              type="text"
              id="v2"
              value={v2}
              onChange={(e) => setV2(e.target.value)}
              className="w-[100%] rounded-xl border-2 border-gray-300 p-2 hover:border-blue-500"
            />
          </div>{" "}
          <div className="w-[100%]">
            <input
              id="v3"
              value={v3}
              onChange={(e) => setV3(e.target.value)}
              className="w-[100%] rounded-xl border-2 border-gray-300 p-2 hover:border-blue-500"
            />
          </div>{" "}
          <div className="w-[100%]">
            <input
              type="text"
              id="v4"
              value={v4}
              onChange={(e) => setV4(e.target.value)}
              className="w-[100%] rounded-xl border-2 border-gray-300 p-2 hover:border-blue-500"
            />
          </div>
        </p> */}

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
            onClick={() => navigate("/resendVerifyemail")}
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
