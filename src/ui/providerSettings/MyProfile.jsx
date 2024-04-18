import { CiEdit } from "react-icons/ci";
import Modal from "../Modal";
import MyProfileUpdate from "./MyProfileUpdate";
import { CiCamera } from "react-icons/ci";
import { useState } from "react";
import { useEditProvider } from "../../features/authentication/provider/useEditProvider";
import MyButton from "../MyButton";
import { useGetProvider } from "../../features/authentication/provider/useGetProvider";

export default function MyProfile() {
 
  //get provider deatils
  const { user } = useGetProvider();

  const [fullName, setFullName] = useState(user?.user_metadata?.fullName);

  const [avatar, setAvatar] = useState(null);
  const [phone, setPhone] = useState(user?.user_metadata?.phone);
  const [resAddress, setResAddress] = useState(user?.user_metadata?.resAddress);

  const { updateProvider, isUpdating } = useEditProvider();

  function handleSubmit(e) {
    e.preventDefault();

    if (!user?.user_metadata.fullName) return;

    updateProvider(
      {
        fullName,
        avatar,
        phone,
        resAddress,
      },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset(); //Clear the fields
        },
      },
    );
  }

  function handleClear(e) {
    e.preventDefault();
    setFullName(user?.user_metadata?.fullName);
    setAvatar(null);
    setPhone(user?.user_metadata?.phone);
    setResAddress(user?.user_metadata?.resAddress);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Modal>
        <div className="z-0 mt-5 rounded-xl border-2 p-5 py-5 text-center lg:py-10">
          <p className="mb-3 flex font-bold">My Profile</p>

          <div className="grid items-center justify-center gap-3  border-gray-300 p-5 lg:flex   lg:justify-start lg:p-10">
            <div className="relative z-0 grid h-[100px] w-[100px] items-center justify-center rounded-full bg-black text-[30px] text-white">
              <spam>{user?.user_metadata?.avatar}</spam>

              <span className="absolute bottom-0 right-0 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-[22px] text-black">
                <CiCamera />
                <input
                  className="absolute opacity-0"
                  id="avatar"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setAvatar(e.target.files[0])}
                  disabled={isUpdating}
                />
              </span>
            </div>

            <div className="text-left">
              <p className="font-semibold">
                <span>{user?.user_metadata?.fullName}</span>
              </p>{" "}
              <p className=" font-extralight">Service Provider</p>
            </div>
          </div>

          <div className="border-t-2 border-gray-300 p-3 lg:p-10">
            <div className="mb-5 flex items-center justify-between gap-1 font-semibold">
              <p>Personal Information</p>
              {/* <Modal.Open opens="profile">
                <button className="flex items-center">
                  Edit
                  <CiEdit />
                </button>
              </Modal.Open> */}
              <MyButton
                type="secondary"
                disabled={isUpdating}
                onClick={handleClear}
              >
                Clear
              </MyButton>

              <MyButton type="primary" disabled={isUpdating}>
                Update
              </MyButton>
            </div>

            <div className="justify-between text-left lg:flex lg:w-[70%]">
              <div>
                <p className="font-light">Full Name</p>
                <input
                  className="border border-stone-300 bg-white"
                  id="fullName"
                  type="text"
                  value={fullName}
                  disabled={isUpdating}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              {/* <div className="mt-2  lg:text-right">
              <p className="font-light">Last Name</p>
              <span>Daniel</span>
            </div> */}
            </div>

            <div className="justify-between text-left lg:flex lg:w-[70%]">
              <div className="mt-2 ">
                <p className="font-light">Email</p>
                <span>
                  <input
                    className="border border-stone-300 bg-white"
                    id="email"
                    type="text"
                    value={user?.user_metadata.email}
                    disabled
                  />
                </span>
              </div>
              <div className="mt-2  lg:text-right ">
                <p className="font-light">Phone</p>
                <span>
                  {" "}
                  <input
                    className="border border-stone-300 bg-white"
                    id="phone"
                    type="text"
                    value={phone}
                    disabled={isUpdating}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </span>
              </div>
            </div>

            <div className="justify-between text-left lg:flex lg:w-[70%]">
              <div className="mt-2 ">
                <p className="font-light">Gender</p>
                <span>
                  {" "}
                  <input
                    className="border border-stone-300 bg-white"
                    id="gender"
                    type="text"
                    value={user?.user_metadata?.gender}
                    disabled
                  />
                </span>
              </div>

              <div className="mt-2  lg:text-right">
                <p className="font-light">Residential Address</p>
                <span>
                  {" "}
                  <input
                    className="border border-stone-300 bg-white"
                    id="resAddress"
                    type="text"
                    value={resAddress}
                    disabled={isUpdating}
                    onChange={(e) => setResAddress(e.target.value)}
                  />
                </span>
              </div>
            </div>
          </div>

          {/* <Modal.Window name="profile">
          <MyProfileUpdate user={user} />
        </Modal.Window> */}
        </div>
      </Modal>
    </form>
  );
}
