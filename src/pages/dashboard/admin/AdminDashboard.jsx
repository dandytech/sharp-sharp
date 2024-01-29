export const serviceRequests = [
  {
    id: 1,
    photo: "https://i.pravatar.cc/48?u=49934214",
    name: {
      firstName: "Obi",
      lastName: "Godwin",
    },
    address: "3 Ogba rd, Ikeja Lagos",
    phone: "+234 8098287874",
    email: "obi@gmail.com",
    service: "Tailor",
    detail: "I want to sow up and down senate cotton",
    requestTime: "10:30pm Wed. January 11, 2024",
    deliveryTime: "8:00am Sat. January 13, 2024",
  },

  {
    id: 2,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    name: {
      firstName: "John",
      lastName: "Okechukwu",
    },
    address: "4 uba rd, Ikeja Lagos",
    phone: "+234 8228287874",
    email: "john@gmail.com",
    service: "Cleaner",
    detail: "I need want you to type 10 pages document within 1hr",
    requestTime: "10:30pm Wed. January 10, 2024",
    deliveryTime: "8:00am Sat. January 13, 2024",
  },

  {
    id: 3,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    name: {
      firstName: "John",
      lastName: "Okechukwu",
    },
    address: "4 uba rd, Ikeja Lagos",
    phone: "+234 8228287874",
    email: "john@gmail.com",
    service: "Cook",
    detail: "I need need a cook for my wedding",
    requestTime: "10:30pm Wed. January 10, 2024",
    deliveryTime: "8:00am Sat. January 13, 2024",
  },
  {
    id: 4,
    photo: "https://i.pravatar.cc/48?u=445452896764",
    name: {
      firstName: "Grace",
      lastName: "Umeh",
    },
    address: "4 uba rd, Ikeja Lagos",
    phone: "+234 8228287874",
    email: "grace@gmail.com",
    service: "Therapist",
    detail: "I need a Therapist for my son of age 21",
    requestTime: "10:30pm Wed. January 10, 2024",
    deliveryTime: "8:00am Sat. January 13, 2024",
  },
];

import { BsGraphUpArrow } from "react-icons/bs";

import { VscGraph } from "react-icons/vsc";

import Modal from "../../../ui/Modal";
import { Tooltip } from "@material-tailwind/react";
import { IoLocationSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { RiUserSearchFill } from "react-icons/ri";
import AdminViewRecentRequests from "../../../ui/AdminViewRecentRequests";

export default function AdminDashboard() {
  return (
    <Modal>
      <div className="servicebg h-[100vh] overflow-y-auto px-5 pt-[60px] lg:w-[85%] lg:pr-10">
        <div className="rounded-xl border-2 bg-blue-500 px-7 py-10 text-sm text-white shadow-md">
          <p>Total Services Amount</p>
          <p className="font-semibod py-2 text-xl">$8,898,878,073.00</p>
          <p>
            71 Services Providers has Rendered 349 Services As AT 8th January,
            2024{" "}
          </p>
        </div>

        <div className="items-center justify-between gap-5 lg:flex">
          <div className="flex flex-col gap-3 pt-5 lg:w-[65%]">
            <div className="justify-between gap-2 space-y-4 md:space-y-0 lg:flex lg:space-y-0 ">
              <div className="space-y-7 rounded-xl border-2 px-7 py-5 shadow-md lg:w-[50%]">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-gray-400">SERVICES DELIVERED</span>
                  <span className="font-semibod text-xl text-blue-500">
                    <BsGraphUpArrow />
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xl font-semibold">456,77</div>
                  <div className="font-semibod flex flex-col items-end justify-start text-xl text-blue-500">
                    <p>
                      <VscGraph />
                    </p>
                    <p>+56%</p>
                  </div>
                </div>
              </div>

              <div className="space-y-7 rounded-xl border-2 px-7 py-5 shadow-md lg:w-[50%]">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-gray-400">TOTAL SERVICES</span>
                  <span className="font-semibod text-xl text-blue-500">
                    {" "}
                    <BsGraphUpArrow />
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xl font-semibold">457,782</div>
                  <div className="font-semibod flex flex-col items-end justify-start text-xl text-blue-500">
                    <p>
                      <VscGraph />
                    </p>
                    <p>+16%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="justify-between gap-2 space-y-4 md:space-y-0 lg:flex lg:space-y-0">
              <div className=" space-y-7 rounded-xl border-2 px-7 py-5 shadow-md lg:w-[50%]">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-gray-400">TOTAL USERS</span>
                  <span className="font-semibod text-xl text-blue-500">
                    {" "}
                    <BsGraphUpArrow />
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xl font-semibold">453,782, 5</div>
                  <div className="font-semibod flex flex-col items-end justify-start text-xl text-blue-500">
                    <p>
                      <VscGraph />
                    </p>
                    <p>+45%</p>
                  </div>
                </div>
              </div>
              <div className="space-y-7 rounded-xl border-2 px-7 py-5 shadow-md lg:w-[50%]">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-gray-400">TOTAL PROVIDERS</span>
                  <span className="font-semibod text-xl text-blue-500">
                    {" "}
                    <BsGraphUpArrow />
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xl font-semibold">79,35</div>
                  <div className="font-semibod flex flex-col items-end justify-start text-xl text-blue-500">
                    <p>
                      <VscGraph />
                    </p>
                    <p>+15%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10  border-2 shadow-md lg:mt-5 lg:w-[35%]">
            <p className="bg-black px-5 py-3 font-bold text-white">
              RECENT REQUESTS
            </p>

            <div className="h-[240px] space-y-5 overflow-y-auto p-5">
              {serviceRequests.map((serviceRequest, index) => (
                <div
                  key={index}
                  className={`space-y-1 border-l-4 border-l-blue-500 px-2 transition-transform  duration-300 ease-in hover:scale-110 hover:bg-blue-500 hover:p-3  hover:text-white ${
                    serviceRequest?.id == 2
                      ? "border-l-green-500 "
                      : serviceRequest?.id == 4
                        ? "border-l-yellow-500 "
                        : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center  justify-start gap-2">
                        <span>
                          <RiUserSearchFill />
                        </span>
                        <span>
                          {serviceRequest?.name.firstName}{" "}
                          {serviceRequest.name.lastName}
                        </span>
                      </div>
                      <div className="flex items-center justify-start gap-2">
                        <span>
                          <MdMedicalServices />
                        </span>
                        <span>{serviceRequest?.service}</span>
                      </div>
                      <div className="flex items-center justify-start gap-2">
                        <span>
                          <IoLocationSharp />
                        </span>
                        <span>{serviceRequest?.address}</span>
                      </div>
                    </div>
                    <Tooltip content="View details">
                      <div className="px-5">
                        <Modal.Open opens="requestdetails">
                          <button className="shadow-none">
                            <FaEye />
                          </button>
                        </Modal.Open>
                      </div>
                    </Tooltip>
                  </div>

                  <Modal.Window name="requestdetails">
                    <AdminViewRecentRequests serviceRequest={serviceRequest} />
                  </Modal.Window>

                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 items-center justify-between space-y-5 gap-5 lg:flex">
          <div className="p-5 shadow-md lg:w-[70%]">BarChart</div>
          <div className="p-5  shadow-md lg:w-[30%]">Pie Chart</div>
        </div>
      </div>
    </Modal>
  );
}
