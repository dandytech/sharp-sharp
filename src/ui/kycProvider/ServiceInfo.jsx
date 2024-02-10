import { useState } from "react";

import Table from "../../pages/dashboard/provider/Table";

export default function ServiceInfo({
  handleTabClick,
  serviceData,
  serviceColumns,
}) {
  console.log(serviceData);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [services, setServices] = useState(serviceData);

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

  const div =
    "mb-10 flex h-[50px] items-center rounded-xl border-2 border-blue-500 bg-gray-800 text-center text-white focus:border-white lg:mb-0 lg:w-[50%]";

  const input =
    " h-[45px] w-[100%] bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white rounded-xl";

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="mb-3 mt-20 flex text-[18px] font-semibold lg:text-lg xl:text-xl ">
          Your Service Varieties Details
        </p>

        <button
          className="md:text-md my-5 mt-20 flex rounded-xl bg-blue-500 p-3 text-sm text-white lg:text-lg xl:text-xl"
          onClick={handleShow}
        >
          + Add
        </button>
      </div>

      {show && (
        <div>
          <div className="mt-5 w-[100%]">
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

            <div className={`${div} h-auto `}>
              <textarea
                cols={5}
                rows={5}
                className={`${input} h-auto py-3`}
                id="description"
                name="description"
                placeholder="Describe The Service Type"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <span className=" text-[30px] text-red-600">*</span>
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
              className="my-5 rounded-full border-2 bg-black px-3 py-3 text-sm text-white hover:bg-blue-500 lg:my-20 lg:px-7  "
              onClick={() => handleTabClick(1)}
            >
              ⬅️Previous
            </button>

            <button
              className="my-5 rounded-full border-2 bg-blue-500 px-7 py-3 text-sm text-white hover:bg-black lg:my-20  "
              onClick={handleNext}
            >
              Save & Continue
            </button>
          </div>
        </div>
      )}

      <span>
        {" "}
        <Table data={serviceData} columns={serviceColumns} />
      </span>
    </div>
  );
}
