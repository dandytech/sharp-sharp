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

import MyButton from "../MyButton";
import "react-toastify/dist/ReactToastify.css";
import { useDeleteCategory } from "../../features/admin/useDeleteCategory";
import useGetCategories from "../../features/admin/useGetCategories";
import { useUpdateCategories } from "../../features/admin/useUpdateCategories";
import SpinnerMini from "../SpinnerMini";

export default function AdminEditCategories({ row, data }) {
  //update Qury
  const { updateCategory, isUpdating } = useUpdateCategories();

  //update function
  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;

    // update the matching id
    updateCategory({ [field]: value });
  }

  //DeleteQuery
  const { deleteCategory, isDeletingCategory } = useDeleteCategory();

  //get values
  const {
    isLoadingCat,
    useGetCategories: { catName, catCharge, catDescription } = {},
  } = useGetCategories();

  if (isLoadingCat) return <SpinnerMini />;

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
        <div className="w-[300px] overflow-y-auto border-2 md:w-[600px] lg:w-[800px]">
          <p className=" bg-black px-5 py-2 text-white">EDIT CATEGORY</p>
          <div className="space-y-3 p-5">
            <p>
              <label className="font-semibold">Name </label>{" "}
              <span>
                <input
                  className="w-full border-2 px-2 py-1"
                  type="text"
                  disabled={isUpdating}
                  id={catName}
                  defaultValue={row.catName}
                  onBlur={(e) => handleUpdate(e, "catName")}
                  // onChange={(e) => setName(e.target.value)}
                />
              </span>
            </p>
            <p>
              <label className="font-semibold">Charge </label>
              <span>
                <input
                  className="w-full border-2 px-2 py-1"
                  type="text"
                  disabled={isUpdating}
                  id={catCharge}
                  defaultValue={row.catCharge}
                  onBlur={(e) => handleUpdate(e, "catCharge")}
                  // onChange={(e) => setCharge(e.target.value)}
                />
              </span>
            </p>
            <p>
              <label className="font-semibold">Description </label>
              <textarea
                cols={20}
                rows={5}
                className="w-full border-2 px-2 py-1"
                disabled={isUpdating}
                id={catDescription}
                defaultValue={row.catDescription}
                onBlur={(e) => handleUpdate(e, "catDescription")}
                // onChange={(e) => setDescription(e.target.value)}
              />
            </p>
            <p className="text-center">
              <MyButton type="primary">
                <Modal.Close>Submit</Modal.Close>
              </MyButton>
            </p>
          </div>
        </div>
      </Modal.Window>

      <Modal.Window name="delete">
        <div className="w-[300px] overflow-y-auto border-2 md:w-[600px] lg:w-[800px]">
          <p className="mt-0 bg-black px-5 py-3 text-white">
            DELETE CATEGORY ?
          </p>
          <div className="space-y-2 p-5">
            <p>
              <span className="font-semibold">Name: </span> {row.catName}
            </p>
            <p>
              <span className="font-semibold">Cahrge: </span>
              {row.catCharge}
            </p>
            <p>
              <span className="font-semibold">Description </span>
              <p>{row.catDescription}</p>
            </p>
            <p className="text-center">
              <button
                className="mt-7 rounded-full bg-blue-500 px-5 py-2 text-center font-semibold text-white hover:bg-black"
                disabled={isDeletingCategory}
                // resourceName="serviceCategories"
                onClick={() => deleteCategory(row.id)}
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
