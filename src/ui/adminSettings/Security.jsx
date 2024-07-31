import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useUpdatePassword } from "../../features/admin/auth/useUpdatePassword";

export default function Security() {
  const [old_password, setOldPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [new_password_confirmation, setConfirmPassword] = useState("");

  const { user } = useAuth();

  //Profile Update
  const { updatePassword, isLoading } = useUpdatePassword();

  function handleSubmitForm(e) {
    e.preventDefault();
    if (
      !user?.email ||
      !old_password ||
      !new_password ||
      !new_password_confirmation
    )
      return;

    const payload = {
      old_password: old_password,
      new_password: new_password,
      new_password_confirmation: new_password_confirmation,
    };
    console.log(payload);
    updatePassword(payload);
  }

  const inputStyle =
    "w-[100%] rounded-lg border-2 border-blue-500  px-3 py-1 text-white hover:bg-white hover:text-black";

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="rounded-xl py-5 text-center lg:py-0">
        <p className="mb-3 flex px-2 font-bold">Passwords</p>

        <div className="border-2 border-gray-300 p-2 text-left lg:p-10">
          <div>
            <p className="font-light">Old </p>
            <input
              type="text"
              id="old_password"
              value={old_password}
              disabled={isLoading}
              className={inputStyle}
              placeholder="Enter Old Password"
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>

          <div className="mt-2">
            <p className="font-light">New </p>
            <input
              type="text"
              id="new_password"
              value={new_password}
              disabled={isLoading}
              className={inputStyle}
              placeholder="Enter New Password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="mt-2 ">
            <p className="font-light">Re-Enter New</p>
            <input
              type="text"
              id="new_password_confirmation"
              value={new_password_confirmation}
              disabled={isLoading}
              className={inputStyle}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          disabled={isLoading}
          className="mt-10 cursor-pointer rounded-xl border-2 bg-blue-500 px-3 text-white hover:bg-black"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
