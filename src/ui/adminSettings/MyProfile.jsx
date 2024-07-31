import Modal from "../Modal";

import { CiCamera } from "react-icons/ci";
import { useGetAdmin } from "../../features/authentication/admin/useGetAdmin";

import { useState } from "react";
import { useEditAdmin } from "../../features/authentication/admin/useEditAdmin";
import MyButton from "../MyButton";

import Avatar from "react-avatar";
import { useUpdateProfilePhoto } from "../../features/admin/auth/useUpdatePhoto";
import { useUpdateProfile } from "../../features/admin/auth/useUpdateProfile";
import useAuth from "../../hooks/useAuth";

export default function MyProfile() {
  const { user } = useAuth();

  console.log(user?.name);

  //get provider deatils
  //const { user, refetch } = useGetAdmin();

  const [photo, setPhoto] = useState(null);

  const [name, setFullName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [phone_number, setPhone] = useState("");
  const [gender, setGender] = useState("");
  //const [address, setResAddress] = useState(user?.address);

  //Photo update
  const { updatePhoto, isLoading: isUploading } = useUpdateProfilePhoto();

  function handleUpdatePhoto(e) {
    e.preventDefault();
    const payload = {
      photo: photo,
    };
    updatePhoto(payload);
  }

  //Profile Update
  const { profileUpdate, isUpdating } = useUpdateProfile();

  function handleSubmit(e) {
    e.preventDefault();
    if (!user?.email) return;

    const payload = {
      name: user.name,
      email: user.email,
      phone_number: phone_number,
      gender: gender,
      // address: address,
    };
    console.log(payload);
    profileUpdate(payload);
  }

  function handleClear(e) {
    e.preventDefault();
    setFullName(user.name);
    setEmail(user.email);
    setPhone("");
    setPhone("");
  }
  const inputStyle =
    "border hover:border-blue-500 py-1 w-full rounded-md px-1 border-stone-300 bg-white";

  return (
    // <form onSubmit={handleSubmit}>
    <form>
      <Modal>
        <div className="z-0 mt-5 rounded-xl border-2 p-5 py-5 text-center lg:py-10">
          <p className="mb-3 flex font-bold">My Profile</p>

          <div className="grid items-center justify-center gap-3  border-gray-300 p-5 lg:flex   lg:justify-start lg:p-10">
            <div className="relative z-0 grid h-[100px] w-[100px] items-center justify-center rounded-full bg-black text-[30px] text-white">
              <spam>
                {!user?.photo ? (
                  <Avatar
                    name={user?.name}
                    color="black"
                    size="40"
                    className=" rounded-full"
                  />
                ) : (
                  <img src={user?.photo} className="rounded-full" />
                )}
              </spam>

              <span className="absolute bottom-[-20px] right-[-5px] z-50 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-[22px] text-black">
                <CiCamera />
                <input
                  className="absolute opacity-0"
                  id="photo"
                  type="file"
                  accept="image/*"
                  disabled={isUploading}
                  onBlur={(e) => handleUpdatePhoto(e.target.files[0], "photo")}
                  // onChange={(e) => setAvatar(e.target.files[0])}
                />
              </span>
            </div>

            <div className="text-left">
              <p className="font-semibold">
                <span>{user?.name}</span>
              </p>{" "}
              <p className=" font-extralight">{user?.role}</p>
            </div>
          </div>

          <div className="border-t-2 border-gray-300 py-3 lg:p-10">
            <div className="mb-5 flex items-center justify-between gap-1 font-semibold lg:w-[70%]">
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

              <MyButton
                type="primary"
                // disabled={isUpdating}
                onClick={handleSubmit}
              >
                Update
              </MyButton>
            </div>

            <div className="justify-between text-left lg:flex lg:w-[70%]">
              <div className="w-[100%]">
                <p className="font-light">Full Name</p>
                <input
                  className={inputStyle}
                  id="name"
                  type="text"
                  defaultValue={user?.name}
                  disabled={isUpdating}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              {/* <div className="mt-2  lg:text-right">
            <p className="font-light">Last Name</p>
            <span>Daniel</span>
          </div> */}
            </div>

            <div className="justify-between gap-5 py-1 text-left lg:flex lg:w-[70%]">
              <div className="mt-2 lg:w-[50%] ">
                <p className="font-light">Email</p>
                <span>
                  <input
                    className={inputStyle}
                    id="email"
                    type="text"
                    defaultValue={user?.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </span>
              </div>
              <div className="mt-2  lg:w-[50%] lg:text-right ">
                <p className="font-light">Phone</p>
                <span>
                  {" "}
                  <input
                    className={inputStyle}
                    id="phone"
                    type="text"
                    value={phone_number}
                    disabled={isUpdating}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </span>
              </div>
            </div>

            <div className="justify-between gap-5 py-1 text-left lg:flex lg:w-[70%]">
              <div className="mt-2 lg:w-[50%]">
                <p className="font-light">Gender</p>
                <span>
                  {" "}
                  <select
                    className={inputStyle}
                    id="gender"
                    type="text"
                    value={gender}
                    disabled={isUpdating}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </span>
              </div>

              {/* <div className="mt-2  lg:w-[50%] lg:text-right">
                <p className="font-light">Residential Address</p>
                <span>
                  {" "}
                  <input
                    className={inputStyle}
                    id="address"
                    type="text"
                    defaultValue={address}
                    disabled={isUpdating}
                    onChange={(e) => handleChange(e, "address", user?.id)}
                  />
                </span>
              </div> */}
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
