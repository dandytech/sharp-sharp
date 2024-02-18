import { useState } from "react";
import {
  FaCcAmex,
  FaCcMastercard,
  FaCcVisa,
  FaCreditCard,
  FaGooglePay,
} from "react-icons/fa";
import { LiaAddressCardSolid, LiaCcJcb } from "react-icons/lia";
import { GoFileSubmodule } from "react-icons/go";

export default function PaymentInfo() {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const style =
    "flex w-full items-center gap-1 border-2 bg-white p-2 hover:border-blue-300";
  return (
    <div className="border-4 border-stone-100 p-3 shadow-md">
      <div className="justify-betwwen mb-5 flex items-center gap-5">
        <button
          onClick={() => handleTabClick(1)}
          className={`flex w-[50%] rounded-xl border-2 p-3 text-left ${
            activeTab === 1
              ? "border-blue-500 text-blue-500"
              : "border-gray-300"
          } `}
        >
          <span>
            <p>
              <FaCreditCard />
            </p>
            <p>Card</p>
          </span>
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`flex w-[50%] rounded-xl border-2 p-3 text-left ${
            activeTab === 2
              ? "border-blue-500 text-blue-500"
              : "border-gray-300"
          } `}
        >
          <span>
            <p className="flex w-[50%] items-center justify-center rounded-full border-2 border-gray-400 text-xl">
              <FaGooglePay />
            </p>
            <p>Google Pay</p>
          </span>
        </button>
      </div>
      <div>
        {activeTab === 1 && (
          <div>
            <div className="items-center justify-between gap-3 space-y-5 lg:flex">
              <div className="w-full">
                <label>Card number</label>
                <p className={style}>
                  {" "}
                  <input
                    type="text"
                    placeholder="1234 1234 1234 1234"
                    className="w-full "
                  />
                  <span className="flex gap-1 text-lg">
                    <FaCcVisa />
                    <FaCcMastercard />
                    <FaCcAmex />
                    <LiaCcJcb />
                  </span>
                </p>
              </div>
              <div className="w-full">
                <label>Expiration</label>
                <p className={style}>
                  <input type="date" placeholder="MM/YY" className="w-full" />
                </p>
              </div>
              <div className="w-full">
                <label>CVC</label>
                <p className={style}>
                  <input type="text" placeholder="703" className="w-full" />
                  <span className="text-lg">
                    <LiaAddressCardSolid />
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-5  items-center justify-between gap-5 space-y-5 lg:space-y-0 lg:flex">

              <div className="w-full">
                <label>Country</label>

                <p >
                  <select className={style}>
                    <option>Nigeria</option>
                    <option>United State</option>
                  </select>
                </p>
              </div>

              <div className="w-full">
                <label>ZIP</label>
                <p className={style}>
                  {" "}
                  <input type="text" placeholder="12345" className="w-full" />
                </p>
              </div>

            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <div>
              <span>
                <p className="flex w-[20%] items-center justify-center rounded-full border-2 border-gray-400 text-4xl lg:w-[8%]">
                  <FaGooglePay />
                </p>
              </span>
              <p>Google Pay Selected</p>
            </div>

            <div className="mt-7 flex items-center  gap-1 border-t-2 border-gray-300 py-5">
              <span className="text-2xl">
                <GoFileSubmodule />
              </span>
              <span className="font-light">
                Another step will appear to securely submit your payment
                information
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
