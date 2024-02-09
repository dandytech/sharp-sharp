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
import ViewProviderKYC from "./ViewProvidersKYC";

export const providers = [
  {
    id: 1,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Nwankwo Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    utility: "https://dummyimage.com/600x400/000/fff&text=NEPA+Bill",
    servicecategory: "ICT",
    businessaddress: "2 metalbox rd",
  },
  {
    id: 2,
    photo: "",
    fullname: "Nwankwo Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    utility: "https://dummyimage.com/600x400/000/fff&text=NEPA+Bill",
    servicecategory: "ICT",
    businessaddress: "2 metalbox rd",
  },
  {
    id: 3,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Nwankwo Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    utility: "https://dummyimage.com/600x400/000/fff&text=NEPA+Bill",
    servicecategory: "maintenance",
    businessaddress: "2 metalbox rd",
  },
  {
    id: 4,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Nwankwo Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    utility: "https://dummyimage.com/600x400/000/fff&text=NEPA+Bill",
    servicecategory: "ICT",
    businessaddress: "2 metalbox rd",
  },
  {
    id: 5,
    photo: "https://i.pravatar.cc/48?u=4442894364",
    fullname: "Nwankwo Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    utility: "https://dummyimage.com/600x400/000/fff&text=NEPA+Bill",
    servicecategory: "House Cleaning",
    businessaddress: "2 metalbox rd",
  },
  {
    id: 6,
    photo: "https://i.pravatar.cc/48?u=4443396764",
    fullname: "henry Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    utility: "https://dummyimage.com/600x400/000/fff&text=NEPA+Bill",
    servicecategory: "ICT",
    businessaddress: "2 metalbox rd",
  },
  {
    id: 7,
    photo: "https://i.pravatar.cc/48?u=4442296764",
    fullname: "Sunday Kalu Daniel ",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    utility: "https://dummyimage.com/600x400/000/fff&text=NEPA+Bill",
    servicecategory: "ICT",
    businessaddress: "2 metalbox rd",
  },
  {
    id: 8,
    photo: "",
    fullname: "Mary Daniel Amaech",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    utility: "https://dummyimage.com/600x400/000/fff&text=NEPA+Bill",
    servicecategory: "Kitchen",
    businessaddress: "2 metalbox rd",
  },
  {
    id: 9,
    photo: "https://i.pravatar.cc/48?u=4442116764",
    fullname: "Marthina Kenn John",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    utility: "https://dummyimage.com/600x400/000/fff&text=NEPA+Bill",
    servicecategory: "Maintain",
    businessaddress: "2 metalbox rd",
  },
  {
    id: 10,
    photo: "https://i.pravatar.cc/48?u=444896764",
    fullname: "Paul Oke ",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    utility: "https://dummyimage.com/600x400/000/fff&text=NEPA+Bill",
    servicecategory: "ICT",
    businessaddress: "2 metalbox rd",
  },
  {
    id: 11,
    photo: "",
    fullname: "Ikenna Daniel Oni",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    utility: "https://dummyimage.com/600x400/000/fff&text=NEPA+Bill",
    servicecategory: "ICT",
    businessaddress: "2 metalbox rd",
  },
  {
    id: 12,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    fullname: "Obi Ola Amah",
    gender: "Male",
    email: "dannkwo@gmail.com",
    phone: "+2347098787875",
    utility: "https://dummyimage.com/600x400/000/fff&text=NEPA+Bill",
    servicecategory: "ICT",
    businessaddress: "2 metalbox rd",
  },
];

export default function Providers() {
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
        accessorKey: "servicecategory",
        header: "Service Category",
        size: 180,
      },
      {
        accessorKey: "businessaddress",
        header: "Business Address",
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
  const slicedData = providers.slice(startIndex, endIndex);

  //Download Table
  const downloadAsPDF = () => {
    const doc = new jsPDF();
    doc.text("SHARP APP SERVICE PROVIDERS DETAILS", 20, 10);
    doc.autoTable({
      head: [
        [
          "S/N",
          "Photo",
          "Full Name",
          "Gender",
          "Email",
          "Phone",
          "Service Category",
          "business Address",
        ],
      ],
      body: providers.map((item) => [
        item.id,
        item.photo,
        item.fullname,
        item.gender,
        item.email,
        item.phone,
        item.servicecategory,
        item.businessaddress,
      ]),
    });

    doc.save("sharpapp-service-providers.pdf");
  };

  return (
    <div className="bg-style  h-[100vh] overflow-y-auto px-5 pt-[70px] text-center lg:w-[84%] lg:pr-10 ">
      <p className="flex border-t-2 p-2 font-semibold">
        SERVICE PROVERS DETAILS
      </p>
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
            <TableRow className="bg-gray-style font-bold ">
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
                  <TableCell key={colIndex}>
                    {row[column.accessorKey]}
                  </TableCell>
                ))}

                <ViewProviderKYC row={row} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={providers.length}
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
