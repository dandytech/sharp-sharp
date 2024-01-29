import { useState } from "react";

export default function AdminServiceCategories() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="servicebg h-[100vh] overflow-y-auto px-5 pt-[60px] lg:w-[85%] lg:pr-10">
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
          {activeTab === 1 && <p className="mt-10">SERVICE CATEGORY LIST</p>}
          {activeTab === 2 && (
            <div className="mt-10 space-y-5 lg:w-[70%] m-auto">
              <div>
                <label>Service Name</label>
                <p>
                  <input
                    type="text"
                    className=" border-2 border-gray-200  shadow-sm px-3 py-1 w-full"
                    placeholder="Enter Category Name"
                  />
                </p>

              </div>
              <div>
                <label>Service Charge (%)</label>
                <p>
                  <input
                    type="number"
                    className=" border-2 border-gray-200 shadow-sm px-3 py-1 w-full"
                    placeholder="Enter Category Name"
                  />
                </p>
              </div>
              <div>
                <label>Service Photo</label>
                <p>
                  <input
                    type="file"
                    className=" border-2 border-gray-200 shadow-sm px-3 py-1 w-full"
                    placeholder="Enter Category Name"
                  />
                </p>
                
              </div>
              <div>
                <label>Service Description</label>
                <p>
                  <textarea
                    cols={2}
                    rows={5}
                    className=" border-2 border-gray-200 shadow-sm px-3 py-1 w-full"
                    placeholder="Enter Category Name"
                  />
                </p>
                
              </div>
             
              <div className="text-center"><button className="px-5 py-2 bg-blue-500 rounded-full text-white hover:bg-black">Submit</button></div>
            </div>
          )}
          {/* {activeTab === 3 && <p className="mt-10">Cancelled Requests</p>} */}
        </div>
      </div>
    </div>
  );
}
