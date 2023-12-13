import { useEffect, useRef } from "react";

//Modal Custom Hook, to close modal when clicked outside it
export function useOutSideClick(handler, listenCapturing = true) {
  const ref = useRef();
  //to close the modal when user click outside
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing],
  );

  return ref;
}
