import { Tooltip } from "@material-tailwind/react";
import Modal from "../Modal";

export const requests = [
  {
    id: 1,
    photo: "https://i.pravatar.cc/48?u=49934214",
    name: {
      firstName: "Obi",
      lastName: "Uche",
    },
    address: "3 Ogba rd, Ikeja Lagos",
    phone: "+234 8098287874",
    email: "obi@gmail.com",
    service: "Tailor",
    detail: "I want to sow up and down senate cotton",
    requestTime: "10:30pm Wed. January 11, 2024",
    deliveryTime: "8:00am Sat. January 13, 2024",
  },

  {
    id: 2,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    name: {
      firstName: "John",
      lastName: "Okechukwu",
    },
    address: "4 uba rd, Ikeja Lagos",
    phone: "+234 8228287874",
    email: "john@gmail.com",
    service: "Typist",
    detail: "I need want you to type 10 pages document within 1hr",
    requestTime: "10:30pm Wed. January 10, 2024",
    deliveryTime: "8:00am Sat. January 13, 2024",
  },

  {
    id: 3,
    photo: "https://i.pravatar.cc/48?u=4442896764",
    name: {
      firstName: "John",
      lastName: "Okechukwu",
    },
    address: "4 uba rd, Ikeja Lagos",
    phone: "+234 8228287874",
    email: "john@gmail.com",
    service: "Typist",
    detail: "I need want you to type 10 pages document within 1hr",
    requestTime: "10:30pm Wed. January 10, 2024",
    deliveryTime: "8:00am Sat. January 13, 2024",
  },
  {
    id: 4,
    photo: "https://i.pravatar.cc/48?u=445452896764",
    name: {
      firstName: "John",
      lastName: "Okechukwu",
    },
    address: "4 uba rd, Ikeja Lagos",
    phone: "+234 8228287874",
    email: "john@gmail.com",
    service: "Typist",
    detail: "I need want you to type 10 pages document within 1hr",
    requestTime: "10:30pm Wed. January 10, 2024",
    deliveryTime: "8:00am Sat. January 13, 2024",
  },
];

import { useState } from "react";

export default function CancelledRequest() {
  const [canceledRequests, setCanceledRequests] = useState(requests);

  const deleteItem = (itemId) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this item?",
    );

    if (shouldDelete) {
      const updatedItems = canceledRequests.filter(
        (item) => item.id !== itemId,
      );
      setCanceledRequests(updatedItems);
    }
  };
  return (
    <Modal>
      {canceledRequests.length == '' ? (
        <div>NO DATA YET</div>
      ) : (
        <div className="mt-20">
          <div className="lg:grid lg:grid-cols-2">
            {canceledRequests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between  p-5 shadow-md"
              >
                <div className="space-y-3 border-l-2 border-l-red-500 p-5 text-left transition-transform duration-300 hover:scale-110">
                  {" "}
                  <p className="text-blue-500">{request.id}</p>
                  <p className="flex h-[150px] w-[150px] items-center justify-center rounded-full ">
                    <img
                      src={request.photo}
                      alt="No photo"
                      className="h-[150px] w-[150px] rounded-full text-center "
                    />
                  </p>
                  <p>
                    {request.name.firstName} {request.name.lastName}
                  </p>
                  <p className="font-bold">{request.address}</p>
                  <p>{request.phone}</p>
                  <p>{request.email}</p>
                  <p>Request Date: {request.requestTime}</p>
                  <p>
                    Service:{" "}
                    <span className="font-bold">{request.service}</span>
                  </p>
                  <p>{request.detail}</p>
                  <p>
                    Expected Service Delivery Time:{" "}
                    <span className="font-bold">{request.deliveryTime}</span>{" "}
                  </p>
                </div>

                <div className="flex gap-5 ">
                  <Tooltip content="Delete" className="text-red-500">
                    <button
                      onClick={() => deleteItem(request.id)}
                      className="shadow-none"
                    >
                      ❌
                    </button>
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Modal>
  );
}
