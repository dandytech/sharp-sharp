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
import MyButton from "../MyButton";
import "react-toastify/dist/ReactToastify.css";

export default function AdminEditCategories({ updateData, row, data }) {
  const [name, setName] = useState(row.name);
  const [charge, setCharge] = useState(row.charge);
  const [description, setDescription] = useState(row.description);

  // Function to update the selected category
  const handleUpdateCategory = () => {
    // Find the index of the category to update
    const categoryIndex = data.findIndex((cat) => cat.id === row.id);

    // Create a copy of the categories array
    const updatedCategories = [...data];

    // Update the selected category with the new values
    updatedCategories[categoryIndex] = {
      ...updatedCategories[categoryIndex],
      name,
      charge,
      description,
    };

    // Update the data array in the parent component
    updateData(updatedCategories);

    alert("Successfully Updated ✅");
  };

  // Function to delete the selected category
  const handleDeleteCategory = () => {
    // Show confirmation dialog
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this category?",
    );
    if (isConfirmed) {
      // Find the index of the category to delete
      const indexToDelete = data.findIndex((cat) => cat.id === row.id);
      if (indexToDelete !== -1) {
        // Create a copy of the categories array and remove the category
        const updatedCategories = [...data];
        updatedCategories.splice(indexToDelete, 1);
        // Update the data array in the parent component
        updateData(updatedCategories);
        alert("Category Deleted Successfully ✅");
      }
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
              <MenuItem className="bg-style">Delete</MenuItem>
            </Modal.Open>
          </MenuList>

          {/* Add other options as needed */}
        </TableCell>
      </Menu>
      <Modal.Window name="edit">
        <div className="w-[300px] md:w-[600px] lg:w-[800px] overflow-y-auto border-2">
          <p className=" bg-black px-5 py-2 text-white">EDIT CATEGORY</p>
          <div className="space-y-3 p-5">
            <p>
              <label className="font-semibold">Name </label>{" "}
              <span>
                <input
                  type="text"
                  value={name}
                  className="w-full border-2 px-2 py-1"
                  onChange={(e) => setName(e.target.value)}
                />
              </span>
            </p>
            <p>
              <label className="font-semibold">Charge </label>
              <span>
                <input
                  type="text"
                  value={charge}
                  className="w-full border-2 px-2 py-1"
                  onChange={(e) => setCharge(e.target.value)}
                />
              </span>
            </p>
            <p>
              <label className="font-semibold">Description </label>
              <textarea
                cols={20}
                rows={5}
                value={description}
                className="w-full border-2 px-2 py-1"
                onChange={(e) => setDescription(e.target.value)}
              />
            </p>
            <p className="text-center">
              <MyButton type="primary" onClick={handleUpdateCategory}>
                <Modal.Close>Submit</Modal.Close>
              </MyButton>
            </p>
          </div>
        </div>
      </Modal.Window>

      <Modal.Window name="delete">
        <div className="w-[300px] md:w-[600px] lg:w-[800px] overflow-y-auto border-2">
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
                onClick={handleDeleteCategory}
              >
                <Modal.Close>Delete</Modal.Close>
              </button>
            </p>
          </div>
        </div>
      </Modal.Window>
    </Modal>
  );
}
