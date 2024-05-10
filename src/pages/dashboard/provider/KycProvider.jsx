import { useState } from "react";
import "../../../index.css";
import GeneralInfo from "../../../ui/kycProvider/GeneralInfo";
import ServiceInfo from "../../../ui/kycProvider/ServiceInfo";
import BankInfo from "../../../ui/kycProvider/BankInfo";

export default function KycProvider({ serviceColumns, providerServices }) {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="z-0 mt-5 rounded-xl border-2 p-5 py-5 text-center lg:py-10">
      {" "}
      <p className="mb-10 pt-0 text-center text-lg font-bold ">
        Complete Your KYC As Service Provider !!!
      </p>
      <div>
        <div className="tab-buttons">
          <button
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            General Info
          </button>

          <button
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            Service Info
          </button>
          <button
            className={activeTab === 3 ? "active" : ""}
            onClick={() => handleTabClick(3)}
          >
            Bank Account Info
          </button>
        </div>

        <form>
          <div className="tab-content">
            {activeTab === 1 && (
              <p>
                <GeneralInfo handleTabClick={handleTabClick} />
              </p>
            )}
            {activeTab === 2 && (
              <p>
                <ServiceInfo
                  handleTabClick={handleTabClick}
                  providerServices={providerServices}
                  serviceColumns={serviceColumns}
                />
              </p>
            )}
            {activeTab === 3 && (
              <p>
                <BankInfo handleTabClick={handleTabClick} />
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
