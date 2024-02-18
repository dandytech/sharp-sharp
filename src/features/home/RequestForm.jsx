import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import MyButton from "../../ui/MyButton";

export default function RequestForm() {
  return (
    <div id="quoteform"  className="h-auto overflow-x-hidden bg-gradient-to-b  from-gray-800 to-white sm:mt-[100px] ">
      <div className=" h-auto  bg-[url('/src/data/bg7.jpeg')]  bg-cover bg-center bg-no-repeat text-center  lg:h-[110vh]">
        <div className="float-right rounded-b-[10px] bg-gray-800  text-white lg:w-[50%] ">
          <p className="mt-10 text-center text-3xl md:text-4xl lg:px-20 lg:text-center lg:text-5xl">
            SUBMIT REQUEST!!!
          </p>
          <p className="p-5 text-center lg:text-4xl   leading-relaxed md:text-3xl text-2xl">
            Lets Help You Find The{" "}
            <span className="text-blue-500">Best Available</span> &{" "}
            <span className="text-blue-500">Affordable</span> Service Provider
          </p>

          <form className="p-5 lg:px-20">
            <div className="mb-10 items-center justify-between gap-10 lg:flex">
              <div className="mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800  text-center focus:border-white lg:mb-0 lg:w-[50%]">
                <span className=" flex h-[45px]  w-[20%] items-center  justify-center border-r  text-center text-[30px] ">
                  <MdOutlineHomeRepairService />
                </span>
                <select
                  className=" h-[45px] w-[80%] rounded-xl bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
                  id="service"
                  name="service"
                >
                  <option>Service Category</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>

              <div className="mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800  text-center focus:border-white lg:mb-0 lg:w-[50%]">
                <span className=" flex h-[45px]  w-[20%] items-center  justify-center border-r text-center text-[30px]  ">
                  <IoLocationOutline />
                </span>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className=" h-[45px] w-[80%]  rounded-xl bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
                  placeholder="House Address"
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
                  className=" h-[45px] w-[80%]  rounded-xl bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
                  placeholder="Phone"
                />
              </div>
              <div className="mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800  text-center focus:border-white lg:mb-0 lg:w-[50%]">
                <span className=" flex h-[45px]  w-[20%] items-center  justify-center border-r  text-center text-[30px]  ">
                  <MdOutlineAttachEmail />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className=" h-[45px] w-[80%]  rounded-xl bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
                  placeholder="Eamil"
                />
              </div>
            </div>

            <div className="mb-10 items-center justify-between gap-10 lg:flex">
              <div className="flex items-center justify-center rounded-xl border-2 border-blue-500  bg-gray-800 text-center focus:border-white lg:mb-0 lg:w-[100%]">
                <span className=" flex h-[45px]  w-[20%] items-center  justify-center border-r text-center text-[30px] ">
                  <CiEdit />
                </span>
                <textarea
                  cols="40"
                  rows="3"
                  className=" w-[100%] rounded-xl bg-gray-800 px-5 py-5  font-semibold text-white focus:border-2 focus:border-white "
                  placeholder="Explain Better"
                  name="explain"
                  id="explain"
                ></textarea>
              </div>
            </div>

            <MyButton type="primary"> Submit</MyButton>
          </form>
        </div>
      </div>
    </div>
  );
}
