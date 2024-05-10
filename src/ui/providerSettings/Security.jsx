import MyButton from "../MyButton";
import { useEditProvider } from "../../features/authentication/provider/useEditProvider";
import { useForm } from "react-hook-form";

export default function Security() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();

  const { errors } = formState;

  const { updateProvider, isUpdating } = useEditProvider();

  function onSubmit({ password }) {
    updateProvider({ password }, { onSuccess: reset });
  }

  const style =
    "w-[100%] rounded-lg border-2 border-gray-300 px-3 py-1 hover:border-blue-500";

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="z-0 mt-5 rounded-xl border-2 p-5 py-5 text-center lg:py-10">
        <p className="mb-3 flex px-2 font-bold">Passwords</p>

        <div className=" border-gray-300 p-2 text-left lg:p-10">
          <div className="mt-2">
            <p className="font-light">New </p>
            <input
              type="password"
              placeholder="Enter Old Password"
              className={style}
              disabled={isUpdating}
              id="password"
              autoComplete="current-password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password needs a minimum of 8 characters",
                },
              })}
            />
            <span className=" text-red-500">{errors?.password?.message}</span>
          </div>

          <div className="mt-2 ">
            <p className="font-light">Re-Enter New</p>
            <input
              type="password"
              className={style}
              placeholder="Enter New Password"
              autoComplete="new-password"
              id="passwordConfirm"
              disabled={isUpdating}
              {...register("passwordConfirm", {
                required: "This field is required",
                validate: (value) =>
                  getValues().password === value || "Passwords need to match",
              })}
            />
            <span className=" text-red-500">
              {errors?.passwordConfirm?.message}
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
