export const serviceProviders = [
  {
    id: 1,
    photo: "https://i.pravatar.cc/48?u=49934455214",
    name: {
      firstName: "Obi",
      lastName: "Godwin",
    },
    address: "3 Ogba rd, Ikeja Lagos",
    phone: "+234 8098287874",
    email: "obi@gmail.com",
    service: "Cleaner",
    charge: "NGN15000 per day",
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
    charge: "On Request",
    detail: "",
    requestTime: "10:30pm Wed. January 10, 2024",
    deliveryTime: "8:00am Sat. January 13, 2024",
  },

  {
    id: 3,
    photo: "https://i.pravatar.cc/48?u=4442232764",
    name: {
      firstName: "John",
      lastName: "Okechukwu",
    },
    address: "4 uba rd, Ikeja Lagos",
    phone: "+234 8228287874",
    email: "john@gmail.com",
    service: "Cook",
    charge: "NGN5000 per day",
    detail: "I need need a cook for my wedding",
    requestTime: "10:30pm Wed. January 10, 2024",
    deliveryTime: "8:00am Sat. January 13, 2024",
  },
  {
    id: 4,
    photo: "https://i.pravatar.cc/48?u=44545289124",
    name: {
      firstName: "Grace",
      lastName: "Umeh",
    },
    address: "4 uba rd, Ikeja Lagos",
    phone: "+234 8228287874",
    email: "grace@gmail.com",
    service: "Therapist",
    charge: "NGN50,000 per consultation",
    detail: "best",
    requestTime: "10:30pm Wed. January 10, 2024",
    deliveryTime: "8:00am Sat. January 13, 2024",
  },
  {
    id: 5,
    photo: "https://i.pravatar.cc/48?u=44428954764",
    name: {
      firstName: "Mary",
      lastName: "Olah",
    },
    address: "4 uba rd, Ikeja Lagos",
    phone: "+234 8228287874",
    email: "grace@gmail.com",
    service: "Nany",
    charge: "NGN4,500 per day",
    detail: "I deliver best",
    requestTime: "10:30pm Wed. January 10, 2024",
    deliveryTime: "8:00am Sat. January 13, 2024",
  },
];

import { GiTakeMyMoney } from "react-icons/gi";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import Modal from "../../../ui/Modal";
import { useMemo } from "react";
import Table from "../../../ui/Table";
import { MdStarRate } from "react-icons/md";

export default function ClientDashboard() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "photo",
        header: "Photo",
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
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "First Name",
        size: 170,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 170,
      },

      {
        accessorKey: "service",
        header: "Service",
        size: 170,
      },
      {
        accessorKey: "id",
        header: "Rate",
        size: 170,

        Cell: ({ row }) => (
          <div className="flex items-center">
            <span className="rounded-xl p-2 text-lg text-blue-500">
              <MdStarRate />
            </span>
            <button>+Add</button>
          </div>
        ),
      },
    ],
    [],
  );

  return (
    <Modal>
      <div className="boder-2 inset-0 h-[100vh] overflow-y-auto pr-3 pt-[100px] shadow-md lg:w-[85%]">
        <section>
          <div className="justify-between lg:flex">
            <div className="lg:w-[70%]">
              <div className="items-center justify-between gap-3 px-5 text-black lg:flex">
                <div className="flex  justify-center space-y-3 rounded-lg border-2 bg-blue-200 p-5 text-center  shadow-md hover:bg-blue-500 hover:text-white">
                  <div className="flex justify-start gap-1">
                    <div className="border-2-gray-500 flex h-[90px] w-[90px] items-center rounded-full border-2 bg-blue-500 p-2 text-[100px] text-white">
                      <AiOutlineDeliveredProcedure />
                    </div>
                    <div className="space-y-4">
                      <p className="rounded-md rounded-b-none border-4 border-b-0 px-2 font-semibold">
                        Total Requests
                      </p>
                      <span className="font-light">From 10th Jan. 2024</span>
                      <p className="rounded-md rounded-t-none border-2 border-t-0">
                        42
                      </p>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex justify-center space-y-3 rounded-lg border-2 bg-gray-100  p-5 text-center  shadow-md hover:bg-blue-500 hover:text-white">
                  <div className="flex justify-start gap-1">
                    <div className="border-2-gray-500 flex h-[90px] w-[90px] items-center rounded-full border-2 bg-blue-500 p-2 text-[100px] text-white">
                      <GiTakeMyMoney />
                    </div>
                    <div className="space-y-4">
                      <p className="rounded-md rounded-b-none border-4 border-b-0 px-2 font-semibold">
                        Amount Paid
                      </p>
                      <span className="font-light">From 10th Jan. 2024</span>
                      <p className="rounded-md rounded-t-none border-2 border-t-0">
                        N501,000.00k
                      </p>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex justify-center space-y-3 rounded-lg border-2 bg-green-100  p-5 text-center  shadow-md hover:bg-blue-500 hover:text-white">
                  <div className="flex justify-start gap-1">
                    <div className="border-2-gray-500 flex h-[90px] w-[90px] items-center rounded-full border-2 bg-blue-500 p-2 text-[100px] text-white">
                      <VscGitPullRequestNewChanges />
                    </div>
                    <div className="space-y-4">
                      <p className="rounded-md rounded-b-none border-4 border-b-0 px-2 font-semibold">
                        Completed Services
                      </p>
                      <span className="font-light">From 10th Jan. 2024</span>
                      <p className="rounded-md rounded-t-none border-2 border-t-0">
                        39
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </div>

              <div className="mt-5 border-t-2 px-5 py-10">
                <div className="flex items-center justify-between px-2 font-semibold">
                  <p>My Recent Providers</p>
                  <p>View All</p>
                </div>

                <div>
                  <Table data={serviceProviders} columns={columns} />
                </div>
              </div>
            </div>

            <div className=" lg:w-[30%]">
              <div>
                <LineChart />
              </div>
              <div className="mt-10">
                <PieChart />
              </div>
            </div>
          </div>
        </section>
        {/* <Modal.Open opens="check">
          <MyButton>Open</MyButton>
        </Modal.Open>

        <Modal.Window name="check">
          <div className="h-20 w-20">OPENING NOW</div>
        </Modal.Window> */}
      </div>
    </Modal>
  );
}
