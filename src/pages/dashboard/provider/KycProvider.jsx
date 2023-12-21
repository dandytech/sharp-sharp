const banks = [
  {
    id: 1,
    name: "SELECT YOUR BANK",
  },
  {
    id: 2,
    name: "Access",
  },
  {
    id: 3,
    name: "GTB",
  },
  {
    id: 4,
    name: "First Bank PLC",
  },
  {
    id: 5,
    name: "Union",
  },
  {
    id: 6,
    name: "Opay",
  },
  {
    id: 7,
    name: "Palm Pay",
  },
  {
    id: 8,
    name: "Fidelity",
  },
  {
    id: 9,
    name: "Zenith",
  },
];

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { SiNamecheap } from "react-icons/si";

import { MdMergeType } from "react-icons/md";

import { AiOutlineBank } from "react-icons/ai";

import { GiConfirmed } from "react-icons/gi";
import { FaUserNinja } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { BsCurrencyExchange } from "react-icons/bs";

export default function KycProvider() {
  const div =
    "mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800 text-center text-white focus:border-white lg:mb-0 lg:w-[50%]";

  const span =
    "flex h-[45px] w-[10%]  items-center justify-center  border-r text-center text-[22px] text-white ";

  const input =
    " h-[45px] w-[90%] bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white ";

  return (
    <form>
      <div className="right-0  lg:ml-[200px] mt-[80px] h-auto w-[100%] border-2 p-10 shadow-lg">
        <div className="m-auto justify-center p-10 text-center  shadow-2xl ">
          {" "}
          <p className="pb-10 pt-0 text-center font-bold">
            Complete Your KYC As A Service Provider !
          </p>
          <div className="mt-10 gap-10 lg:flex">
            <div className={div}>
              <span className={span}>
                <FaRegUser />
              </span>
              <input
                type="file"
                id="name"
                name="photo"
                required
                className={`${input} `}
              />
            </div>
            <div className={div}>
              <span className={span}>
                <TbCertificate />
              </span>
              <input
                className={input}
                id="cac"
                name="caca"
                label="caca"
                required
                placeholder="CAC No"
              />
            </div>
          </div>
          <div className="mt-10 gap-10 lg:flex">
            <div className={div}>
              <span className={span}>
                <BsCurrencyExchange />
              </span>
              <input
                className={input}
                id="taxid"
                name="taxid"
                label="taxid"
                required
                placeholder="Tax ID"
              />
            </div>

            <div className={div}>
              <span className={span}>
                <IoLocationOutline />
              </span>
              <input
                type="text"
                id="address"
                name="address"
                className={input}
                placeholder="Home Address"
                required
              />
            </div>
          </div>
          <div className="mt-10 gap-10 lg:flex">
            <div className={div}>
              <span className={span}>
                <FaUserNinja />
              </span>
              <input
                type="nin"
                id="nin"
                name="nin"
                className={input}
                placeholder="NIN"
                required
              />
            </div>

            <div className={div}>
              <span className={span}>
                <MdOutlineHomeRepairService />
              </span>
              <input
                type="text"
                id="service"
                name="service"
                className={input}
                placeholder="Service Rendering"
                required
              />
            </div>
          </div>
          <div className="mt-10 gap-10 lg:flex">
            <div className={div}>
              <span className={span}>
                <AiOutlineBank />
              </span>
              <select
                className=" h-[45px] w-[90%] bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
                id="service"
                name="service"
                required
              >
                {banks.map((bank) => (
                  <>
                    <option key={bank.id}>{bank.name}</option>
                  </>
                ))}
              </select>
            </div>

            <div className={div}>
              <span className={span}>
                <GiConfirmed />
              </span>
              <input
                type="number"
                value=""
                id="actno"
                name="actno"
                className={input}
                placeholder="Account number"
                required
              />
            </div>
          </div>
          <div className="mt-10 gap-10 lg:flex">
            <div className={div}>
              <span className={span}>
                <SiNamecheap />
              </span>
              <input
                type="text"
                id="actname"
                name="actname"
                className={input}
                placeholder="Account Name"
                required
              />
            </div>

            <div className={div}>
              <span className={span}>
                <MdMergeType />
              </span>
              <select
                className={input}
                id="acttype"
                name="genacttypeder"
                label="Account Type"
                required
              >
                <option>Account Type </option>
                <option>Savings</option>
                <option>Current</option>
                <option>Fixed Deposit</option>
              </select>
            </div>
          </div>
          <button className="my-20 rounded-full border-2 bg-blue-500 px-7 py-3 text-white hover:bg-black  ">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
