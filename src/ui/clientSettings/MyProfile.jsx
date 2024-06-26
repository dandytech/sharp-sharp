import { CiEdit } from "react-icons/ci";
import Modal from "../Modal";
import MyProfileUpdate from "./MyProfileUpdate";
import { CiCamera } from "react-icons/ci";
import useAuth from "../../hooks/useAuth";

export default function MyProfile() {
  const { user } = useAuth();
  return (
    <Modal>
      <div className="z-0 mt-5 rounded-xl border-2 p-5 py-5 text-center lg:py-10">
        <p className="mb-3 flex border-b-2 border-gray-300 pb-3 font-bold">
          My Profile
        </p>

        <div className="grid items-center justify-center gap-3  border-gray-300 p-5 lg:flex   lg:justify-start lg:p-10">
          <div className="relative z-0 grid h-[100px] w-[100px] items-center justify-center rounded-full bg-black text-[30px] text-white">
            <spam> PD</spam>

            <span className="absolute bottom-0 right-0 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-[22px] text-black">
              <CiCamera />
              <input type="file" name="" id="" className="absolute opacity-0" />
            </span>
          </div>

          <div className="text-left">
            <p className="font-semibold">{user?.name}</p>{" "}
            <p>Service Provider</p>
          </div>
        </div>

        <div className="border-2 border-gray-300 p-3 lg:p-10">
          <div className="mb-5 flex items-center justify-between gap-1 font-semibold">
            <p>Personal Information</p>
            <Modal.Open opens="profile">
              <button className="flex items-center">
                Edit
                <CiEdit />
              </button>
            </Modal.Open>
          </div>

          <div className="justify-between text-left lg:flex lg:w-[70%]">
            <div>
              <p className="font-light">Full Name</p>
              <span>{user?.name}</span>
            </div>
           
          </div>

          <div className="justify-between text-left lg:flex lg:w-[70%]">
            <div className="mt-2 ">
              <p className="font-light">Email</p>
              <span>{user?.email}</span>
            </div>
            <div className="mt-2  lg:text-right ">
              <p className="font-light">Phone</p>
              <span>{user?.phone_number}</span>
            </div>
          </div>

          <div className="justify-between text-left lg:flex lg:w-[70%]">
            <div className="mt-2 ">
              <p className="font-light">Gender</p>
              <span>{user?.gender}</span>
            </div>

            <div className="mt-2  lg:text-right">
              <p className="font-light">Residential Address</p>
              <span>2 Metalbox Rd, Ikeja</span>
            </div>
          </div>
        </div>

        <Modal.Window name="profile">
          <MyProfileUpdate />
        </Modal.Window>
      </div>
    </Modal>
  );
}
