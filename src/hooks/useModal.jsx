import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import { useState } from "react";
// import { Dialog, DialogHeader, DialogBody } from "../../components/UI/Dialog";
import { FaTimes } from "react-icons/fa";

const useModal = () => {
  const [showModal, setModal] = useState(false);

  const setShowModal = (state) => setModal(state);

  const Modal = ({ title, children, size, type }) => {
    return (
      <>
        <Dialog
          open={showModal}
          size={size || "md"}
          handler={() => setShowModal(false)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
          className="border-0 py-5 outline-none"
        >
          <DialogHeader>
            {type === "withCancel" ? (
              <div className="flex w-full items-center justify-between border-b px-2">
                <p>{title}</p>
                <FaTimes
                  className="text-gray-500"
                  onClick={() => setShowModal(false)}
                />
              </div>
            ) : (
              <p className="w-full text-center">{title}</p>
            )}
          </DialogHeader>
          <DialogBody>{children}</DialogBody>
        </Dialog>
      </>
    );
  };

  return { Modal, showModal, setShowModal };
};

export default useModal;
