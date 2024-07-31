import { CiEdit } from "react-icons/ci";
import Modal from "../Modal";
import MyProfileUpdate from "./MyProfileUpdate";
import { CiCamera } from "react-icons/ci";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useUpdateUserProfilePhoto } from "../../features/client/auth/useUpdateUserPhoto";
import { fileToBase64 } from "../../utils/formats";
import { useUpdateUserProfile } from "../../features/client/auth/useUpdateUserProfile";
import Avatar from "react-avatar";
import MyButton from "../MyButton";
import { refresh } from "aos";

export default function MyProfile() {
  const { user, updateImage } = useAuth();

  const [photo, setPhoto] = useState();

  // const [name, setFullName] = useState(user?.name);
  // const [email, setEmail] = useState(user?.email);
  // const [phone_number, setPhone] = useState(user?.phone_number);
  // const [gender, setGender] = useState(user?.gender);
  // const [address, setResAddress] = useState(user?.address);

  //Photo update
  const { updatePhoto, isLoading: isUploading } = useUpdateUserProfilePhoto();

  //upoate photo
  async function handleUpdatePhoto(photo) {
    await fileToBase64(photo).then((res) => {
      updatePhoto(res);
    });
    // updatePhoto(toBase64);
  }

  //Profile Update
  const { profileUpdate, isUpdating } = useUpdateUserProfile();

  //to use form submit once
  const [catInputs, setCatInputs] = useState({
    name: user?.name,
    email: user?.email,
    gender: user?.gender,
    phone_number: user?.phone_number,
    address: user?.address,
    id: user?.id,
  });

  const handleChange = (e, field, id) => {
    const { value } = e.target;
    setCatInputs({ ...catInputs, [field]: value, id: id });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const filtered = Object.fromEntries(
      Object.entries(catInputs).filter(
        ([key, value]) => value !== "" && value !== 0,
      ),
    );
    console.log(filtered);
    profileUpdate(filtered);
  };

  const inputStyle =
    "border hover:border-blue-500 py-1 w-full rounded-md px-1 border-stone-300 bg-white";

  if (isUpdating) return <div>Loading...</div>;

  return (
    <Modal>
      <div className="z-0 mt-5 rounded-xl border-2 p-5 py-5 text-center lg:py-10">
        <p className="mb-3 flex font-bold">My Profile</p>

        <div className="grid items-center justify-center gap-3  border-gray-300 p-5 lg:flex   lg:justify-start lg:p-10">
          {/* photo section */}
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
                onChange={(e) => {
                  const selectedPhoto = e.target.files[0];
                  setPhoto(selectedPhoto);
                  handleUpdatePhoto(selectedPhoto);
                }}
              />
            </span>
          </div>

          <div className="text-left">
            <p className="font-semibold">
              <span>{user?.name}</span>
            </p>{" "}
            <p className=" font-extralight">Service Provider</p>
          </div>
        </div>

        {/* form section */}
        <form onSubmit={handleSubmit}>
          <div className="border-t-2 border-gray-300 py-3 lg:p-10">
            <div className="mb-5 flex items-center justify-between gap-1 font-semibold lg:w-[70%]">
              <p>Personal Information</p>
              {/* <Modal.Open opens="profile">
                <button className="flex items-center">
                  Edit
                  <CiEdit />
                </button>
              </Modal.Open> */}
              {/* <MyButton
                type="secondary"
                disabled={isUpdating}
                onClick={handleClear}
              >
                Clear
              </MyButton> */}

              <MyButton
                type="primary"
                disabled={isUpdating}
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
                  onChange={(e) => handleChange(e, "name", user.id)}
                  // onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>

            <div className="justify-between gap-5 py-1 text-left lg:flex lg:w-[70%]">
              <div className="mt-2 lg:w-[50%] ">
                <p className="font-light">Email</p>
                <span>
                  <input
                    className={inputStyle}
                    id="email"
                    type="email"
                    defaultValue={user?.email}
                    disabled={isUpdating}
                    onChange={(e) => handleChange(e, "email", user.id)}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </span>
              </div>
              <div className="mt-2  lg:w-[50%] lg:text-right ">
                <p className="font-light">Phone</p>
                <span>
                  {" "}
                  <input
                    className={inputStyle}
                    id="phone_number"
                    type="text"
                    disabled={isUpdating}
                    defaultValue={user?.phone_number}
                    onChange={(e) => handleChange(e, "phone_number", user.id)}
                    // onChange={(e) => setPhone(e.target.value)}
                  />
                </span>
              </div>
            </div>

            <div className="justify-between gap-5 py-1 text-left lg:flex lg:w-[70%]">
              <div className="mt-2 lg:w-[50%]">
                <p className="font-light">Gender</p>
                <span>
                  <select
                    className={inputStyle}
                    id="gender"
                    type="text"
                    defaultValue={user?.gender}
                    disabled={isUpdating}
                    onChange={(e) => handleChange(e, "gender", user.id)}
                    // onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </span>
              </div>

              <div className="mt-2  lg:w-[50%] lg:text-right">
                <p className="font-light">Residential Address</p>
                <span>
                  {" "}
                  <input
                    className={inputStyle}
                    id="address"
                    type="text"
                    defaultValue={user?.address}
                    disabled={isUpdating}
                    onChange={(e) => handleChange(e, "address", user.id)}
                    // onChange={(e) => setResAddress(e.target.value)}
                  />
                </span>
              </div>
            </div>
          </div>
        </form>
        {/* <Modal.Window name="profile">
          <MyProfileUpdate user={user} />
        </Modal.Window> */}
      </div>
    </Modal>
  );
}
