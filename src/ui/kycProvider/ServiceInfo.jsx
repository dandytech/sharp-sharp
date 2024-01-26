import { useMemo } from "react";
import { useState } from "react";

import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    id: 1,
    name: "UX/UX",
    price: "N300-N500",
    description: "design of prototype",
  },
  {
    id: 2,
    name: "Frontend",
    price: "N500-N50100",
    description: "design of Frontend",
  },
  {
    id: 3,
    name: "API",
    price: "N3000-N5000",
    description: "Creation & Integration of APIs",
  },
];

export default function ServiceInfo({ handleTabClick }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [services, setServices] = useState(data);

  // function handleAddService(service) {
  //   setServices((services) => [...services, service]);
  // }

  const handleShow = () => {
    setShow(!show);
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (name === " " || price === "" || description === "")
      alert("Fill All the Fields");
    else {
      handleTabClick(3);
    }
  };

  let nextId = 4;
  const handleSave = (e) => {
    e.preventDefault();
    if (!name || !price || !description) return;

    setServices([
      ...services,
      {
        id: nextId++,
        name: name,
        price: price,
        description: description,
      },
    ]);
    // const id = crypto.randomUUID();
    // const newService = {
    //   id: id,
    //   name,
    //   price,
    //   description,
    // };
    // handleAddService(newService);

    setName("");
    setPrice("");
    setDescription("");
  };

  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "S/N",
        size: 10,
      },
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Service Type",
        size: 100,
      },
      {
        accessorKey: "price", //access nested data with dot notation
        header: "Price Range",
        size: 100,
      },
      {
        accessorKey: "description",
        header: "Service Description",
        size: 200,
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
    data:services, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)

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

  const div =
    "mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800 text-center text-white focus:border-white lg:mb-0 lg:w-[50%]";

  const span =
    "flex h-[45px] w-[15%]  items-center justify-center  border-r text-center text-[22px] text-white ";

  const input =
    " h-[45px] w-[100%] bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white rounded-xl";

  return (
    <div>
      <p className="mt-10 flex text-[18px] font-semibold">
        Your Service Varieties Details
      </p>
      <div>
        <MaterialReactTable table={table} />
      </div>
      <button
        className="my-5 flex rounded-xl bg-blue-500 p-3 text-white"
        onClick={handleShow}
      >
        ADD SERVICE VARIETY
      </button>

      {show && (
        <div>
          <div className="mt-10 w-[100%]">
            <div className={`${div} lg:mb-5`}>
              <input
                type="text"
                id="servicetype"
                name="servicetype"
                className={input}
                placeholder="Service Type"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="mt-[-20px] text-[30px] text-red-600">*</span>
            </div>

            <div className={`${div} lg:mb-5`}>
              <span className="w-[250px] p-3 lg:w-[250px]">Price Range:</span>
              <input
                type="text"
                id="price"
                name="price"
                className={input}
                placeholder="N300 - N500"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <span className="mt-[-20px] text-[30px] text-red-600">*</span>
            </div>

            <div className={`${div} h-[110px] `}>
              <textarea
                className={`${input} h-[106px]  w-[100%] py-3`}
                id="description"
                name="description"
                placeholder="Describe The Service Type"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <span className="mt-[-20px] text-[30px] text-red-600">*</span>
            </div>
          </div>

          <div className="flex gap-5">
            <button
              className="my-5 flex rounded-xl bg-blue-500 p-3 text-white"
              onClick={handleSave}
            >
              Save Variety
            </button>
            <button
              className="my-5 flex rounded-xl bg-red-500 p-3 text-white"
              onClick={handleShow}
            >
              Close
            </button>
          </div>

          <div className="flex gap-2">
            <button
              className="lg:my-20 my-5 rounded-full border-2 bg-black lg:px-7 px-3 text-sm py-3 text-white hover:bg-blue-500  "
              onClick={() => handleTabClick(1)}
            >
              ⬅️Previous
            </button>

            <button
              className="lg:my-20 my-5 rounded-full border-2 bg-blue-500 text-sm px-7 py-3 text-white hover:bg-black  "
              onClick={handleNext}
            >
              Save & Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
