import { useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
  TablePagination,
} from "@mui/material";

import { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { FaCloudDownloadAlt } from "react-icons/fa";

import ViewClientKYC from "./ViewClientsKYC";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";

export const clients = [
  {
    id: 1,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Nwankwo Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
  },
  {
    id: 2,
    photo: "",
    fullname: "Nwankwo Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
  },
  {
    id: 3,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Nwankwo Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
  },
  {
    id: 4,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Nwankwo Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
  },
  {
    id: 5,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Nwankwo Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
  },
  {
    id: 6,
    photo: "",
    fullname: "henry Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
  },
  {
    id: 7,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Sunday Kalu Daniel ",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
  },
  {
    id: 8,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Mary Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
  },
  {
    id: 9,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Marthina Kenn John",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
  },
  {
    id: 10,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Paul Oke ",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
  },
  {
    id: 11,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Ikenna Daniel Oni",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
  },
  {
    id: 12,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Obi Ola Amah",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
  },
];

export default function Clients() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "S/N",
        size: 10,
      },
      {
        accessorKey: "fullname", //access nested data with dot notation
        header: "Full Name",
        size: 170,
      },
      {
        accessorKey: "gender",
        header: "Gender",
        size: 170,
      },

      {
        accessorKey: "email",
        header: "Email",
        size: 180,
      },
      {
        accessorKey: "phone",
        header: "Phone",
        size: 180,
      },
    ],
    [],
  );

  //Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0); // Reset page to 0 when changing rows per page
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const slicedData = clients.slice(startIndex, endIndex);

  //Download Table
  const downloadAsPDF = () => {
    const doc = new jsPDF();
    doc.text("SHARP APP CLIENTS DETAILS", 20, 10);
    doc.autoTable({
      head: [
        [
          "S/N",
          "Full Name",
          "Gender",
          "Email",
          "Phone",
          "Service Category",
          "business Address",
        ],
      ],
      body: clients.map((item) => [
        item.id,
        item.fullname,
        item.gender,
        item.email,
        item.phone,
      ]),
    });

    doc.save("sharpapp-clients.pdf");
  };
  const navigate = useNavigate();

  return (
    <div className="bg-style h-[100vh] overflow-y-auto px-5 pt-[70px] text-center lg:w-[84%] lg:pr-10 ">
      <div className="m-auto flex items-center px-5 pb-10">
        <NavLink to="/">
          <CiHome />
        </NavLink>
        /<button onClick={() => navigate("/admin/dashboard")}>dashboard</button>
        /<NavLink to="">clients</NavLink>
      </div>

      <p className="flex border-t-2 p-2 font-semibold">CLIENTS DETAILS</p>
      <button
        className="float-right mb-5 flex items-center px-3 text-right"
        onClick={downloadAsPDF}
      >
        <span> Download </span>
        <span>
          <FaCloudDownloadAlt />
        </span>
      </button>

      <TableContainer component={Paper}>
        <Table className="bg-style">
          <TableHead className="border-t-2 border-l-gray-500 border-r-gray-500 border-t-gray-500">
            <TableRow className="bg-style font-bold ">
              {columns.map((column, colIndex) => (
                <TableCell key={colIndex} className="bg-style font-bold">
                  <span className="font-bold"> {column.header}</span>
                </TableCell>
              ))}
              <TableCell className="bg-style font-bold">
                <span className="font-bold ">Actions</span>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {slicedData.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column, colIndex) => (
                  <TableCell className="bg-style" key={colIndex}>
                    {row[column.accessorKey]}
                  </TableCell>
                ))}

                <ViewClientKYC row={row} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          className="bg-style"
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={clients.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{ background: "bg-style" }}
        />
      </TableContainer>
    </div>
  );
}
