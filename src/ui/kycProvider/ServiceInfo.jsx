import { useState } from "react";

import Table from "../../pages/dashboard/provider/Table";
import MyButton from "../MyButton";

export default function ServiceInfo({
  handleTabClick,
  serviceColumns,
  providerServices,
}) {
  console.log(providerServices);

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [services, setServices] = useState(providerServices);

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

  let nextId = services.length;
  const handleSave = (e) => {
    e.preventDefault();
    if (!name || !price || !description) return;

    setServices([
      ...services,
      {
        id: nextId + 1,
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
    setShow(false);
  };

  const div =
    "mb-10 flex h-[50px] items-center rounded-xl border-2 border-gray-300 bg-white  text-center focus:border-white lg:mb-0 lg:w-[50%] hover:border-blue-500";

  const input =
    " h-[45px] w-[100%] bg-gray-800 bg-white px-5 font-semibold focus:border-2 focus:border-white rounded-xl";

  return (
    <div>
      <div className="mb-5 items-center justify-between md:mb-0 md:flex lg:mb-0 lg:flex">
        <p className="mb-3 mt-20 flex text-[18px] font-semibold lg:text-lg xl:text-xl ">
          Your Service Varieties Details
        </p>

        <MyButton type="primary" onClick={handleShow}>
          {show ? "Close" : " + Add"}
        </MyButton>
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

            <div className={`${div} flex items-center justify-between lg:mb-5`}>
              <span className="flex items-center">
                <span className="w-full">Price (NGN):</span>{" "}
                <input
                  type="text"
                  id="price"
                  name="price"
                  className={`${input}`}
                  placeholder="6500"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </span>
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

          <div className="mb-10 flex lg:mt-5">
            <MyButton type="primary" onClick={handleSave}>
              {" "}
              Save Variety
            </MyButton>
          </div>

          <div className="mb-5 flex items-center justify-between gap-2">
            <MyButton type="primary" onClick={() => handleTabClick(1)}>
              ⬅️Previous
            </MyButton>

            <MyButton type="primary" onClick={handleNext}>
              Save & Continue
            </MyButton>
          </div>
        </div>
      )}

      <span>
        {" "}
        <Table data={services} columns={serviceColumns} />
      </span>
    </div>
  );
}
