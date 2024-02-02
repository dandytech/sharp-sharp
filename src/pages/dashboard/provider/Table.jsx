import { useMemo } from "react";

import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import Modal from "../../../ui/Modal";
import ViewDetails from "./ViewDetails";

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
  // const [selected, setSelected] = useState();

  // const handleOpenModal = (id) => {
  //   setSelected(item);
  // };

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
        size: 170,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 170,
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Address",
        size: 180,
      },

      {
        accessorKey: "service",
        header: "Service",
        size: 180,
      },
      {
        accessorKey: "id",
        header: "Action",
        size: 130,
        Cell: ({ renderedCellValue, row }) => (
          <Menu>
            <MenuHandler>
              <Button className="text-black shadow-none">
                {" "}
                <BsThreeDotsVertical />
              </Button>
            </MenuHandler>
            <MenuList>
              <Modal.Open opens="detail">
                <MenuItem>View Details</MenuItem>
              </Modal.Open>
              {/* <MenuItem>Menu Item 2</MenuItem>
    <MenuItem>Menu Item 3</MenuItem> */}
            </MenuList>

            <Modal.Window name="detail">
              <ViewDetails details={row.id} />
            </Modal.Window>
          </Menu>
        ),
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)

    enableRowSelection: true,
    position: "relative",
    zIndex: 0,

    enableColumnResizing: true,
    enableRowPinning: true,
    //passing the callback function variant. (You should get type hints for all the callback parameters available)

    muiSelectCheckboxProps: ({ row }) => ({
      color: "secondary",
      disabled: row.original.isAccountLocked, //access the row data to determine if the checkbox should be disabled
      fontWeight: row.getIsSelected() ? "bold" : "normal",
    }),

    muiTableHeadCellProps: {
      //easier way to create media queries, no useMediaQuery hook needed.
      sx: {
        fontWeight: "normal",

        fontSize: {
          xs: "11px",
          sm: "12px",
          md: "13px",
          lg: "16px",
          xl: "15px",
        },
        backgroundColor: "#f0f0f0", // Add background color
        position: "relative",
        zIndex: 0,
      },

      position: "relative",
      zIndex: 0,
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
        background: "bg-style", // Add background color
        color: "bg-text",
        position: "relative",
        zIndex: 0,
      },
    },

    mrtTheme: (theme) => ({
      //baseBackgroundColor: '',
      draggingBorderColor: theme.palette.secondary.main,
    }),
  });

  return (
    <Modal>
      <div>
        <MaterialReactTable table={table} />
      </div>
    </Modal>
  );
}
