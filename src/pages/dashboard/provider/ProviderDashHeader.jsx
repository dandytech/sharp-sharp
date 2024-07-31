import {
  IoIosArrowRoundForward,
  IoIosNotificationsOutline,
} from "react-icons/io";

import { GiExpand } from "react-icons/gi";
import logo from "../../../../src/data/logo.png";
import { NavLink } from "react-router-dom";
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

import { GrStatusGood } from "react-icons/gr";
import { MdAvTimer } from "react-icons/md";
import Modal from "../../../ui/Modal";
import MyButton from "../../../ui/MyButton";
import { useGetProvider } from "../../../features/authentication/provider/useGetProvider";
import { useLogout } from "../../../features/authentication/provider/useProviderLogout";
import { useLogoutClient } from "../../../features/client/auth/useLogoutClient";
import useAuth from "../../../hooks/useAuth";

export default function ProviderHeader({ handleHideNav, handleHideMenu }) {
  //retrieve Provider details Query using useGetProvider hook
  //const { user } = useGetProvider();

  //logout Query called
  //const { logout, isLoading } = useLogout();
  const { clientLogout, isLoading } = useLogoutClient();
  const { user } = useAuth();

  return (
    <Modal>
      <div className="dashHeader bg-style fixed top-0 z-50 flex h-[90px] w-[100%] items-center justify-between border-b-2 px-5 py-2 pb-3 shadow-2xl lg:pr-0">

        <div className=" flex items-center justify-between  text-[24px] md:w-[30%] lg:w-[45%]">
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

          <span className="hidden lg:block">Provider Dashboard</span>

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

              <MenuList className="bg-style text-style z-50 mt-3 border-2 p-0 text-center">
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
                <div className="flex items-center  justify-start gap-3">
                  {" "}
                  <span className="flex h-[50px] w-[50px] items-center justify-center  rounded-full border ">
                    {!user?.photo ? (
                      <Avatar
                        name={user?.name}
                        color="black"
                        size="40"
                        className=" rounded-full"
                      />
                    ) : (
                      <img src={user?.photo} className="rounded-full" />
                    )}
                  </span>
                  <span className="text-[14px] lg:text-[18px]">
                    {user?.name}
                  </span>
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
                  <Modal.Open opens="logout">
                    <button className="mt-3 flex items-center gap-1">
                      <RiLogoutCircleRLine />
                      Logout
                    </button>
                  </Modal.Open>
                </MenuItem>
              </MenuList>
            </div>
          </Menu>
        </div>
        <Modal.Window name="logout">
          <div>
            {" "}
            <p className="mb-5 mt-7 bg-black px-5 py-1 text-center font-semibold text-white">
              Logout !!!
            </p>
            <p className="px-5 pb-4 text-center">Are You Sure?</p>
            <p className="flex justify-between p-2">
              {" "}
              <MyButton type="primary">
                <Modal.Close>No</Modal.Close>
              </MyButton>
              <MyButton
                type="primary"
                onClick={clientLogout}
                disabled={isLoading}
              >
                Yes
              </MyButton>
            </p>
          </div>
        </Modal.Window>
      </div>
    </Modal>
  );
}
