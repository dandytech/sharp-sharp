import { useState } from "react";

import Table from "../../pages/dashboard/provider/Table";
import MyButton from "../MyButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEditProvider } from "../../features/authentication/provider/useEditProvider";
import { useGetProvider } from "../../features/authentication/provider/useGetProvider";

export default function ServiceInfo({
  handleTabClick,
  serviceColumns,
  //providerServices,
}) {
  const [show, setShow] = useState(false);

  const [serviceName, setName] = useState("");
  const [servicePrice, setPrice] = useState("");
  const [serviceDescription, setDescription] = useState("");

  //const [services, setServices] = useState(providerServices);

  //get Provider's detail hook
  const { user, refetch } = useGetProvider();

  const handleShow = (e) => {
    e.preventDefault();

    setShow(!show);
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (!servicePrice || !servicePrice || !serviceDescription)
      toast.error("Fill All the Fields");
    else {
      handleTabClick(3);
    }
  };

  // let nextId = services.length;
  // const handleSave = (e) => {
  //   e.preventDefault();
  //   if (!serviceName || !servicePrice || !serviceDescription) {
  //     toast.warning("All Fields are required 😃");
  //   } else {
  //     setServices([
  //       ...services,
  //       {
  //         id: nextId + 1,
  //         name: name,
  //         price: price,
  //         description: description,
  //       },
  //     ]);

  //     // const id = crypto.randomUUID();
  //     // const newService = {
  //     //   id: id,
  //     //   name,
  //     //   price,
  //     //   description,

  //     // };
  //     // handleAddService(newService);

  //     setName("");
  //     setPrice("");
  //     setDescription("");

  //     toast.success("Service Added Successfully ✅");
  //     setShow(false);
  //   }
  // };

  //update Provider's details hook
  const { updateProvider, isUpdating } = useEditProvider();

  //update function
  function handleSubmit(e) {
    e.preventDefault();

    if (!user?.user_metadata.fullName) return;

    const payload = {
      services: {
        serviceName: serviceName,
        servicePrice: servicePrice,
        serviceDescription: serviceDescription,
      },
    };
    console.log(payload);

    updateProvider(payload, {
      onSuccess: () => {
        refetch(); // Function to clear & trigger data refetching
        handleTabClick(2);
      },
    });
  }

  const input =
    "w-full bg-white px-3 py-2 font-semibold hover:border-blue-500 rounded-xl border-2 border-gray-300";

  return (
    <form onSubmit={handleSubmit}>
      <p className="py-5">
        <span className="font-extralight">Service Category:</span>
        <span className="font-bold">
          {" "}
          {user?.user_metadata?.serviceCategory}
        </span>
      </p>
      <div className="mb-5 items-center justify-between md:mb-0 md:flex lg:mb-0 lg:flex">
        <p className="md:text-md mb-3 mt-20 flex text-sm font-semibold lg:text-lg xl:text-xl ">
          Your Service Varieties Details
        </p>

        <MyButton type="primary" onClick={handleShow}>
          {show ? "Close" : " + Add"}
        </MyButton>
      </div>

      {show && (
        <div>
          <div className="mt-5 gap-5 space-y-5 lg:flex lg:space-y-0">
            <div className="lg:w-[50%]">
              <label className="flex">Service Name</label>
              <p className="flex items-center">
                <span className="w-full">
                  {" "}
                  <input
                    type="text"
                    id="serviceName"
                    className={input}
                    placeholder="Service Type"
                    disabled={isUpdating}
                    value={serviceName}
                    onChange={(e) => setName(e.target.value)}
                  />
                </span>
                <span className="mt-[-20px] text-[30px] text-red-600">*</span>
              </p>
            </div>

            <div className="lg:w-[50%]">
              <label className="flex">Price (NGN)</label>{" "}
              <p className="flex items-center">
                <span className="w-full">
                  <input
                    type="number"
                    id="servicePrice"
                    className={input}
                    placeholder="6500"
                    disabled={isUpdating}
                    value={servicePrice}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </span>
                <span className="mt-[-20px] text-[30px] text-red-600">*</span>
              </p>
            </div>
          </div>

          <div className="mt-5">
            <label className="flex">Service Description</label>
            <p className="flex items-center">
              <span className="w-full">
                <textarea
                  rows={5}
                  className={input}
                  id="serviceDescription"
                  placeholder="Describe the Service You Offer"
                  value={serviceDescription}
                  disabled={isUpdating}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </span>
              <span className=" text-[30px] text-red-600">*</span>
            </p>
          </div>

          <div className="mb-10 mt-5 flex lg:mt-5">
            <MyButton
              type="primary"
              onClick={handleSubmit}
              disabled={isUpdating}
            >
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

      <span> {/* <Table data={services} columns={serviceColumns} /> */}</span>

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
    </form>
  );
}
