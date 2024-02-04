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

import jsPDF from "jspdf";
import { useMemo, useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import ViewSubAdminsDetails from "./ViewSubAdminsDetails";

export const subadmins = [
  {
    id: 1,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Nwankwo Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    role: "ICT",
    homeaddress: "2 metalbox rd",
  },
  {
    id: 2,
    photo: "https://i.pravatar.cc/48?u=4442446764",
    fullname: "Nwankwo Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    role: "ICT",
    homeaddress: "2 metalbox rd",
  },
  {
    id: 3,
    photo: "",
    fullname: "Nwankwo Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    role: "maintenance",
    homeaddress: "2 metalbox rd",
  },
  {
    id: 4,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Nwankwo Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    role: "ICT",
    homeaddress: "2 metalbox rd",
  },
  {
    id: 5,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Nwankwo Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    role: "House Cleaning",
    homeaddress: "2 metalbox rd",
  },
  {
    id: 6,
    photo: "",
    fullname: "henry Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    role: "ICT",
    homeaddress: "2 metalbox rd",
  },
  {
    id: 7,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Sunday Kalu Daniel ",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    role: "ICT",
    homeaddress: "2 metalbox rd",
  },
  {
    id: 8,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Mary Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    role: "Kitchen",
    homeaddress: "2 metalbox rd",
  },
  {
    id: 9,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Marthina Kenn John",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    role: "Maintain",
    homeaddress: "2 metalbox rd",
  },
  {
    id: 10,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Paul Oke ",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    role: "ICT",
    homeaddress: "2 metalbox rd",
  },
  {
    id: 11,
    photo: "",
    fullname: "Ikenna Daniel Oni",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    role: "ICT",
    homeaddress: "2 metalbox rd",
  },
  {
    id: 12,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Obi Ola Amah",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    role: "ICT",
    homeaddress: "2 metalbox rd",
  },
];

export default function SubAdmins() {
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

      {
        accessorKey: "role",
        header: "Role",
        size: 180,
      },
      {
        accessorKey: "homeaddress",
        header: "Home Address",
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
  const slicedData = subadmins.slice(startIndex, endIndex);

  //Download Table
  const downloadAsPDF = () => {
    const doc = new jsPDF();
    doc.text("SHARP APP SUB-ADMINS DETAILS", 20, 10);
    doc.autoTable({
      head: [
        [
          "S/N",
          "Full Name",
          "Gender",
          "Email",
          "Phone",
          "Role",
          "Home Address",
        ],
      ],
      body: subadmins.map((item) => [
        item.id,
        item.fullname,
        item.gender,
        item.email,
        item.phone,
        item.role,
        item.homeaddress,
      ]),
    });

    doc.save("sharpapp_subadmins.pdf");
  };

  const input = `border-2 border-gray-300 px-3 py-2`;

  const [showAdd, setShowAdd] = useState(false);

  const handleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  return (
    <div className="bg-style h-[100vh] overflow-y-auto px-5 pt-[70px] text-center lg:w-[85%] lg:pr-10 ">
      <p
        className="mb-5 w-auto cursor-pointer border-2 p-2 px-3 text-center font-bold text-blue-500"
        onClick={handleShowAdd}
      >
        {!showAdd ? " +Add" : "Close"}
      </p>

      {showAdd && (
        <div className="mb-10 space-y-5 border-2 p-3 text-left">
          <p className="text-center font-bold">Add Sub-Admin</p>
          <p className="flex flex-col">
            <label>Name </label>
            <input type="text" placeholder="Full Name" className={input} />
          </p>
          <p className="flex flex-col">
            <label>Gender </label>
            <select className={input}>
              <option>Male</option>
              <option>Female</option>
            </select>
          </p>
          <p className="flex flex-col">
            <label>Email </label>
            <input type="email" placeholder="Email" className={input} />
          </p>
          <p className="flex flex-col">
            <label>Phone </label>
            <input type="text" placeholder="Phone Number" className={input} />
          </p>
          <p className="flex flex-col">
            <label>Role </label>
            <select className={input}>
              <option>ICT Admin</option>
              <option>Cleaning Admin</option>
              <option>Maintenance Admin</option>
            </select>
          </p>
          <p className="flex flex-col">
            <label>Address </label>
            <input type="text" placeholder="Home Address" className={input} />
          </p>
          <p className="cursor-pointer rounded-full bg-blue-500 px-7 py-3 text-center font-semibold text-white hover:bg-black">
            <button>Submit</button>
          </p>
        </div>
      )}

      <p className="px-3 text-left font-bold">SUB-ADMIN DETAILS</p>
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
            <TableRow className="bg-gray-style font-bold text-[bg-text]">
              {columns.map((column, colIndex) => (
                <TableCell
                  key={colIndex}
                  className="bg-style font-bold text-[bg-text]"
                >
                  <span className="font-bold"> {column.header}</span>
                </TableCell>
              ))}
              <TableCell className="bg-style font-bold text-[bg-text]">
                <span className="font-bold ">Actions</span>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {slicedData.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column, colIndex) => (
                  <TableCell className="bg-style text-white" key={colIndex}>
                    {row[column.accessorKey]}
                  </TableCell>
                ))}

                <ViewSubAdminsDetails row={row} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          className="bg-style text-[bg-text]"
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={subadmins.length}
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
