import { FaUserShield } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export default function RequestForm() {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-white sm:mt-[100px] ">
      <div className=" overflow-hidden bg-[url('/src/data/bg7.jpeg')] bg-cover bg-center bg-no-repeat text-center sm:h-[100vh] sm:px-20">
        <div className="float-right rounded-b-[30px] bg-gray-800 p-10 text-white lg:w-[50%] ">
          <p className=" mt-20 text-center text-7xl sm:px-20 sm:text-6xl lg:text-center">
            SUBMIT REQUEST !!!
          </p>
          <p className="my-10 text-center text-4xl leading-relaxed lg:my-0 lg:p-20 lg:text-left lg:text-6xl ">
            Lets Help You Find The{" "}
            <span className="text-blue-500">Best Available</span> &{" "}
            <span className="text-blue-500">Affordable</span> Service Provider
          </p>

          <form className="lg:px-20">
            <div className="mb-10 items-center justify-between gap-10 lg:flex">
              <div className="mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800  text-center focus:border-white lg:mb-0 lg:w-[50%]">
                <span className=" flex h-[45px]  w-[20%] items-center  justify-center border-r text-center text-[30px]">
                  <FaUserShield />
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className=" h-[45px] w-[80%] bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
                  placeholder="Username"
                />
              </div>
              <div className="mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800  text-center focus:border-white lg:mb-0 lg:w-[50%]">
                <span className=" flex h-[45px]  w-[20%] items-center  justify-center border-r text-center text-[30px]  ">
                  <IoLocationOutline />
                </span>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className=" h-[45px] w-[80%] bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
                  placeholder="Location"
                />
              </div>
            </div>

            <div className="mb-10 items-center justify-between gap-10 lg:flex">
              <div className="mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800  text-center focus:border-white lg:mb-0 lg:w-[50%]">
                <span className=" flex h-[45px]  w-[20%] items-center  justify-center border-r text-center text-[30px]  ">
                  <MdOutlinePhoneIphone />
                </span>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className=" h-[45px] w-[80%] bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
                  placeholder="Phone"
                />
              </div>
              <div className="mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800  text-center focus:border-white lg:mb-0 lg:w-[50%]">
                <span className=" flex h-[45px]  w-[20%] items-center  justify-center border-r  text-center text-[30px]  ">
                  <MdOutlineAttachEmail />
                </span>
                <input
                  type="email"
                  id="location"
                  name="email"
                  className=" h-[45px] w-[80%] bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
                  placeholder="Eamil"
                />
              </div>
            </div>

            <div className="mb-10 items-center justify-between gap-10 lg:flex">
              <div className="mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800  text-center focus:border-white lg:mb-0 lg:w-[50%]">
                <span className=" flex h-[45px]  w-[20%] items-center  justify-center border-r  text-center text-[30px] ">
                  <MdOutlineHomeRepairService />
                </span>
                <select
                  className=" h-[45px] w-[80%] bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
                  id="service"
                  name="service"
                >
                  <option>Required Service</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>

              <div className="flex items-center justify-center rounded-xl border-2 border-blue-500  bg-gray-800 text-center focus:border-white lg:mb-0 lg:w-[50%]">
                <span className=" flex h-[45px]  w-[20%] items-center  justify-center border-r text-center text-[30px] ">
                  <CiEdit />
                </span>
                <textarea
                  cols="35"
                  rows="3"
                  className=" w-[80%] bg-gray-800 px-5 py-5  font-semibold text-white focus:border-2 focus:border-white "
                  placeholder="Explain Better"
                  name="explain"
                  id="explain"
                ></textarea>
              </div>
            </div>

            <button className="cursor-pointer rounded-full bg-blue-500 px-10 py-3 text-[24px] hover:bg-black hover:text-blue-500 lg:mt-[80px]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
