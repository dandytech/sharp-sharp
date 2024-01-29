import { useState } from "react";
import MyProfile from "../../../ui/providerSettings/MyProfile";
import Security from "../../../ui/providerSettings/Security";

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="servicebg h-[100vh] overflow-y-auto text-center lg:w-[85%] lg:pr-10 ">
      <div className="m-auto justify-center p-3 text-center ">
        {" "}
        <p className="mb-10 lg:pt-20 pt-10 text-center text-[24px] font-bold lg:pb-10">
        Admin Account Settings !!!
        </p>
        <div className="gap-10 lg:flex">
          <div className="flex  gap-5 rounded-xl shadow-md lg:w-[15%] lg:flex-col  ">
            <button
              className={
                activeTab === 1
                  ? "rounded-xl bg-blue-500 px-3 py-2  font-bold text-white"
                  : "rounded-xl border-l-2 px-3 py-2 hover:bg-black hover:text-white"
              }
              onClick={() => handleTabClick(1)}
            >
              My Profile
            </button>

            <button
              className={
                activeTab === 2
                  ? "rounded-xl bg-blue-500 px-3 py-2  font-bold text-white"
                  : "rounded-xl border-l-2 px-3 py-2 hover:bg-black hover:text-white"
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
