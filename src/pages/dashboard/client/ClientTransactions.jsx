import { useMemo } from "react";
import Table from "../../../ui/Table";
import { NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import Modal from "../../../ui/Modal";

import { FaRegEye } from "react-icons/fa";
import { Tooltip } from "@material-tailwind/react";

export const transactions = [
  {
    id: 1,
    date: "03/02/2024",
    transactiontype: "Service",
    amount: "15000",
    transactionid: "SHA/SER/CLE/90949",
    status: "paid",
  },

  {
    id: 2,
    date: "03/01/2024",
    transactiontype: "Service",
    amount: "25000",
    transactionid: "SHA/SER/CLE/9023949",
    status: "paid",
  },

  {
    id: 3,
    date: "03/02/2024",
    transactiontype: "Service",
    amount: "1000",
    transactionid: "SHA/SER/CLE/9023949",
    status: "paid",
  },
  {
    id: 4,
    date: "05/02/2024",
    transactiontype: "Service",
    amount: "13000",
    transactionid: "SHA/SER/CLE/9012949",
    status: "paid",
  },
  {
    id: 5,
    date: "07/02/2024",
    transactiontype: "Service",
    amount: "34000",
    transactionid: "SHA/SER/CLE/902349",
    status: "paid",
  },
];

export default function ClientTransactions() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "SN",
        size: 110,
      },

      {
        accessorKey: "transactionid",
        header: "Transaction ID",
        size: 240,
      },
      {
        accessorKey: "transactiontype",
        header: "Type",
        size: 150,
      },

      {
        accessorKey: "amount",
        header: "Amount",
        size: 170,
      },
      {
        accessorKey: "date",
        header: "Date",
        size: 170,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 170,
      },
      {
        accessorKey: "id",
        header: "Action",
        size: 170,
        Cell: ({ row }) => (
          <div>
            <Modal>
              <div className="flex items-center">
                <Modal.Open opens="view">
                  <button className="">
                    <Tooltip content="View Details">
                      <p>
                        {" "}
                        <FaRegEye />
                      </p>
                    </Tooltip>
                  </button>
                </Modal.Open>
              </div>
              <div>
                <Modal.Window name="view">
                  <div className="w-[290px] md:w-[600px] lg:w-[800px]">
                    <p className="mb-5 mt-5 bg-black py-2 text-center text-white">
                      Transaction Details
                    </p>
                    <div className="flex flex-col gap-5">
                      <p>
                        <span className="font-light">Transaction ID:</span>{" "}
                        <span>{row.original.transactionid}</span>
                      </p>
                      <p>
                        <span className="font-light">Transaction Type:</span>{" "}
                        <span>{row.original.transactiontype}</span>
                      </p>
                      <p>
                        <span className="font-light">Amount:</span>{" "}
                        <span>{row.original.amount}</span>
                      </p>
                      <p>
                        <span className="font-light"> Date:</span>{" "}
                        <span>{row.original.date}</span>
                      </p>
                      <p>
                        <span className="font-light">Status:</span>{" "}
                        <span className="text-green-500">
                          {row.original.status}
                        </span>
                      </p>
                    </div>
                  </div>
                </Modal.Window>
              </div>
            </Modal>
          </div>
        ),
      },
    ],
    [],
  );

  return (
    <div className="boder-2 inset-0 h-[100vh] overflow-y-auto pr-3 pt-[50px] shadow-md lg:w-[85%]">
      <div className="mb-12 flex items-center px-6">
        <NavLink to="/">
          <CiHome />
        </NavLink>
        /<NavLink to="/dashboard">dashboard</NavLink>/
        <NavLink to="">transactions</NavLink>
      </div>
      <p className="mb-10 pt-3 text-center text-[24px] font-bold lg:pb-10">
        Transactions
      </p>

      <Table data={transactions} columns={columns} />
    </div>
  );
}
