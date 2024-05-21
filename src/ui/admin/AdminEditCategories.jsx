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
import { useState } from "react";
import Close from "../../ui/Modal";
import Loader from "../Loader";
import { useUpdateCat } from "../../features/admin/serviceCat/useUpdateCat";
import useGetCat from "../../features/admin/serviceCat/useGetCat";
import { useDeleteCat } from "../../features/admin/serviceCat/useDeleteCat";

export default function AdminEditCategories({ row, data }) {
  //update Qury
  //const { updateCategory, isUpdating } = useUpdateCategories();

  const { updateCategory, isUpdating } = useUpdateCat();

  //to use form submit once
  const [catInputs, setCatInputs] = useState({
    name: row.name,
    price: row.price,
    description: row.description,
    category_id: row.id,
  });

  const handleChange = (e, field, id) => {
    const { value } = e.target;
    setCatInputs({ ...catInputs, [field]: value, category_id: id });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const filtered = Object.fromEntries(
      Object.entries(catInputs).filter(
        ([key, value]) => value !== "" && value !== 0,
      ),
    );
    console.log(filtered);
    updateCategory(filtered);
  };

  //update function on mouse leave the field
  // function handleUpdate(e, field, id) {
  //   console.log(id);
  //   const { value } = e.target;
  //   if (!value) return;
  //   const payload = {
  //     id: id,
  //     [field]: value,
  //   }
  //   // update the matching id
  //   updateCategory(payload);
  // }

  //DeleteQuery
  //const { deleteCategory, isDeletingCategory } = useDeleteCategory();

  const { deleteCategory, isDeleting } = useDeleteCat();

  //get values
  // const {
  //   isLoadingCat,
  //   useGetCategories: { catName, catCharge, catDescription } = {},
  // } = useGetCategories();
  const delCat = (id) => {
    const payload = {
      category_id: id,
    };
    deleteCategory(payload);
  };

  const { isLoadingCat, useGetCategories: { name, price, description } = {} } =
    useGetCat();

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

      {isLoadingCat ? (
        <div className="inset-0 ">
          {" "}
          <Loader />
        </div>
      ) : (
        <Modal.Window name="edit">
          <form onSubmit={handleSubmit}>
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
                      id={name}
                      defaultValue={row.name}
                      // onBlur={(e) => handleUpdate(e, "catName", row.id)}

                      onChange={(e) => handleChange(e, "name", row.id)}
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
                      id={price}
                      defaultValue={row.price}
                      // onBlur={(e) => handleUpdate(e, "catCharge", row.id)}

                      onChange={(e) => handleChange(e, "price", row.id)}
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
                    id={description}
                    defaultValue={row.description}
                    // onBlur={(e) => handleUpdate(e, "catDescription", row.id)}

                    onChange={(e) => handleChange(e, "description", row.id)}
                  />
                </p>
                <p className="text-center">
                  <MyButton type="primary" onClick={handleSubmit}>
                    {/* <Modal.Close>Submit</Modal.Close> */}
                    <Modal.Close>Submit</Modal.Close>
                  </MyButton>
                </p>
              </div>
            </div>
          </form>
        </Modal.Window>
      )}
      <Modal.Window name="delete">
        <div className="w-[300px] overflow-y-auto border-2 md:w-[600px] lg:w-[800px]">
          <p className="mt-0 bg-black px-5 py-3 text-white">
            DELETE CATEGORY ?
          </p>
          <div className="space-y-2 p-5">
            <p>
              <span className="font-semibold">Name: </span> {row.name}
            </p>
            <p>
              <span className="font-semibold">Cahrge: </span>
              {row.price}
            </p>
            <p>
              <span className="font-semibold">Description </span>
              <p>{row.description}</p>
            </p>
            <p className="text-center">
              <button
                className="mt-7 rounded-full bg-blue-500 px-5 py-2 text-center font-semibold text-white hover:bg-black"
                disabled={isDeleting}
                // resourceName="serviceCategories"
                onClick={() => delCat(row.id)}
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
