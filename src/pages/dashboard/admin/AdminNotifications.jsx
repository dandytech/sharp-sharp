import { useState } from "react";
import AllNotifications from "../../../ui/adminNotifications/AllNotifications";
import UnreadNotifications from "../../../ui/adminNotifications/UnreadNotifications";

export default function AdminNotifications() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="servicebg z-0 h-[100vh] overflow-y-auto text-center lg:w-[85%]">
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
