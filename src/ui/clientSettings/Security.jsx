import { useState } from "react";
import MyButton from "../MyButton";
import { useForm } from "react-hook-form";
import { useUpdateUserPassword } from "../../features/client/auth/useUpdateUserPassword";

export default function Security() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();

  const { errors } = formState;

  //const { updateProvider, isUpdating } = useEditProvider();

  const { updatePassword, isLoading: isUpdating } = useUpdateUserPassword();

  function onSubmit({ old_password, new_password, new_password_confirmation }) {
    updatePassword(
      { old_password, new_password, new_password_confirmation },
      { onSuccess: reset },
    );
  }

  const style =
    "w-[100%] rounded-lg border-2 border-gray-300 px-3 py-1 hover:border-blue-500";

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="z-0 mt-5 rounded-xl border-2 p-5 py-5 text-center lg:py-10">
        <p className="mb-3 flex px-2 font-bold">Passwords</p>

        <div className=" border-gray-300 p-2 text-left lg:p-10">
          <div className="mt-2">
            <p className="font-light">Old Password </p>
            <input
              type="password"
              placeholder="Enter Old Password"
              className={style}
              disabled={isUpdating}
              id="old_password"
              autoComplete="old_password"
              {...register("old_password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password needs a minimum of 8 characters",
                },
              })}
            />
            <span className=" text-red-500">
              {errors?.old_password?.message}
            </span>
          </div>

          <div className="mt-2">
            <p className="font-light">New password </p>
            <input
              type="password"
              placeholder="Enter New Password"
              className={style}
              disabled={isUpdating}
              id="new_password"
              autoComplete="new_password"
              {...register("new_password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password needs a minimum of 8 characters",
                },
              })}
            />
            <span className=" text-red-500">
              {errors?.new_password?.message}
            </span>
          </div>

          <div className="mt-2 ">
            <p className="font-light">Re-Enter New Password</p>
            <input
              type="password"
              className={style}
              placeholder="Confirm New Password"
              autoComplete="new_password_confirmation"
              id="new_password_confirmation"
              disabled={isUpdating}
              {...register("new_password_confirmation", {
                required: "This field is required",
                validate: (value) =>
                  getValues().new_password === value ||
                  "Passwords need to match",
              })}
            />
            <span className=" text-red-500">
              {errors?.new_password_confirmation?.message}
            </span>
          </div>
        </div>
        <div className="mt-10">
          <MyButton type="primary" disabled={isUpdating}>
            Update
          </MyButton>
        </div>
      </div>
    </form>
  );
}
