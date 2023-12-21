import { useDarkMode } from "../context/DarkModeContext";


import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className="rounded-full">
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </button>
  );
}
