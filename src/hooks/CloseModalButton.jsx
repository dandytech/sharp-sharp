import { useContext } from "react";
import { ModalContext } from "../ui/Modal";

const CloseModalButton = ({ children }) => {
  const { close } = useContext(ModalContext);

  return (
    <div>
      <button onClick={close}>{children}</button>
    </div>
  );
};
export default CloseModalButton;
