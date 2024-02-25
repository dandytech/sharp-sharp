import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useOutSideClick } from "../hooks/useOutSideClick";

// const StyledModal = styled.div`
//   position: fixed;
//   top: 60%;
//   left: 50%;
//   height: auto;
//   inset: 50;
//   width: auto;
//   transform: translate(-50%, -50%);
//   background-color: var(--color-grey-0);
//   border-radius: var(--border-radius-lg);
//   box-shadow: var(--shadow-lg);
//   //padding: 70px 25px 25px 25px;
//   transition: all 0.5s;
//   color: var(--text-color);
//   overflow-y: auto;
//   width: auto;
//   // Media query for large screens
//   /* @media (min-width: 1024px) {
//     top: 55%;
//   } */
//   @media (max-width: 768px) {
//     width: auto;
//     top: 75%;

//   }
//   /* @media screen and (max-width: 768px) {
//     & {
//       width: auto;
//     }
//   }   */
// `;

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: var(--backdrop-color);
//   backdrop-filter: blur(4px);
//   z-index: 1000;
//   transition: all 0.5s;
//   overflow-y: auto;
//   @media screen and (max-width: 768px) {
//     & {
//     }
//   }
// `;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 25px;
  color: var(--text-color);
  max-height: 90vh; /* Maximum height of the modal */
  overflow-y: auto; /* Enable vertical scrolling if the content exceeds the max height */
  width: auto; /* Adjust width as needed */
  max-width: auto; /* Maximum width of the modal */
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
`;

const Button = styled.button`
  background: none;
  border: none;
  margin-right: 13px;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    /* background-color: var(--color-grey-100); */
  }

  & svg {
    width: 2rem;
    height: 2rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
  & svg:hover {
    color: red;
  }
`;

export const ModalContext = createContext();

export default function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

const Close = ({ children }) => {
  const { close } = useContext(ModalContext);

  return (
    <div>
      <button onClick={close}>{children}</button>
    </div>
  );
};

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  //call the custom Hook to close when clicked outside the modal
  const ref = useOutSideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,

    document.body,
    //createPortal enable redendring of the modal outside the dom and allows component float over ui

    //cloneElement lets you create a new React element using another element as a starting point but with different props and children
  );
}

Modal.Open = Open;
Modal.Window = Window;
Modal.Close = Close;
