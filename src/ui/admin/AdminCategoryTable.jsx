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

export default function AdminCategoryTable({ data, columns }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //Download Table
  const downloadAsPDF = () => {
    const doc = new jsPDF();
    doc.text("SHARP APP SERVICE CATEGORY DETAILS", 20, 10);
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
        className="float-right mb-5 px-3 text-right"
        onClick={downloadAsPDF}
      >
        PDF
      </button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className="bg-gray-style font-bold text-[bg-text]">
              {columns.map((column, colIndex) => (
                <TableCell
                  key={colIndex}
                  className="bg-style font-bold text-[bg-text]"
                >
                  {column.header}
                </TableCell>
              ))}
              <TableCell className="bg-style font-bold text-[bg-text]">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column, colIndex) => (
                  <TableCell className="bg-style text-[bg-text]" key={colIndex}>
                    {row[column.accessorKey]}
                  </TableCell>
                ))}

                <AdminEditCategories row={row} data={data} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          className="bg-style text-[bg-text]"
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
