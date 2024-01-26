import { Tooltip } from "@material-tailwind/react";
import { useState } from "react";
import { GiProgression } from "react-icons/gi";
import Modal from "../Modal";
import CloseModalButton from "../../hooks/CloseModalButton";

export const ongoingrequests = [
  {
    id: 1,
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
    progress: 50,
  },

  {
    id: 2,
    photo: "https://i.pravatar.cc/48?u=4956934214",
    name: {
      firstName: "Obi",
      lastName: "Uche",
    },
    address: "3 Ogba rd, Ikeja Lagos",
    phone: "+234 8098287874",
    email: "obi@gmail.com",
    service: "Tailor",
    detail: "I want to sow up and down senate cotton",
    requestTime: "10:30pm Wed. January 10, 2024",
    deliveryTime: "8:00am Sat. January 13, 2024",
    progress: 80,
  },
];

export default function OngoingRequests({ children }) {
  const [progress, setProgress] = useState();
  const [updateProgress, setUpdateProgress] = useState(ongoingrequests);
  const [selectedId, setSelectedId] = useState(0);

  //console.log(selectedId);

  const handleProgress = () => {
    if (!progress) alert("Input the Job Progress");
    //update progress of selected by separating selected from main using filter

    const payload = {
      //update progress
      ...selectedId,
      progress: progress,
    };

    const filtered = updateProgress.filter(
      (where) => where.id !== selectedId.id,
    );
    setUpdateProgress([...filtered, payload]);
  };
  //   const handleProgress = (e) => {
  //     e.preventDefault();
  //     if (!progress) return;

  //     if (selectedId)
  //       setProgress([
  //         ...ongoingrequests,
  //         {
  //           progress: progress,
  //         },
  //       ]);
  //   };

  return (
    <Modal>
      <div className="mt-20">
        <div className="lg:grid lg:grid-cols-2">
          {updateProgress.map((request, index) => (
            <div
              key={request.id}
              className="flex items-center justify-between  p-5 shadow-md"
            >
              <div className="space-y-3 border-l-2 border-l-green-500 p-5 text-left transition-transform duration-300 hover:scale-110">
                {" "}
                <div className="flex items-center justify-center gap-2  text-blue-500">
                  <span className=" text-blue-500">Progress</span>
                  <input
                    type="range"
                    max="100"
                    min="0"
                    value={request.progress}
                    disabled
                  />
                  {request.progress} %
                </div>
                <p className="text-blue-500">{index + 1}</p>
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
                  Service: <span className="font-bold">{request.service}</span>
                </p>
                <p>{request.detail}</p>
                <p>
                  Expected Service Delivery Time:{" "}
                  <span className="font-bold">{request.deliveryTime}</span>{" "}
                </p>
              </div>

              <Modal.Open opens="progress">
                <div className="flex gap-5 ">
                  <Tooltip content="Update Progress" className="text-green-500">
                    <button
                      className="cursor-pointer text-[25px] text-blue-500"
                      onClick={() => setSelectedId(request)}
                    >
                      <GiProgression />
                    </button>
                  </Tooltip>
                </div>
              </Modal.Open>
            </div>
          ))}
        </div>
        <Modal.Window name="progress">
          <div className="text-center ">
            <div className="mt-10 flex items-center justify-center gap-2">
              Progress
              <input
                className="rounded-md border-2 border-green-500 px-2"
                type="input"
                onChange={(e) => setProgress(Number(e.target.value))}
                placeholder="Enter the % Value"
              />
              {progress}%
            </div>

            <button
              className="mt-10 rounded-xl border-2 border-blue-500 px-3 hover:bg-blue-500 hover:text-white"
              onClick={handleProgress}
            >
              <Modal.Close>Submit</Modal.Close>
            </button>
          </div>
        </Modal.Window>
      </div>
    </Modal>
  );
}
