import { useState } from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineMedicalServices } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import { RiUserSettingsLine } from "react-icons/ri";
import ServiceInfo from "../ui/requestService/ServiceInfo";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import MyButton from "../ui/MyButton";
import useCartStore from "../store/cartStore";
import ProvidersInfo from "../ui/requestService/ProvidersInfo";
import { useMoveBack } from "../hooks/useMoveBack";
import ProfileInfo from "../ui/requestService/ProfileInfo";
import PaymentInfo from "../ui/requestService/PaymentInfo";

export default function Contact() {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  //cart items
  const items = useCartStore((state) => state.items);

  //remove from cart function
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  //increment cart
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  //decrement cart
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  //sum prices to get total
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  //format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };

  //back button hook
  const MoveBack = useMoveBack();

  return (
    <div className="bg-gradient-to-r from-violet-100 to-blue-100  pt-[85px] lg:mt-[0px] lg:py-0 lg:pt-0 ">
      <div className="h-[300px] bg-[url('/src/data/bgcontact.png')] bg-cover bg-center bg-no-repeat pt-10">
        {/* banner section */}
        <section className="m-auto h-auto p-5 lg:w-[70%] lg:p-5">
          <div className="flex items-center gap-1 rounded-xl border-2 border-gray-400 px-5  py-3 text-white lg:w-[50%]">
            <span>
              <IoTimeOutline />
            </span>{" "}
            <span>Available 24/7 For Your Services !!!</span>
          </div>
          <div className="mt-5 flex py-5 text-xl text-white">
            Preview & Provided The Required Information ...
          </div>
        </section>
      </div>{" "}
      <section>
        <div className="px-4 lg:px-5">
          <div className="z-0 m-auto mt-10 flex w-full items-center justify-between border-t-2 border-t-gray-300 bg-transparent pl-[0px] pr-[0px] lg:w-[70%] lg:px-3">
            <button
              className={
                activeTab === 1
                  ? "border-b-3 rounded-lg rounded-b-none border-2 border-b-0 border-blue-500 p-2 shadow-md"
                  : " "
              }
              onClick={() => handleTabClick(1)}
            >
              <div className="z-10 mt-[-30px] flex-col items-center justify-center gap-2 lg:flex">
                <p className="flex h-[70px] w-[70px] items-center justify-center rounded-full  border-gray-300 bg-gray-100 text-center">
                  <MdOutlineMedicalServices className="h-[50px] w-[50px]" />
                </p>
                <p>Step 1</p>
                <p>Service Info</p>
              </div>
            </button>

            <button
              className={
                activeTab === 2
                  ? "border-b-3 rounded-lg rounded-b-none border-2  border-b-0 border-blue-500 p-2 shadow-md"
                  : " "
              }
              onClick={() => handleTabClick(2)}
            >
              <div className="z-10 mt-[-30px] flex-col items-center justify-center gap-2 pl-2 lg:flex">
                <p className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-gray-300 bg-gray-100 text-center">
                  <RiUserSettingsLine className="h-[50px] w-[50px]" />
                </p>
                <p>Step 2</p>
                <p>Profile Info</p>
              </div>
            </button>

            <button
              className={
                activeTab === 3
                  ? "border-b-3  rounded-lg rounded-b-none border-2 border-b-0 border-blue-500 p-2 shadow-md"
                  : " "
              }
              onClick={() => handleTabClick(3)}
            >
              <div className="z-10 ml-3 mt-[-30px] flex-col items-center gap-2 lg:flex">
                <p className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-gray-300 bg-gray-100 text-center">
                  <GiTakeMyMoney className="h-[50px] w-[50px]" />
                </p>
                <p>Step 3</p>
                <p>Payment Info</p>
              </div>
            </button>
            <button
              className={
                activeTab === 4
                  ? "border-b-3 rounded-lg rounded-b-none border-2 border-b-0 border-blue-500 p-2 shadow-md"
                  : " "
              }
              onClick={() => handleTabClick(4)}
            >
              <div className="z-10 mt-[-30px] flex-col items-center justify-center gap-2 pl-2 lg:flex">
                <p className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-gray-300 bg-gray-100 text-center">
                  <PiUsersThreeFill className="h-[50px] w-[50px]" />
                </p>
                <p>Step 4</p>
                <p>Providers Info</p>
              </div>
            </button>
          </div>

          <div className="m-auto px-3 py-10 lg:w-[70%]">
            <button onClick={MoveBack} className="mb-5 text-lg">
              🔙
            </button>
            {getTotalPrice() > 0 && (
              <p className="mb-5 text-center">
                <span className="font-light">Total:</span>{" "}
                {formatCurrency(getTotalPrice())}
              </p>
            )}

            {activeTab === 1 && (
              <p>
                {items.map((item, index) => (
                  <ServiceInfo
                    item={item}
                    key={index}
                    index={index}
                    removeFromCart={removeFromCart}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                    getTotalPrice={getTotalPrice}
                    formatCurrency={formatCurrency}
                  />
                ))}
              </p>
            )}
            {activeTab === 2 && (
              <p>
                <ProfileInfo />
              </p>
            )}
            {activeTab === 3 && (
              <p>
                <PaymentInfo />
              </p>
            )}

            {activeTab === 4 && (
              <p>
                {items.map((item, index) => (
                  <ProvidersInfo
                    item={item}
                    key={index}
                    getTotalPrice={getTotalPrice}
                    formatCurrency={formatCurrency}
                  />
                ))}
              </p>
            )}
          </div>

          <div className="m-auto mt-5 flex items-center justify-between px-3 pb-10 lg:w-[70%]">
            {activeTab > 1 && (
              <MyButton
                type="primary"
                onClick={() => handleTabClick(activeTab - 1)}
              >
                <span className="flex items-center gap-1">
                  <span>
                    {" "}
                    <FaArrowLeft />
                  </span>
                  <span> Previous</span>
                </span>
              </MyButton>
            )}

            {activeTab < 4 && (
              <MyButton
                type="primary"
                onClick={() => handleTabClick(activeTab + 1)}
              >
                <span className="flex items-center gap-1 ">
                  <span>Next</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </span>
              </MyButton>
            )}

            {activeTab == 4 && (
              <MyButton type="primary">
                {" "}
                <span className="flex items-start">
                  <span> Submit</span>
                  <span>
                    <TbSend />
                  </span>
                </span>
              </MyButton>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
