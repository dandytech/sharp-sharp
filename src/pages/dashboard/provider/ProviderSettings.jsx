import { useState } from "react";
import MyProfile from "../../../ui/providerSettings/MyProfile";
import Security from "../../../ui/providerSettings/Security";

export default function ProviderSettings() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="servicebg mt-[80px] w-[100%] shadow-2xl h-[100vh] overflow-y-auto lg:px-5">
      <div className="m-auto justify-center p-3 text-center ">
        {" "}
        <p className="mb-10 pt-5 text-center text-[24px] font-bold lg:pb-10">
          Account Settings !!!
        </p>
        <div className="lg:flex gap-10">
          <div className="flex  lg:w-[15%] lg:flex-col gap-5 rounded-xl shadow-md  ">
            <button
              className={
                activeTab === 1
                  ? "bg-blue-500 py-2 px-3 font-bold  text-white rounded-xl"
                  : "py-2 hover:bg-black px-3 hover:text-white rounded-xl border-l-2"
              }
              onClick={() => handleTabClick(1)}
            >
              My Profile
            </button>

            <button
              className={
                activeTab === 2
                ? "bg-blue-500 py-2 px-3 font-bold  text-white rounded-xl"
                : "py-2 hover:bg-black px-3 hover:text-white rounded-xl border-l-2"
            }
              onClick={() => handleTabClick(2)}
            >
              Security
            </button>
            {/* <button
              className={activeTab === 3 ? "active" : ""}
              onClick={() => handleTabClick(3)}
            >
              Rejected/Cancelled Requests
            </button> */}
          </div>

          <div className="tab-content lg:w-[85%]">
            {activeTab === 1 && (
              <p>
                <MyProfile />
              </p>
            )}
            {activeTab === 2 && (
              <p>
                <Security />
              </p>
            )}
            {/* {activeTab === 3 && (
              <p className="mt-10">
                <CancelledRequest />
              </p>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
