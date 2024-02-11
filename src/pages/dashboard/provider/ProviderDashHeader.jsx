import {
  IoIosArrowRoundForward,
  IoIosNotificationsOutline,
} from "react-icons/io";

import { GiExpand } from "react-icons/gi";
import logo from "../../../../src/data/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import DarkModeToggle from "../../../ui/DarkModeToggle";
import { RxDropdownMenu } from "react-icons/rx";
import { IoChevronDownSharp, IoSettingsSharp } from "react-icons/io5";

import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Avatar from "react-avatar";
import { useState } from "react";

import YesModal from "../../../ui/YesModal";
import { GrStatusGood } from "react-icons/gr";
import { MdAvTimer } from "react-icons/md";

export default function ProviderHeader({ handleHideNav, handleHideMenu }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  //Modal Functions
  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const handleYes = () => {
    // Perform the logout action
    console.log("Logged out");
    navigate("/");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const userName = "Daniel Amaechi";

  return (
    <div className="dashHeader border-b-2 bg-style fixed top-0 z-50 flex h-[90px] w-[100%] pb-3 items-center lg:pr-0 justify-between px-5 py-2 shadow-2xl">
      <div className=" flex items-center justify-between  text-[24px] md:w-[30%] lg:w-[15%]">
        <span
          className="cursor-pointer text-[35px] lg:hidden"
          onClick={handleHideMenu}
        >
          <RxDropdownMenu />
        </span>

        <span className="hidden md:block lg:block">
          {" "}
          <NavLink to="/">
            <img src={logo} alt="logo" width="80" to="/" />
          </NavLink>
        </span>

        <span
          className="hidden cursor-pointer lg:block"
          onClick={handleHideNav}
        >
          <GiExpand />
        </span>
      </div>

      <div className="flex  items-center justify-between text-[28px] md:w-[50%] lg:w-[33%]">
        <div>
          <Menu>
            <MenuHandler className="relative text-[35px] text-[bg-text]  shadow-none">
              <Button className="text-text-style relative border-none bg-none text-black shadow-none">
                <div>
                  <span>
                    <IoIosNotificationsOutline />
                  </span>
                  <span className="absolute right-5 top-0 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-red-100 text-sm text-black">
                    {" "}
                    2
                  </span>
                </div>
              </Button>
            </MenuHandler>

            <MenuList className="bg-style mt-3 text-style z-50 border-2 p-0 text-center">
              <p className=" bg-black p-3 text-[20px] text-white">
                Notifications
              </p>
              <MenuItem className="text-blue500 mb-3 mt-3 text-right text-blue-500">
                <NavLink to="notifications">View All </NavLink>
              </MenuItem>

              <MenuItem className="mt-3 space-y-4 px-5 py-2">
                <p>
                  <p className="flex items-center gap-1">
                    <span className="text-lg text-blue-500">
                      <GrStatusGood />
                    </span>
                    <span> There is a maintenance service request</span>
                  </p>
                  <p className="flex items-center gap-1 px-6">
                    <span>
                      {" "}
                      <MdAvTimer />
                    </span>
                    <span className="font-light">5 mins ago</span>
                  </p>
                </p>
              </MenuItem>
              <MenuItem className="mt-3 space-y-4 px-5 py-2">
                <p>
                  <p className="flex items-center gap-1">
                    <span className="text-lg text-blue-500">
                      <GrStatusGood />
                    </span>
                    <span> A client made payment for service</span>
                  </p>
                  <p className="flex items-center gap-1 px-6 font-light ">
                    <span>
                      {" "}
                      <MdAvTimer />
                    </span>
                    <span>1 day ago</span>
                  </p>
                </p>
              </MenuItem>

              <MenuItem className="mb-3 mt-3 text-center">
                <NavLink
                  to="notifications"
                  className="text-md flex items-center justify-center pb-5 text-blue-500"
                >
                  <span>
                    {" "}
                    <IoIosArrowRoundForward />
                  </span>
                  <span> View More...</span>
                </NavLink>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>

        <div>
          <DarkModeToggle />
        </div>

        <Menu>
          <MenuHandler className="text-text-style  border-none bg-none shadow-none">
            <Button className="border-none bg-none shadow-none">
              {" "}
              <div className="flex gap-3  items-center justify-start">
                {" "}
                <span className="flex h-[50px] w-[50px] items-center justify-center  rounded-full border-2 ">
                  <Avatar
                    name={userName}
                    color="black"
                    size="40"
                    className=" rounded-full"
                  />
                </span>
                <span className="text-[14px] lg:text-[18px]">{userName}</span>
                <span className="text-[15px]">
                  <IoChevronDownSharp />
                </span>
              </div>
            </Button>
          </MenuHandler>

          <div>
            {" "}
            <MenuList>
              <MenuItem>
                {" "}
                <NavLink
                  to="providerSettings"
                  className="flex  items-center gap-1"
                >
                  <IoSettingsSharp />
                  Settings{" "}
                </NavLink>
              </MenuItem>
              <MenuItem>
                {" "}
                <button
                  className="mt-3 flex items-center gap-1"
                  onClick={handleLogout}
                >
                  <RiLogoutCircleRLine />
                  Logout
                </button>
              </MenuItem>
            </MenuList>
          </div>
        </Menu>
      </div>
      <YesModal
        isOpen={isModalOpen}
        onYes={handleYes}
        onClose={handleCloseModal}
      />
    </div>
  );
}
