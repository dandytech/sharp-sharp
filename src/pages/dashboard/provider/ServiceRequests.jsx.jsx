import { useState } from "react";
import NewRequest from "../../../ui/providerRequests/NewRequests";
import OngoingRequests from "../../../ui/providerRequests/OngoingRequests";
import CancelledRequest from "../../../ui/providerRequests/CancelledRequest";
import { NavLink, useNavigate } from "react-router-dom";
import { CiHome } from "react-icons/ci";

export default function ServiceRequests() {
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="servicebg w-[100%]  pt-[150px]">
      <div className="m-auto mb-7 flex items-center px-5">
        <NavLink to="/">
          <CiHome />
        </NavLink>
        /
        <button onClick={() => navigate("/provider/dashboard")}>dashboard</button>
        /<NavLink to="">Requests</NavLink>
      </div>


      <div className="m-auto justify-center p-3 text-center shadow-2xl  lg:p-10 ">
        {" "}
        <p className="mb-10 text-center text-[24px] font-bold lg:pb-10">
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
