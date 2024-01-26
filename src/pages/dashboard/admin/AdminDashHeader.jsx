import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxDropdownMenu } from "react-icons/rx";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "../../../ui/DarkModeToggle";
import Avatar from "react-avatar";
import { IoChevronDownSharp, IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import YesModal from "../../../ui/YesModal";
import logo from "../../../../src/data/logo.png";
import { FaAlignCenter } from "react-icons/fa6";

export default function AdminDashHeader({ handleHideNav, hideNav }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  //Modal Functions
  const handleLogout = () => {
    console.log("clicked");
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

  const userName = "Admin Daniel";

  return (
    <div
      className={`w-[100%] p-5 ${
        !hideNav
          ? "bg-style text-bg-text fixed right-0 top-0 flex  h-[100px]  items-center justify-between py-2 shadow-2xl lg:w-[calc(100%-80px)]"
          : "bg-style text-bg-text fixed right-0 top-0 flex  h-[100px]  items-center justify-between py-2 shadow-2xl lg:w-[calc(100%-250px)]"
      }`}
    >
      <div className="flex w-[30%] items-center  justify-between text-[24px] md:w-[30%] lg:w-[40%]">
        <span
          className="cursor-pointer text-[35px] lg:hidden"
          onClick={handleHideNav}
        >
          <RxDropdownMenu />
        </span>

        <span
          className="hidden cursor-pointer lg:block"
          onClick={handleHideNav}
        >
          <FaAlignCenter />
        </span>

        <span className="hidden md:block lg:hidden ">
          <NavLink to="/">
            <img src={logo} alt="logo" width="80" to="/" />
          </NavLink>
        </span>
      </div>

      <div className="flex  w-[100%] items-center justify-between gap-5 text-[28px] md:w-[50%] lg:w-[35%]">
        <div>
          <Menu>
            <MenuHandler className="relative text-[35px] text-[bg-text]  shadow-none">
              <Button className="text-text-style border-none bg-none text-black shadow-none">
                <IoIosNotificationsOutline />
                <div className="absolute right-0 top-1">
                  <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-red-100 text-sm text-black">
                    {" "}
                    2
                  </span>
                </div>
              </Button>
            </MenuHandler>

            <MenuList className="border-none p-0 text-center">
              <p className=" bg-black p-3 text-[20px] text-white">
                Notifications
              </p>

              <MenuItem className="mt-3 p-3">
                <NavLink to="notifications">
                  There a cleaner service request
                </NavLink>
              </MenuItem>

              <MenuItem className="mb-3 mt-3 text-center">
                <NavLink to="notifications">View All </NavLink>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>

        <div>
          <DarkModeToggle />
        </div>

        <Menu>
          <MenuHandler className="text-text-style border-none bg-none shadow-none">
            <Button className="border-none bg-none shadow-none">
              {" "}
              <div className="flex items-center justify-start">
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
