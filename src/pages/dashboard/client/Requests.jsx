import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tooltip,
} from "@material-tailwind/react";
import Table from "../../../ui/Table";

const serviceRequest = [
  {
    id: 1,
    service: "House Clenaing",
    charge: 5000,
    quantity: 1,
    requestTime: "05/02/2024, 10:24 AM",
    deliveryTime: "06/02/2024, 10: 00AM",
    provider: "John Olamide",
    providerPhone: "+234 7076765653",
    photo: "https://i.pravatar.cc/48?u=4442896764",
  },
  {
    id: 2,
    service: "Cook",
    charge: 5000,
    quantity: 1,
    requestTime: "05/02/2024, 10:24 AM",
    deliveryTime: "06/02/2024, 10: 00AM",
    provider: "Mary Oko",
    providerPhone: "+234 7076765653",
    photo: "https://i.pravatar.cc/48?u=444322896764",
  },
  {
    id: 3,
    service: "Car Wash",
    charge: 5000,
    quantity: 2,
    requestTime: "10/02/2024, 10:24 AM",
    deliveryTime: "11/02/2024, 10: 00AM",
    provider: "John Olamide",
    providerPhone: "+234 7076765653",
    photo: "https://i.pravatar.cc/48?u=4442896764",
  },
  {
    id: 4,
    service: "Haircut",
    charge: 10000,
    quantity: 10,
    requestTime: "13/02/2024, 10:24 AM",
    deliveryTime: "20/02/2024, 10: 00AM",
    provider: "Daniel Ben",
    providerPhone: "+234 7076765653",
    photo: "https://i.pravatar.cc/48?u=445642896764",
  },
  {
    id: 5,
    service: "AC Installation",
    charge: 20000,
    quantity: 10,
    requestTime: "23/02/2024, 10:24 AM",
    deliveryTime: "20/02/2024, 10: 00AM",
    provider: "Kenneth Ola",
    providerPhone: "+234 7076765653",
    photo: "https://i.pravatar.cc/48?u=4456355896764",
  },
  {
    id: 6,
    service: "Car Servicing",
    charge: 20000,
    quantity: 10,
    requestTime: "23/02/2024, 10:24 AM",
    deliveryTime: "20/02/2024, 10: 00AM",
    provider: "Onila Berry",
    providerPhone: "+234 7076765653",
    photo: "https://i.pravatar.cc/48?u=4456355896764",
  },
];

import { useMemo, useState } from "react";
import MyButton from "../../../ui/MyButton";
import { FaCartPlus, FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { HiFolderDownload } from "react-icons/hi";
import jsPDF from "jspdf";

export default function Requests() {
  const columns = useMemo(() => [
    {
      accessorKey: "photo",
      header: "Provider",
      size: 150,
      Cell: ({ row }) => (
        <img
          src={row.original.photo}
          alt={row.original.photo}
          width="50"
          className="rounded-full"
        />
      ),
    },

    {
      accessorKey: "provider", //access nested data with dot notation
      header: "Name",
      size: 150,
    },
    {
      accessorKey: "providerPhone", //access nested data with dot notation
      header: "Phone",
      size: 150,
    },
    {
      accessorKey: "service", //access nested data with dot notation
      header: "Service",
      size: 200,
    },
    {
      accessorKey: "charge", //access nested data with dot notation
      header: "Charge",
      size: 150,
    },
    {
      accessorKey: "requestTime", //access nested data with dot notation
      header: "Request Time",
      size: 180,
    },
    {
      accessorKey: "deliveryTime", //access nested data with dot notation
      header: "Delivery Time",
      size: 180,
    },
    {
      accessorKey: "id", //access nested data with dot notation
      header: "Action",
      size: 150,
      Cell: ({ row }) => (
        <div>
          <Menu>
            <MenuHandler>
              <Button className="bg-style text-black shadow-none">
                {" "}
                <span>
                  <FaEllipsisV />
                </span>
              </Button>
            </MenuHandler>
            <MenuList className="z-[1000] mt-[-80px] space-y-3">
              <MenuItem>View Details</MenuItem>
              <MenuItem>Cancel Service</MenuItem>
              <MenuItem>Reschedule Time</MenuItem>
            </MenuList>
          </Menu>
        </div>
      ),
    },
  ]);

  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  //Download Table
  const downloadAsPDF = () => {
    const doc = new jsPDF();
    doc.text("NEW SERVICE REQUESTS", 20, 10);
    doc.autoTable({
      head: [
        [
          "S/N",
          "Service",
          "Charge",
          "Qty",
          "Request Time",
          "Delivery time",
          "Provider",
          "Phone",
        ],
      ],
      body: serviceRequest.map((item) => [
        item.id,
        item.service,
        item.charge,
        item.quantity,
        item.requestTime,
        item.deliveryTime,
        item.provider,
        item.providerPhone,
      ]),
    });

    doc.save("sharpapp-service-providers.pdf");
  };

  const buttonStyle =
    "border-2 px-4 py-2 text-sm md:text-md w-full lg:text-lg bg-gray-300 text-black";
  const activeButtonstyle =
    "bg-blue-500 text-sm md:text-md w-full lg:text-lg px-4 py-2 text-white font-semibold";

  return (
    <div className="boder-2 inset-0 h-[100vh] overflow-y-auto pr-3 pt-[50px] shadow-md lg:w-[85%]">
      {" "}
      <div className="flex items-center px-5 pt-5 pb-7 ">
        <NavLink to="/">
          <CiHome />
        </NavLink>
        /
        <button onClick={() => navigate("/client/dashboard")}>dashboard</button>
        /<NavLink to="">Requests</NavLink>
      </div>
      <div className="mb-10 flex items-center justify-between px-5 ">
        <span className="lg:w-[45%]">
          <hr />
        </span>
        <span>
          {" "}
          <MyButton type="primary" onClick={() => navigate("/services")}>
            <p className="flex items-center gap-1">
              <span>
                <FaCartPlus />
              </span>{" "}
              <span>Request service</span>
            </p>
          </MyButton>
        </span>
        <span className="lg:w-[40%]">
          <hr />
        </span>
      </div>
      <div className="items-center justify-between gap-1 space-y-3 border-t-2 px-5 shadow-md lg:flex lg:space-y-0">
        <button
          className={` ${activeTab === 1 ? activeButtonstyle : buttonStyle}`}
          onClick={() => handleTabClick(1)}
        >
          New Requests
        </button>
        <button
          className={` ${activeTab === 2 ? activeButtonstyle : buttonStyle}`}
          onClick={() => handleTabClick(2)}
        >
          Ongoing Requests
        </button>
        <button
          className={` ${activeTab === 3 ? activeButtonstyle : buttonStyle}`}
          onClick={() => handleTabClick(3)}
        >
          Completed Requests
        </button>
        <button
          className={` ${activeTab === 4 ? activeButtonstyle : buttonStyle}`}
          onClick={() => handleTabClick(4)}
        >
          Cancelled Requests
        </button>
      </div>
      <div className="px-7 pt-10">
        {activeTab === 1 && (
          <div>
            <div className="px-3 text-right text-2xl">
              {" "}
              <button onClick={downloadAsPDF}>
                <Tooltip content="Download in PDF">
                  <span>
                    <HiFolderDownload />
                  </span>
                </Tooltip>
              </button>
            </div>
            <Table data={serviceRequest} columns={columns} />
          </div>
        )}{" "}
        {activeTab === 2 && <div>Ongoing requests</div>}
        {activeTab === 3 && <div>Completed requests</div>}
        {activeTab === 4 && <div>cancelled requests</div>}
      </div>
    </div>
  );
}
