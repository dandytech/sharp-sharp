import { CiEdit } from "react-icons/ci";
import Modal from "../Modal";
import MyProfileUpdate from "./MyProfileUpdate";
import { CiCamera } from "react-icons/ci";

export default function MyProfile() {
  return (
    <Modal>
      <div className="rounded-xl p-3 ">
        <p className="mb-3 flex font-bold">My Profile</p>

        <div className="grid items-center justify-center gap-3 border-2 border-gray-300 p-5 lg:flex   lg:justify-start lg:p-10">
          
            <div className="grid relative h-[100px] w-[100px] items-center justify-center rounded-full bg-black text-[30px] text-white z-0">
              <spam> PD</spam>
             
              <span className="absolute flex justify-center items-center w-8 h-8 right-0 bottom-0 z-50 text-black bg-gray-200 rounded-full text-[22px]">
              <CiCamera />
              <input type="file" name="" id="" className="opacity-0 absolute" />
            </span>

            </div>
           
          

          <div className="text-left">
            <p className="font-semibold">Prince Daniel</p>{" "}
            <p>Service Provider</p>
          </div>
        </div>

        <div className="border-2 border-gray-300 p-3 lg:p-10">
          <div className="mb-5 flex gap-1 items-center justify-between font-semibold">
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
              <p className="font-light">First Name</p>
              <span>Prince</span>
            </div>
            <div className="mt-2  lg:text-right">
              <p className="font-light">Last Name</p>
              <span>Daniel</span>
            </div>
          </div>

          <div className="justify-between text-left lg:flex lg:w-[70%]">
            <div className="mt-2 ">
              <p className="font-light">Email</p>
              <span>prince@gmail.com</span>
            </div>
            <div className="mt-2  lg:text-right ">
              <p className="font-light">Phone</p>
              <span>+234 7065123746</span>
            </div>
          </div>

          <div className="justify-between text-left lg:flex lg:w-[70%]">
            <div className="mt-2 ">
              <p className="font-light">Gender</p>
              <span>Male</span>
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
