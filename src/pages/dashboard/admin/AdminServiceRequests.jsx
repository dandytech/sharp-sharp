import { useMemo, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllRequests from "../../../ui/admin/serviceRequests/AllRequests";
import PendingRequests from "../../../ui/admin/serviceRequests/PendingRequests";
import OngoingRequests from "../../../ui/admin/serviceRequests/OngoingRequests";
import CompletedRequests from "../../../ui/admin/serviceRequests/CompletedRequests";
import CancelledRequests from "../../../ui/admin/serviceRequests/CancelledRequests";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";

export const requests = [
  {
    id: 1,

    service: "Car Wash",
    charge: 10000,
    description: "Washing and cleaning of a car",
    client: "Daniel Amaechi",
    email: "dannkwo@gmail.com",
    phone: "+23470651234787",
    address: "2 metalbox Rd, ikeja",
    requestTime: "12:00pm, Feb. 2, 2024",
    serviceTime: "10:00am, Feb. 4, 2024",
    status: "pending",
  },
  {
    id: 2,
    service: "House Cleaning",
    charge: 7000,
    description: "Washing and cleaning of a car",
    client: "Daniel Amaechi",
    email: "dannkwo@gmail.com",
    phone: "+23470651234787",
    address: "2 metalbox Rd, ikeja",
    requestTime: "12:00pm, Feb. 2, 2024",
    serviceTime: "10:00am, Feb. 4, 2024",
    status: "completed",
  },
  {
    id: 3,
    service: "AC Installation",
    charge: 15000,
    description: "Washing and cleaning of a car",
    client: "Daniel Amaechi",
    email: "dannkwo@gmail.com",
    phone: "+23470651234787",
    address: "2 metalbox Rd, ikeja",
    requestTime: "12:00pm, Feb. 2, 2024",
    serviceTime: "10:00am, Feb. 4, 2024",
    status: "ongoing",
  },
  {
    id: 4,

    service: "Hair Cut",
    charge: 5000,
    description: "Washing and cleaning of a car",
    client: "Daniel Amaechi",
    email: "dannkwo@gmail.com",
    phone: "+23470651234787",
    address: "2 metalbox Rd, ikeja",
    requestTime: "12:00pm, Feb. 2, 2024",
    serviceTime: "10:00am, Feb. 4, 2024",
    status: "cancelled",
  },
];

export default function AdminServiceRequests() {
  const [activeTab, setActiveTab] = useState(1);
  //const [requests, setRequests] = useState(requests);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "client",
        header: "Client Name",
        size: 150,
      },
      {
        accessorKey: "phone", //access nested data with dot notation
        header: "Phone",
        size: 10,
      },
      {
        accessorKey: "service", //access nested data with dot notation
        header: "Service",
        size: 150,
      },
      {
        accessorKey: "charge",
        header: "Charge",
        size: 150,
      },

      {
        accessorKey: "description",
        header: "Description",
        size: 180,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 180,
      },
    ],
    [],
  );
  const navigate = useNavigate();

  return (
    <div className="servicebg h-[100vh] overflow-y-auto px-5 pt-[80px] lg:w-[84%] lg:pr-10">
      <div className="m-auto flex items-center px-5 pb-10">
        <NavLink to="/">
          <CiHome />
        </NavLink>
        /<button onClick={() => navigate("/admin/dashboard")}>dashboard</button>
        /<NavLink to="">requests</NavLink>
      </div>
      <div>
        <div className="tab-buttons">
          <div className="font-bold">
            <button
              className={` ${activeTab === 1 ? "active" : " "}`}
              onClick={() => handleTabClick(1)}
            >
              All Requests
            </button>
          </div>

          <div className="font-bold">
            <button
              className={`${activeTab === 2 ? "active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              Pending Requests
            </button>
          </div>

          <div className="font-bold">
            <button
              className={`${activeTab === 3 ? "active" : ""}`}
              onClick={() => handleTabClick(3)}
            >
              Ongoing Requests
            </button>
          </div>

          <div className="font-bold">
            <button
              className={`${activeTab === 4 ? "active" : ""}`}
              onClick={() => handleTabClick(4)}
            >
              Completed Requests
            </button>
          </div>

          <div className="font-bold">
            <button
              className={`${activeTab === 5 ? "active" : ""}`}
              onClick={() => handleTabClick(5)}
            >
              Cancelled Requests
            </button>
          </div>
        </div>

        <div className="tab-content">
          {activeTab === 1 && (
            <div className="lag:mt-0 mt-10">
              <div>
                <AllRequests data={requests} columns={columns} />
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="lag:mt-0 mt-10">
              <div>
                <PendingRequests data={requests} columns={columns} />
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div className="lag:mt-0 mt-10">
              <div>
                <OngoingRequests data={requests} columns={columns} />
              </div>
            </div>
          )}

          {activeTab === 4 && (
            <div className="lag:mt-0 mt-10">
              <div>
                <CompletedRequests data={requests} columns={columns} />
              </div>
            </div>
          )}

          {activeTab === 5 && (
            <div className="lag:mt-0 mt-10">
              <div>
                {" "}
                <CancelledRequests data={requests} columns={columns} />
              </div>
            </div>
          )}

          <div className="">
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition:Bounce
              ToastContainer
            />
          </div>
        </div>
      </div>
    </div>
  );
}
