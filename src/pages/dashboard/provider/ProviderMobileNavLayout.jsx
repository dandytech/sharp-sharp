import { MdDashboard } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { NavLink } from "react-router-dom";

import { RiLogoutCircleRLine } from "react-icons/ri";
import logo from "../../../../src/data/logo.png";
import Modal from "../../../ui/Modal";
import MyButton from "../../../ui/MyButton";

export default function NavbarMobileLayout({ hideNav, logout, isLoading }) {
  return (
    <Modal>
      <div className="bg-style z-5 fixed left-0 mt-[88px] h-auto w-auto p-10 shadow-xl lg:hidden">
        <NavLink to="/" className="md:hidden">
          <img src={logo} alt="logo" width="100" />
        </NavLink>
        <div className="flex gap-3">
          <div className="text-[24px]">
            <div className="mb-5">
              <NavLink
                to="dashboard"
                activeClassName="active"
                onClick={hideNav}
              >
                <MdDashboard />
              </NavLink>
            </div>

            <div className="mb-5">
              <NavLink to="services" activeClassName="active" onClick={hideNav}>
                <GrServices />
              </NavLink>
            </div>
            <div className="mb-5">
              <NavLink to="payments" activeClassName="active" onClick={hideNav}>
                <MdOutlinePayments />
              </NavLink>
            </div>
            <div className="mb-5">
              <NavLink
                to="notifications"
                activeClassName="active"
                onClick={hideNav}
              >
                <IoIosNotifications />
              </NavLink>
            </div>
            <div className="mb-5">
              <NavLink
                to="providerSettings"
                activeClassName="active"
                onClick={hideNav}
              >
                <IoSettingsSharp />
              </NavLink>
            </div>
            <div className="mb-5">
              <Modal.Open opens="logout">
                <button>
                  <RiLogoutCircleRLine />
                </button>
              </Modal.Open>
            </div>
          </div>
          <div className="text-[16px]">
            <div className="mb-5">
              <NavLink
                to="dashboard"
                activeClassName="active"
                onClick={hideNav}
              >
                Dashboard
              </NavLink>
            </div>

            <div className="mb-5 ">
              <NavLink to="services" activeClassName="active" onClick={hideNav}>
                Service_Requests
              </NavLink>
            </div>
            <div className="mb-5">
              <NavLink to="payments" activeClassName="active" onClick={hideNav}>
                Payments
              </NavLink>
            </div>
            <div className="mb-5">
              <NavLink
                to="notifications"
                activeClassName="active"
                onClick={hideNav}
              >
                Notifications
              </NavLink>
            </div>
            <div className="mb-5">
              <NavLink
                to="providerSettings"
                activeClassName="active"
                onClick={hideNav}
              >
                Settings
              </NavLink>
            </div>
            <div className="mb-5">
              <Modal.Open opens="logout">
                <button>Logout</button>
              </Modal.Open>
            </div>
          </div>
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
              <MyButton type="primary" onClick={logout} disabled={isLoading}>
                Yes
              </MyButton>
            </p>
          </div>
        </Modal.Window>
      </div>
    </Modal>
  );
}
