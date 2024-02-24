import { useState } from "react";
import AllNotifications from "../../../ui/adminNotifications/AllNotifications";
import UnreadNotifications from "../../../ui/adminNotifications/UnreadNotifications";
import { NavLink, useNavigate } from "react-router-dom";
import { CiHome } from "react-icons/ci";

export default function ProvidersNotifications() {
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="servicebg mt-[80px] h-[100vh] w-[100%] overflow-y-auto shadow-2xl ">
      <div className="m-auto mb-5 mt-20 flex items-center px-5">
        <NavLink to="/">
          <CiHome />
        </NavLink>
        /
        <button onClick={() => navigate("/provider/dashboard")}>dashboard</button>
        /<NavLink to="">Notification</NavLink>
      </div>
      <div className="m-auto justify-center p-3 text-center ">
        {" "}
        <p className="mb-10 pt-5 text-center text-[24px] font-bold lg:pb-10">
          Notifications !!!
        </p>
        <div>
          <div className="tab-buttons">
            <button
              className={activeTab === 1 ? "active relative" : " relative"}
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
                {" "}
                <AllNotifications />
              </p>
            )}
            {activeTab === 2 && (
              <p className="mt-10">
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
