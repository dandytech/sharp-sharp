import { useMemo } from "react";

import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

import ViewDetails from "./ViewDetails";
import { MenuItem } from "@material-tailwind/react";

//nested data is ok, see accessorKeys in ColumnDef below
export const data = [
  {
    id: 1,
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
    service: "Web Developer",
    phone: "+234 7087876765",
    email: "name@gmail.com",
    // busaddress: "2 metalbox Rd, Ikeja Lagos",
  },
  {
    id: 2,
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
    service: "Shoe-maker",
    phone: "+234 7087876765",
    email: "name@gmail.com",
  },
  {
    id: 3,
    name: {
      firstName: "Joe",
      lastName: "Doe",
    },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
    service: "Cook",
    phone: "+234 7087876765",
    email: "name@gmail.com",
  },
  {
    id: 4,
    name: {
      firstName: "Kevin",
      lastName: "Vandy",
    },
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
    service: "Tailor",
    phone: "+234 7087876765",
    email: "name@gmail.com",
  },
  {
    id: 5,
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
    service: "Driver",
    phone: "+234 7087876765",
    email: "name@gmail.com",
  },
  {
    id: 6,
    name: {
      firstName: "Godwin",
      lastName: "Ijezie",
    },
    address: "2  metalbox Road",
    city: "Ikeja",
    state: "Lagos Nigeria",
    service: "Web Developer",
    phone: "+234 7087876765",
    email: "name@gmail.com",
  },
  {
    id: 7,
    name: {
      firstName: "Daniel",
      lastName: "Amaechi",
    },
    address: "3  metalbox Road",
    city: "Ikeja",
    state: "Lagos Nigeria",
    service: "Web Developer",
    phone: "+234 7087876765",
    email: "name@gmail.com",
  },
  {
    id: 8,
    name: {
      firstName: "Promise",
      lastName: "Ezemma",
    },
    address: "2 metalbox Road",
    city: "Ikeja",
    state: "Lagos Nigeria",
    service: "Web Developer",
    phone: "+234 7087876765",
    email: "name@gmail.com",
  },
  {
    id: 9,
    name: {
      firstName: "Hamzat",
      lastName: "Adeleke",
    },
    address: "2  metalbox Road",
    city: "Ikeja",
    state: "Lagos Nigeria",
    service: "Web Developer",
    phone: "+234 7087876765",
    email: "name@gmail.com",
  },
  {
    id: 10,
    name: {
      firstName: "Victor",
      lastName: "Omah",
    },
    address: "2  metalbox Road",
    city: "Ikeja",
    state: "Lagos Nigeria",
    service: "Mobile Developer",
    phone: "+234 7087876765",
    email: "name@gmail.com",
  },
  {
    id: 11,
    name: {
      firstName: "Gozie",
      lastName: "Naobi",
    },
    address: "2  metalbox Road",
    city: "Ikeja",
    state: "Lagos Nigeria",
    service: "UI/UX Designer",
    phone: "+234 7087876765",
    email: "name@gmail.com",
  },
];

export default function Table() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "S/N",
        size: 5,
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
        header: "Action",
        size: 170,

        Cell: ({ row }) => <ViewDetails row={row.original} />,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)

    enableFullScreenToggle: false,
    enableRowSelection: true,

    enableColumnResizing: true,
    enableRowPinning: true,
    //passing the callback function variant. (You should get type hints for all the callback parameters available)

    muiSelectCheckboxProps: ({ row }) => ({
      color: "secondary",
      disabled: row.original.isAccountLocked, //access the row data to determine if the checkbox should be disabled
      className: "bg-style",
      fontWeight: row.getIsSelected() ? "bold" : "normal",
    }),

    muiTableHeadRowProps: ({ row }) => ({
      //className: "bg-style-table",
      className: "#ec0a0a",
      color: "#e30b0b",
    }),

    muiTableHeadCellProps: {
      className: "bg-style",

      sx: {
        fontWeight: "bold",
        fontSize: {
          xs: "11px",
          sm: "12px",
          md: "13px",
          lg: "16px",
          xl: "15px",
        },

        position: "relative",
        zIndex: 0,
      },
    },

    muiTableBodyCellProps: {
      className: "bg-style",

      sx: {
        fontWeight: "normal",

        //borderRight: "2px solid #e0e0e0", //add a border between columns

        // fontSize: {
        //   xs: "8px",
        //   sm: "9px",
        //   md: "10px",
        //   lg: "11px",
        //   xl: "12px",
        // },
      },
    },

    // muiCreateRowModalProps: {
    //   className: "bg-style-table",
    //   color: "#ed0a30",
    //   sx: {
    //     fontWeight: "normal",
    //   },
    // },
  });

  return <MaterialReactTable table={table} />;
}
