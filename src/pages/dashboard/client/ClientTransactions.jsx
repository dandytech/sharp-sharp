import { useMemo } from "react";
import Table from "../../../ui/Table";
import { NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import Modal from "../../../ui/Modal";

import { FaCloudDownloadAlt, FaRegEye } from "react-icons/fa";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tooltip,
} from "@material-tailwind/react";
import jsPDF from "jspdf";
// import { ExcelFile, ExcelSheet, ExcelColumn } from "react-data-export";
import { CSVLink } from "react-csv";

const headers = [
  { label: "SN", key: "id" },
  { label: "Date", key: "date" },
  { label: "Transaction Type", key: "transactiontype" },
  { label: "Transaction ID", key: "transactionid" },
  { label: "Amount", key: "amount" },
  { label: "Status", key: "status" },
];

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
        size: 100,
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

  //Download Table in PDF
  const downloadAsPDF = () => {
    const now = new Date();
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    const formattedDateTime = now
      .toLocaleDateString("en-US", options)
      .replace(",", " ");

    const doc = new jsPDF();
    doc.text(`CLIENT TRANSACTION AS AT ${formattedDateTime}`, 20, 10);
    doc.autoTable({
      head: [
        [
          "S/N",
          "Transaction ID",
          "Transaction Type",
          "Amount",
          "Date",
          "Status",
        ],
      ],
      body: transactions.map((item) => [
        item.id,
        item.transactionid,
        item.transactiontype,
        item.amount,
        item.date,
        item.status,
      ]),
    });

    doc.save("sharpapp-client-transactions.pdf");
  };

  return (
    <div className="boder-2 inset-0 h-[100vh] overflow-y-auto pr-3 pt-[50px] shadow-md lg:w-[85%]">
      <div className="mb-12 flex items-center px-6">
        <NavLink to="/">
          <CiHome />
        </NavLink>
        /<NavLink to="/client/dashboard">dashboard</NavLink>/
        <NavLink to="">transactions</NavLink>
      </div>
      <p className="mb-5 pt-3 text-center text-[24px] font-bold lg:pb-10">
        Transactions
      </p>

      <div className="z-50 text-right">
        <Menu>
          <MenuHandler>
            <Button className="text-xl text-black shadow-none">
              <Tooltip content="Downoad Table">
                <p>
                  {" "}
                  <FaCloudDownloadAlt />
                </p>
              </Tooltip>
            </Button>
          </MenuHandler>
          <MenuList className="space-y-3">
            <MenuItem>
              {" "}
              <button onClick={downloadAsPDF}>PDF</button>
            </MenuItem>
            <MenuItem>
              <CSVLink
                data={transactions}
                headers={headers}
                filename={"Client_Transactions.csv"}
              >
                <button>CSV</button>
              </CSVLink>
            </MenuItem>
            <MenuItem>
              {" "}
              <CSVLink
                data={transactions}
                headers={headers}
                filename={"Client_Transactions.xls"}
              >
                <button>EXcel</button>
              </CSVLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>

      <div className="relative z-0">
        {" "}
        <Table data={transactions} columns={columns} />
      </div>
    </div>
  );
}
