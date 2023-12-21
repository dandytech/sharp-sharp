import { useMemo } from "react";

import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
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
    // busaddress: "2 Ogba Rd, Ikeja Lagos",
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
    // busaddress: "5 College Rd, Ikeja Lagos",
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
    //busaddress: "Ogun Exp. way, Ikeja Lagos",
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
    //busaddress: "PMT Ojota Lagos",
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
    //busaddress: "PMT Ojota Lagos",
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
    //busaddress: "PMT Ojota Lagos",
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
    //busaddress: "PMT Ojota Lagos",
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
    //busaddress: "PMT Ojota Lagos",
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
    //busaddress: "PMT Ojota Lagos",
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
    //busaddress: "PMT Ojota Lagos",
  },
];

export default function Table() {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "S/N",
        size: 10,
      },
      {
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "First Name",
        size: 100,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 100,
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Address",
        size: 150,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 100,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 100,
      },
      {
        accessorKey: "service",
        header: "Service",
        size: 100,
      },
      // {
      //   accessorKey: "busaddress",
      //   header: "Business-Address",
      //   size: 150,
      // },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)

    enableRowSelection: true,
    //passing the callback function variant. (You should get type hints for all the callback parameters available)

    muiSelectCheckboxProps: ({ row }) => ({
      color: "secondary",
      disabled: row.original.isAccountLocked, //access the row data to determine if the checkbox should be disabled
    }),

    muiTableHeadCellProps: {
      //easier way to create media queries, no useMediaQuery hook needed.
      sx: {
        fontWeight: "normal",
        fontSize: {
          xs: "11px",
          sm: "12px",
          md: "13px",
          lg: "14px",
          xl: "15px",
        },
      },
    },
    muiTableBodyCellProps: {
      sx: {
        fontWeight: "normal",
        //borderRight: "2px solid #e0e0e0", //add a border between columns
        fontSize: {
          xs: "8px",
          sm: "9px",
          md: "10px",
          lg: "11px",
          xl: "12px",
        },
      },
    },
  });

  return (
    <div>
      <MaterialReactTable table={table} />
    </div>
  );
}
