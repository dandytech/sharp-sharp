const notifications = [
  {
    id: 1,

    photo: "https://i.pravatar.cc/48?u=4442896764",
    action: "There a reschedule service delivery request from a client",
    time: "10 mins ago",
  },

  {
    id: 2,
    photo: "https://i.pravatar.cc/48?u=4443242896764",
    action: "There is a cleaner  service request made by a client",
    time: "2 mins ago",
  },
];

import { IoEllipsisVerticalSharp } from "react-icons/io5";
import Modal from "../Modal";

export default function UnreadNotifications() {
  return (
    <Modal>
      <div className="z-0 mt-10">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className=" m-auto mt-3 flex items-center justify-start gap-2 rounded-xl border-2 border-blue-500 p-3  transition-all duration-300 hover:scale-105 lg:w-[70%]"
          >
            <div className="z-0 flex h-[50px] w-[50px] items-center justify-center rounded-full border-2  ">
              <img
                src={notification.photo}
                alt="photo"
                className="rounded-full"
              />
            </div>
            <div className="w-[90%] text-left">
              <p>{notification.action}</p>
              <p className="font-light">{notification.time}</p>
            </div>

            <Modal.Open opens="notify">
              <div className="w-[3%] cursor-pointer">
                <IoEllipsisVerticalSharp />
              </div>
            </Modal.Open>

            <Modal.Window name="notify">
              <div className="m-auto mt-5 p-5 text-center shadow-2xl">
                <p>Mark as Unread</p>
                <p className="mt-10 cursor-pointer  rounded-xl bg-blue-500 text-white">
                  Ok
                </p>
              </div>
            </Modal.Window>
          </div>
        ))}
      </div>
    </Modal>
  );
}
