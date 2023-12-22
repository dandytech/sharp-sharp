import { IoIosNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { GiExpand } from "react-icons/gi";
import logo from "../../../../src/data/logo.png";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "../../../ui/DarkModeToggle";
export default function ProviderHeader() {
  return (
    <div className="fixed top-0  flex h-[70px] w-full items-center justify-between  px-10 py-2 shadow-2xl">
      <div className="flex w-[60%] items-center justify-between text-[24px]">
        <NavLink to="/">
          <img src={logo} alt="logo" width="90" to="/" />
        </NavLink>

        <span>
          <GiExpand />
        </span>
      </div>

      <div className="flex w-[10%] items-center justify-center gap-2  text-[28px] md:gap-5 lg:gap-10">
        <span>
          <IoIosNotificationsOutline />
        </span>
        <span>
          <RxAvatar />
        </span>

        <span>
          <DarkModeToggle />
        </span>
      </div>
    </div>
  );
}
