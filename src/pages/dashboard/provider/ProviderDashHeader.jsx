import { IoIosNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { GiExpand } from "react-icons/gi";
import logo from "../../../../src/data/logo.png";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "../../../ui/DarkModeToggle";
export default function ProviderHeader() {
  return (
    <div className="fixed top-0  flex h-[70px] w-full items-center justify-between  px-10 py-2 shadow-2xl">
      <div className="flex w-[50%] items-center justify-between gap-20 text-[24px]">
        <NavLink to="/">
          <img src={logo} alt="logo" width="80" to="/" />
        </NavLink>

        <span>
          <GiExpand />
        </span>
      </div>

      <div className="lg:gap-10 flex w-[40%]  items-center justify-evenly text-[34px]">
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
