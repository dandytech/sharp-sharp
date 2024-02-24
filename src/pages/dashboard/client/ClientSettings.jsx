import { useState } from "react";
import MyProfile from "../../../ui/clientSettings/MyProfile";
import Security from "../../../ui/clientSettings/Security";
import KYC from "../../../ui/clientSettings/KYC";
import { NavLink, useNavigate } from "react-router-dom";
import { CiHome } from "react-icons/ci";

export default function ClientSettings() {
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="boder-2 inset-0 h-[100vh] overflow-y-auto pr-3 pt-[50px] shadow-md lg:w-[85%]">
      <div className="m-auto mb-5 mt-10 flex items-center px-5">
        <NavLink to="/">
          <CiHome />
        </NavLink>
        /
        <button onClick={() => navigate("/client/dashboard")}>dashboard</button>
        /<NavLink to="">Settings</NavLink>
      </div>
      <div className="m-auto justify-center p-3 text-center ">
        {" "}
        <p className="mb-10 pt-5 text-center text-[24px] font-bold lg:pb-10">
          Account Settings !!!
        </p>
        <div className="gap-10 lg:flex">
          <div className="flex justify-between gap-5 rounded-xl shadow-md lg:w-[10%] lg:flex-col lg:justify-start lg:pt-5">
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
            <button
              className={
                activeTab === 3
                  ? "rounded-xl bg-blue-500 px-3 py-2  font-bold text-white"
                  : "rounded-xl border-l-2 px-3 py-2 hover:bg-black hover:text-white"
              }
              onClick={() => handleTabClick(3)}
            >
              KYC
            </button>
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
            {activeTab === 3 && (
              <p>
                <KYC />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
