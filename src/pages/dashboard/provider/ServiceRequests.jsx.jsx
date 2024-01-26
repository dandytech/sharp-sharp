import { useState } from "react";
import NewRequest from "../../../ui/providerRequests/NewRequests";
import OngoingRequests from "../../../ui/providerRequests/OngoingRequests";
import CancelledRequest from "../../../ui/providerRequests/CancelledRequest";

export default function ServiceRequests() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="servicebg mt-[80px] w-[100%] shadow-lg">
      <div className="m-auto justify-center p-3 text-center shadow-2xl  lg:p-10 ">
        {" "}
        <p className="mb-10 pt-0 text-center text-[24px] font-bold lg:pb-10">
          Service Request Details !!!
        </p>
        <div>
          <div className="tab-buttons ">
            <button
              className={activeTab === 1 ? "active" : " "}
              onClick={() => handleTabClick(1)}
            >
              New Requests
            </button>

            <button
              className={activeTab === 2 ? "active" : ""}
              onClick={() => handleTabClick(2)}
            >
              Ongoing/Accepted Requests
            </button>
            <button
              className={activeTab === 3 ? "active" : ""}
              onClick={() => handleTabClick(3)}
            >
              Rejected/Cancelled Requests
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 1 && (
              <p>
                <NewRequest />
              </p>
            )}
            {activeTab === 2 && (
              <p className="mt-10">
                <OngoingRequests
                  handleTabClick={handleTabClick}
                  activeTab={activeTab}
                />
              </p>
            )}
            {activeTab === 3 && (
              <p className="mt-10">
                <CancelledRequest />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
