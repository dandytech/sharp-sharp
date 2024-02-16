import { useState } from "react";

export default function Security() {
  const [oldpassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!oldpassword || !newPassword || !confirmPassword) return;
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="z-0 mt-5 rounded-xl border-2 p-5 py-5 text-center lg:py-10">
        <p className="mb-3 flex px-2 font-bold">Passwords</p>

        <div className="border-2 border-gray-300 p-2 text-left lg:p-10">
          <div>
            <p className="font-light">Old </p>
            <input
              type="text"
              value={oldpassword}
              className="w-[100%]  rounded-lg border-2 border-gray-300  px-3 py-1 hover:border-blue-500"
              placeholder="Enter Old Password"
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>

          <div className="mt-2">
            <p className="font-light">New </p>
            <input
              type="text"
              value={newPassword}
              className="w-[100%]  rounded-lg border-2 border-gray-300  px-3 py-1 hover:border-blue-500"
              placeholder="Enter New Password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="mt-2 ">
            <p className="font-light">Re-Enter New</p>
            <input
              type="text"
              value={confirmPassword}
              className="w-[100%]  rounded-lg border-2 border-gray-300  px-3 py-1 hover:border-blue-500"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <button className="mt-10 cursor-pointer rounded-xl border-2 bg-blue-500 px-3 text-white hover:bg-black">
          Submit
        </button>
      </div>
    </form>
  );
}
