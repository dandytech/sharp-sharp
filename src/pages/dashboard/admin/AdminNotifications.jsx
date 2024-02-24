import { useState } from "react";
import AllNotifications from "../../../ui/adminNotifications/AllNotifications";
import UnreadNotifications from "../../../ui/adminNotifications/UnreadNotifications";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";

export default function AdminNotifications() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const navigate = useNavigate();

  return (
    <div className="servicebg z-0 h-[100vh] overflow-y-auto text-center lg:w-[84%]">
      <div className="m-auto mt-20 flex items-center px-5 lg:w-[70%]">
        <NavLink to="/">
          <CiHome />
        </NavLink>
        /<button onClick={() => navigate("/admin/dashboard")}>dashboard</button>
        /<NavLink to="">notifications</NavLink>
      </div>

      <div className="justify-center p-3 text-center">
        <p className="mb-10 pt-10 text-center text-[24px] font-bold lg:pb-10 lg:pt-20">
          Admin Notifications !!!
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
