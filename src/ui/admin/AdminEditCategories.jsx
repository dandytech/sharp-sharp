import Modal from "../Modal";
import { TableCell } from "@mui/material";
import { FaEllipsisV } from "react-icons/fa";

import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useState } from "react";

export default function AdminEditCategories({ row, data }) {
  const [deleteCat, setDeleteCat] = useState(data);
  console.log(data);
  const deleteItem = (itemId) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this item?",
    );

    if (shouldDelete) {
      const updatedItems = deleteCat.filter((item) => item.id !== itemId);
      setDeleteCat(updatedItems);
    }
  };

  return (
    <Modal>
      <Menu>
        <TableCell className="bg-style">
          <MenuHandler className="bg-style border-none shadow-none">
            <Button className="border-none shadow-none">
              <FaEllipsisV />
            </Button>
          </MenuHandler>
          <MenuList className="space-y-3 bg-black">
            <Modal.Open opens="edit">
              <MenuItem className="bg-style ">Edit</MenuItem>
            </Modal.Open>
            <Modal.Open opens="delete">
              <MenuItem className="bg-style">
                <button onClick={deleteItem}>Delete</button>
              </MenuItem>
            </Modal.Open>
          </MenuList>

          {/* Add other options as needed */}
        </TableCell>
      </Menu>
      <Modal.Window name="edit">
        <div className="bg-style shadow-md border-2">
          <p className=" bg-black px-5 py-2 text-white">DELETE CATEGORY</p>
          <div className="space-y-3 p-5">
            <p>
              <label className="font-semibold">Name </label>{" "}
              <span>
                <input
                  type="text"
                  value={row.name}
                  className="w-full border-2 px-2 py-1"
                />
              </span>
            </p>
            <p>
              <label className="font-semibold">Charge </label>
              <span>
                <input
                  type="text"
                  value={row.charge}
                  className="w-full border-2 px-2 py-1"
                />
              </span>
            </p>
            <p>
              <label className="font-semibold">Description </label>
              <textarea
                cols={20}
                rows={5}
                value={row.description}
                className="w-full border-2 px-2 py-1"
              />
            </p>
            <p className="text-center">
              <button className="mt-5 rounded-full bg-blue-500 px-5 py-2 text-center font-semibold text-white hover:bg-black">
                Submite
              </button>
            </p>
          </div>
        </div>
      </Modal.Window>
      {/* <Modal.Window name="delete">
        <div>
          <p className="mt-10 bg-black px-5 py-3 text-white">
            DELETE CATEGORY ?
          </p>
          <div className="space-y-2 p-5">
            <p>
              <span className="font-semibold">Name: </span> {row.name}
            </p>
            <p>
              <span className="font-semibold">Cahrge: </span>
              {row.charge}
            </p>
            <p>
              <span className="font-semibold">Description </span>
              <p>{row.description}</p>
            </p>
            <p className="text-center">
              <button
                className="mt-7 rounded-full bg-blue-500 px-5 py-2 text-center font-semibold text-white hover:bg-black"
                onClick={deleteItem}
              >
                <Modal.Close>Delete</Modal.Close>
              </button>
            </p>
          </div>
        </div>
      </Modal.Window> */}
    </Modal>
  );
}
