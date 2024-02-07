import AdminCategoryTable from "../../../ui/admin/AdminCategoryTable";
import { useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const data = [
  {
    id: 1,

    name: "Car Wash",
    charge: 5000,

    description: "Washing and cleaning of a car",
  },
  {
    id: 2,
    name: "House Cleaning",
    charge: 5000,

    description: "Sweep, Mob and clenaning of House and its equipment",
  },
  {
    id: 3,
    name: "Cook",
    charge: 5000,

    description: "Cooking of any sort of meal used in the house",
  },
];

export default function AdminServiceCategories() {
  const [activeTab, setActiveTab] = useState(1);
  const [categories, setGategories] = useState(data);
  const [name, setName] = useState("");
  const [charge, setCharge] = useState("");
  const [description, setDescription] = useState("");

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  //add category function
  let nextId = 4;
  const handleSave = (e) => {
    e.preventDefault();
    if (!name || !charge || !description) return;

    setGategories([
      ...categories,
      {
        id: nextId++,
        name: name,
        charge: charge,
        description: description,
      },
    ]);
    // const id = crypto.randomUUID();
    setName("");
    setCharge("");
    setDescription("");
    toast.success("Submited Successfully");
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "S/N",
        size: 10,
      },
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Category Name",
        size: 170,
      },
      {
        accessorKey: "charge",
        header: "Category Charge",
        size: 170,
      },

      {
        accessorKey: "description",
        header: "Description",
        size: 180,
      },
    ],
    [],
  );

  return (
    <div className="servicebg h-[100vh] overflow-y-auto px-5 pt-[80px] lg:w-[84%] lg:pr-10">
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
        {/* <button
                className={activeTab === 3 ? "active" : ""}
                onClick={() => handleTabClick(3)}
              >
                Rejected/Cancelled Requests
              </button> */}

        <div className="tab-content">
          {activeTab === 1 && (
            <div className="lag:mt-0 mt-10">
              <div>
                <AdminCategoryTable data={categories} columns={columns} />
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="m-auto mt-10 space-y-5 lg:w-[70%]">
              <div>
                <label>Service Name</label>
                <p>
                  <input
                    type="text"
                    className="border-2-gray-200 w-full border-2 border-gray-100 px-3 py-1"
                    placeholder="Enter Category Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </p>
              </div>
              <div>
                <label>Service Charge (%)</label>
                <p>
                  <input
                    type="number"
                    className="border-2-gray-200 w-full border-2 border-gray-100 px-3 py-1"
                    placeholder="Enter Category Name"
                    value={charge}
                    onChange={(e) => setCharge(e.target.value)}
                  />
                </p>
              </div>

              <div>
                <label>Service Description</label>
                <p>
                  <textarea
                    cols={2}
                    rows={5}
                    className="border-2-gray-200 w-full border-2 border-gray-100 px-3 py-1"
                    placeholder="Enter Category Name"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </p>
              </div>

              <div className="text-center">
                <button
                  className="rounded-full bg-blue-500 px-5 py-2 text-white hover:bg-black"
                  onClick={handleSave}
                  disabled={!charge || !name || !description}
                >
                  Submit
                </button>
              </div>
              <ToastContainer
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
              />
            </div>
          )}
          {/* {activeTab === 3 && <p className="mt-10">Cancelled Requests</p>} */}
        </div>
      </div>
    </div>
  );
}
