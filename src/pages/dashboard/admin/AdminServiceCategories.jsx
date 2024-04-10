import { CiHome } from "react-icons/ci";
import AdminCategoryTable from "../../../ui/admin/AdminCategoryTable";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAddCategories from "../../../features/admin/useAddCategories";
import { useForm } from "react-hook-form";
import useGetCategories from "../../../features/admin/useGetCategories";

import { format } from "date-fns";

// export const data = [
//   {
//     id: 1,

//     name: "Car Wash",
//     charge: 5000,

//     description: "Washing and cleaning of a car",
//   },
//   {
//     id: 2,
//     name: "House Cleaning",
//     charge: 5000,

//     description: "Sweep, Mob and clenaning of House and its equipment",
//   },
//   {
//     id: 3,
//     name: "Cook",
//     charge: 5000,

//     description: "Cooking of any sort of meal used in the house",
//   },
// ];

export default function AdminServiceCategories() {
  const [activeTab, setActiveTab] = useState(1);

  //const [categories, setGategories] = useState(data);
  // const [categories, setGategories] = useState(data);

  // const [name, setName] = useState("");
  // const [charge, setCharge] = useState("");
  // const [description, setDescription] = useState("");

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  //add category function
  // let nextId = categories.length;
  // const handleSave = (e) => {
  //   e.preventDefault();
  //   if (!name || !charge || !description) {
  //     toast.error("All Fields are Required 😰");
  //   } else {
  //     setGategories([
  //       ...categories,
  //       {
  //         id: nextId + 1,
  //         name: name,
  //         charge: charge,
  //         description: description,
  //       },
  //     ]);
  //     // const id = crypto.randomUUID();
  //     setName("");
  //     setCharge("");
  //     setDescription("");
  //     toast.success("Submited Successfully");
  //   }
  // };

  //update the table  function
  // const updateData = (updatedData) => {
  //   setGategories(updatedData);
  // };

  //React Query to add
  const { addCategory, isLoading } = useAddCategories();

  const { serviceCategories, isLoadingCat, error } = useGetCategories();
  //console.log(serviceCategories);

  //console.log(getValues());
  if (error) {
    console.log(error);
  }

  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ catName, catCharge, catDescription }) {
    addCategory({ catName, catCharge, catDescription }, { onSettled: reset });
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "S/N",
        size: 10,
      },
      {
        accessorKey: "catName", //access nested data with dot notation
        header: "Name",
        size: 170,
      },
      {
        accessorKey: "catCharge",
        header: "Charge(%)",
        size: 150,
      },

      {
        accessorKey: "catDescription",
        header: "Description",
        size: 200,
      },

      {
        accessorKey: "created_at",
        header: "Date Added",
        size: 150,
        Cell: ({ value }) => {
          const date = new Date(value);
          const formattedDate =
            date.toLocaleDateString() + " " + date.toLocaleTimeString();
          return formattedDate;
        },
      },
    ],
    [],
  );

  const navigate = useNavigate();

  return (
    <div className="servicebg h-[100vh] overflow-y-auto px-5 pt-[80px] lg:w-[84%] lg:pr-10">
      <div className="m-auto flex items-center px-5 pb-10">
        <NavLink to="/">
          <CiHome />
        </NavLink>
        /<button onClick={() => navigate("/admin/dashboard")}>dashboard</button>
        /<NavLink to="">categories</NavLink>
      </div>
      <div>
        <div className="tab-buttons flex w-[100%] items-center justify-between">
          <div className="font-bold lg:w-[50%]">
            <button
              className={` ${activeTab === 1 ? "active" : " "}`}
              onClick={() => handleTabClick(1)}
            >
              Service Categories List
            </button>
          </div>

          <div className="font-bold lg:w-[50%]">
            <button
              className={`${activeTab === 2 ? "active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              +Add
            </button>
          </div>
        </div>

        <div className="tab-content">
          {activeTab === 1 && (
            <div className="lag:mt-0 mt-10">
              {!isLoadingCat && (
                <div>
                  <AdminCategoryTable
                    // updateData={updateData}
                    data={serviceCategories}
                    columns={columns}
                  />
                </div>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            {activeTab === 2 && (
              <div className="m-auto mt-10 space-y-5 border-2 p-5 lg:w-[70%]">
                <div>
                  <label>Service Name</label>
                  <p>
                    <input
                      type="text"
                      className="border-2-gray-200 w-full border-2 border-gray-100 px-3 py-1"
                      placeholder="Enter Category Name"
                      id="catName"
                      disabled={isLoading}
                      {...register("catName", {
                        required: "Field is required",
                      })}
                    />
                    <p className="text-red-500">
                      {" "}
                      {errors.catName && <span>This field is required</span>}
                    </p>
                  </p>
                </div>
                <div>
                  <label>Service Charge (%)</label>
                  <p>
                    <input
                      type="number"
                      className="border-2-gray-200 w-full border-2 border-gray-100 px-3 py-1"
                      placeholder="Enter Category Charge"
                      id="catCharge"
                      disabled={isLoading}
                      {...register("catCharge", {
                        required: "Field is required",
                      })}
                    />
                    <p className="text-red-500">
                      {errors.catCharge && <span>This field is required</span>}
                    </p>
                  </p>
                </div>

                <div>
                  <label>Service Description</label>
                  <p>
                    <textarea
                      cols={2}
                      rows={5}
                      className="border-2-gray-200 w-full border-2 border-gray-100 px-3 py-1"
                      placeholder="Enter Category Description"
                      id="catDescription"
                      disabled={isLoading}
                      {...register("catDescription", {
                        required: "Field is required",
                      })}
                    />
                     <p className="text-red-500">

                    {errors.catDescription && (
                      <span>This field is required</span>
                      )}
                      </p>
                  </p>
                </div>

                <div className="text-center">
                  <button
                    className="rounded-full bg-blue-500 px-5 py-2 text-white hover:bg-black"
                    // onClick={handleSave}
                    disabled={isLoading}
                  >
                    Submit
                  </button>
                </div>
                {/* <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                  transition:Bounce
                  ToastContainer
                /> */}
              </div>
            )}
          </form>

          {/* {activeTab === 3 && <p className="mt-10">Cancelled Requests</p>} */}
        </div>
      </div>
    </div>
  );
}
