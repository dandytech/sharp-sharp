import { useState } from "react";

import AllNotifications from "../../../ui/clientsNotifications/AllNotifications";
import UnreadNotifications from "../../../ui/clientsNotifications/UnreadNotifications";
import { NavLink, useNavigate } from "react-router-dom";
import { CiHome } from "react-icons/ci";

export default function ClientNotifications() {
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="boder-2 inset-0 h-[100vh] overflow-y-auto pr-3  shadow-md lg:w-[85%]">

      <div className="flex items-center mt-20 px-5 lg:w-[70%] m-auto">
        <NavLink to="/">
          <CiHome />
        </NavLink>
        /
        <button onClick={() => navigate("/client/dashboard")}>dashboard</button>
        /<NavLink to="">Notification</NavLink>
      </div>

      <div className="justify-center p-3 text-center">
        <p className="mb-10 pt-10 text-center text-[24px] font-bold lg:pb-10 lg:pt-10">
          Client Notifications !!!
        </p>
        <div>
          <div className="tab-buttons">
            <button
              className={activeTab === 1 ? "active " : " "}
              onClick={() => handleTabClick(1)}
            >
              All Notifications
            </button>

            <button
              className={activeTab === 2 ? "active" : ""}
              onClick={() => handleTabClick(2)}
            >
              Unread Notifications
            </button>
            {/* <button
                className={activeTab === 3 ? "active" : ""}
                onClick={() => handleTabClick(3)}
              >
                Rejected/Cancelled Requests
              </button> */}
          </div>

          <div className="tab-content">
            {activeTab === 1 && (
              <p>
                <AllNotifications />
              </p>
            )}
            {activeTab === 2 && (
              <p className="mt-10 lg:mt-0">
                <UnreadNotifications />
              </p>
            )}
            {/* {activeTab === 3 && <p className="mt-10">Cancelled Requests</p>} */}
          </div>
        </div>
      </div>
    </div>
  );
}
