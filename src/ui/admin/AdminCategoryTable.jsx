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

import AdminEditCategories from "./AdminEditCategories";
import { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function AdminCategoryTable({ data, columns }) {
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
  const slicedData = data.slice(startIndex, endIndex);

  //Download Table
  const downloadAsPDF = () => {
    const doc = new jsPDF();
    doc.text("SHARP APP SERVICE CATEGORY LIST", 20, 10);
    doc.autoTable({
      head: [["S/N", "Category", "Charge", "Description"]],
      body: data.map((item) => [
        item.id,
        item.name,
        item.charge,
        item.description,
      ]),
    });

    doc.save("Service_Categories.pdf");
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
            <TableRow className="bg-gray-style font-bold">
              {columns.map((column, colIndex) => (
                <TableCell
                  key={colIndex}
                  className="bg-style text-style font-bold"
                >
                  {column.header}
                </TableCell>
              ))}
              <TableCell className="bg-style font-bold">Actions</TableCell>
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

                <AdminEditCategories row={row} data={data} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          className="bg-style"
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}
