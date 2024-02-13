import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

import {
  IoIosArrowRoundForward,
  IoIosNotificationsOutline,
} from "react-icons/io";
import { RxDropdownMenu } from "react-icons/rx";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "../../../ui/DarkModeToggle";
import Avatar from "react-avatar";
import { IoChevronDownSharp, IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";

import logo from "../../../../src/data/logo.png";
import { FaAlignCenter } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { MdAvTimer } from "react-icons/md";
import Modal from "../../../ui/Modal";
import MyButton from "../../../ui/MyButton";

export default function ClientDashHeader({ handleHideNav, hideNav }) {
  const navigate = useNavigate();

  const userName = "Admin Daniel";

  return (
    <Modal>
      <div
        className={`w-[100%] border-b-2 pl-5 pr-3 ${
          !hideNav
            ? "bg-style text-bg-text fixed right-0 top-0 flex  h-[100px]  items-center justify-between py-2 shadow-2xl lg:w-[calc(100%-80px)]"
            : "bg-style text-bg-text fixed right-0 top-0 flex  h-[100px]  items-center justify-between py-2 shadow-2xl lg:w-[calc(100%-250px)]"
        }`}
      >
        <div className="flex w-[20%] items-center  justify-between text-[24px] md:w-[55%] lg:w-[30%]">
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

          <span className="hidden md:block">Client Dashboard</span>
          <span className="hidden md:block lg:hidden ">
            <NavLink to="/">
              <img src={logo} alt="logo" width="80" to="/" />
            </NavLink>
          </span>
        </div>

        <div className="flex  w-[100%] items-center justify-between text-[28px] md:w-[40%] lg:w-auto">
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

              <MenuList className="bg-style text-style mt-5 border-2 p-0 text-center">
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
                      <span className="text-lg">
                        {" "}
                        There is a maintenance service request
                      </span>
                    </p>
                    <p className="flex items-center gap-1 px-6 font-light">
                      <span>
                        {" "}
                        <MdAvTimer />
                      </span>
                      <span>5 mins ago</span>
                    </p>
                  </p>
                </MenuItem>
                <MenuItem className="mt-3 space-y-4 px-5 py-2">
                  <p>
                    <p className="flex items-center gap-1">
                      <span className="text-lg text-blue-500">
                        <GrStatusGood />
                      </span>
                      <span className="text-lg">
                        {" "}
                        A client made payment for service
                      </span>
                    </p>
                    <p className="flex items-center gap-1 px-6 font-light">
                      <span>
                        {" "}
                        <MdAvTimer />
                      </span>
                      <span>5 mins ago</span>
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
            <MenuHandler className="text-text-style border-none bg-none shadow-none">
              <Button className="border-none bg-none shadow-none">
                {" "}
                <div className="flex items-center justify-start gap-3">
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
                  <NavLink to="settings" className="flex  items-center gap-1">
                    <IoSettingsSharp />
                    Settings{" "}
                  </NavLink>
                </MenuItem>

                <MenuItem>
                  <Modal.Open opens="logout">
                    <button className="mt-3 flex items-center gap-1">
                      <span>
                        {" "}
                        <RiLogoutCircleRLine />
                      </span>
                      <span>Logout</span>
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
            <p className="mb-5 mt-7 bg-black px-5 text-center font-semibold text-white py-1">
              Logout !!!
            </p>
            <p className="px-5 pb-4 text-center">Are You Sure?</p>
            <p className="flex justify-between p-2">
              {" "}
              <MyButton type="primary">
                <Modal.Close>No</Modal.Close>
              </MyButton>
              <MyButton type="primary" onClick={() => navigate("/")}>
                Yes
              </MyButton>
            </p>
          </div>
        </Modal.Window>
      </div>
    </Modal>
  );
}
