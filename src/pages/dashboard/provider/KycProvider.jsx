import { useState } from "react";
import "../../../index.css";
import GeneralInfo from "../../../ui/kycProvider/GeneralInfo";
import ServiceInfo from "../../../ui/kycProvider/ServiceInfo";
import BankInfo from "../../../ui/kycProvider/BankInfo";

export default function KycProvider() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="servicebg mt-[80px] w-[100%]">
      <div className="m-auto justify-center p-3 text-center shadow-2xl  lg:p-10 ">
        {" "}
        <p className="mb-10 pt-0 text-center text-[24px] font-bold lg:pb-10">
          Complete Your KYC As A Service Provider !!!
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
                  <ServiceInfo handleTabClick={handleTabClick} />
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
    </div>
  );
}
