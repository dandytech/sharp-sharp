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

import { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function CancelledRequests({ data, columns }) {
  //Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [slicedData, setSlicedData] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0); // Reset page to 0 when changing rows per page
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // const slicedData = data.slice(startIndex, endIndex);

  useEffect(() => {
    const handleFilter = () => {
      const selected = data?.filter((where) => where.status === "completed");
      setSlicedData(selected.slice(startIndex, endIndex));
    };
    handleFilter();
  }, []);

  //Download Table
  const downloadAsPDF = () => {
    const doc = new jsPDF();
    doc.text("SHARP APP CANCELLED REQUESTS LIST", 20, 10);
    doc.autoTable({
      head: [
        [
          "S/N",
          "Service",
          "Description",
          "Charge",
          "Client Name",
          "Phone",
          "Email",
          "Address",
          "Request Time",
          "Delivery Tinme",
          "Status",
        ],
      ],
      body: slicedData.map((item) => [
        item.id,
        item.service,
        item.description,
        item.charge,
        item.client,
        item.phone,
        item.email,
        item.address,
        item.requestTime,
        item.serviceTime,
        item.status,
      ]),
    });

    doc.save("completed-Service-Request.pdf");
  };

  return (
    <div>
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
        <Table>
          <TableHead>
            <TableRow className="bg-style font-bold text-[bg-text]">
              {columns.map((column, colIndex) => (
                <TableCell key={colIndex}>
                  <span className="bg-style text-[bg-text]font-bold font-bold text-[bg-text]">
                    {column.header}
                  </span>{" "}
                </TableCell>
              ))}
              <TableCell className="bg-style font-bold text-[bg-text]">
                <span className="bg-style font-bold text-[bg-text]">
                  Actions
                </span>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {slicedData.reverse().map((row, index) => (
              <TableRow key={index}>
                {columns.map((column, colIndex) => (
                  <TableCell className="bg-style text-white" key={colIndex}>
                    {row[column.accessorKey]}
                  </TableCell>
                ))}

                {/* <AllRequestsActions data={data} row={row} /> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          className="bg-style text-[bg-text]"
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={slicedData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}
