import { RiUserSearchFill } from "react-icons/ri";
import Modal from "../Modal";
import { MdMedicalServices } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Tooltip } from "@material-tailwind/react";
import { FaEye } from "react-icons/fa";

export default function AdminViewRecentRequests({ serviceRequest }) {
  return (
    <Modal>
      <div>
        <div
          className={`space-y-1 border-l-4 border-l-blue-500 px-2 transition-transform  duration-300 ease-in hover:scale-110 hover:bg-blue-500 hover:p-3  hover:text-white ${
            serviceRequest?.id == 2
              ? "border-l-green-500 "
              : serviceRequest?.id == 4
                ? "border-l-yellow-500 "
                : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center  justify-start gap-2">
                <span>
                  <RiUserSearchFill />
                </span>
                <span>
                  {serviceRequest?.name.firstName}{" "}
                  {serviceRequest.name.lastName}
                </span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <span>
                  <MdMedicalServices />
                </span>
                <span>{serviceRequest?.service}</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <span>
                  <IoLocationSharp />
                </span>
                <span>{serviceRequest?.address}</span>
              </div>
            </div>
            <Tooltip content="View details">
              <div className="px-5">
                <Modal.Open opens="requestdetails">
                  <button className="shadow-none">
                    <FaEye />
                  </button>
                </Modal.Open>
              </div>
            </Tooltip>
          </div>
        </div>
        <Modal.Window name="requestdetails">
          <div className="w-[300px] overflow-y-auto md:w-[600px] lg:w-[800px] border-2">
            <p className="mb-4 mt-10 bg-black px-5 py-2 text-white">
              REQUEST DETAILS
            </p>

            <div className="space-y-3  px-5 pb-10">
              <p>
                <img
                  className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-2 p-3"
                  src={serviceRequest.photo}
                  alt="photo"
                />
              </p>
              <p>
                <span className="font-semibold">Name:</span>{" "}
                {serviceRequest.name.firstName} {serviceRequest.name.lastName}
              </p>
              <p>
                <span className="font-semibold">Address:</span>{" "}
                {serviceRequest.address}
              </p>
              <p>
                <span className="font-semibold">Phone: </span>{" "}
                {serviceRequest.phone}
              </p>
              <p>
                <span className="font-semibold">Email: </span>
                {serviceRequest.email}
              </p>
              <p>
                <span className="font-semibold">Request Time: </span>{" "}
                {serviceRequest.requestTime}
              </p>
              <p>
                <span className="font-semibold">Requested Service: </span>
                {serviceRequest.service}
              </p>
              <p>
                <span className="font-semibold">Request Details: </span>
                {serviceRequest.detail}
              </p>
              <p>
                <span className="font-semibold">Expected Delivery Time: </span>{" "}
                {serviceRequest.deliveryTime}
              </p>
            </div>
          </div>
        </Modal.Window>
      </div>
    </Modal>
  );
}
