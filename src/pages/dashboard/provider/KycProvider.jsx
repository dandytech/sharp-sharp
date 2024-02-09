import { useMemo, useState } from "react";
import "../../../index.css";
import GeneralInfo from "../../../ui/kycProvider/GeneralInfo";
import ServiceInfo from "../../../ui/kycProvider/ServiceInfo";
import BankInfo from "../../../ui/kycProvider/BankInfo";
import ServiceActions from "../../../ui/kycProvider/ServiceActions";

//nested data is ok, see accessorKeys in ColumnDef below
const serviceData = [
  {
    id: 1,
    name: "UX/UX",
    price: "N300-N500",
    description: "design of prototype",
  },
  {
    id: 2,
    name: "Frontend",
    price: "N500-N50100",
    description: "design of Frontend",
  },
  {
    id: 3,
    name: "API",
    price: "N3000-N5000",
    description: "Creation & Integration of APIs",
  },
];

export default function KycProvider() {
  //should be memoized or stable
  const serviceColumns = useMemo(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "S/N",
        size: 10,
      },
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Service Type",
        size: 200,
      },
      {
        accessorKey: "price", //access nested data with dot notation
        header: "Price Range",
        size: 200,
      },
      {
        accessorKey: "description",
        header: "Service Description",
        size: 250,
      },

      {
        accessorKey: "id",
        header: "Action",
        size: 170,

        Cell: ({ row }) => <ServiceActions row={row.original} />,
      },
    ],
    [],
  );

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
  
    <div className="z-0 rounded-xl py-5 text-center lg:py-10 border-2 p-5 mt-5">
        {" "}
        <p className="mb-10 pt-0 text-center text-lg font-bold ">
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
                  <ServiceInfo
                    handleTabClick={handleTabClick}
                    serviceData={serviceData}
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
