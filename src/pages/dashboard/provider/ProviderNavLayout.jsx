import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

import { GrServices } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

import Modal from "../../../ui/Modal";
import MyButton from "../../../ui/MyButton";

export default function NavbarLayout({ hideNav, logout, isLoading }) {
  return (
    <Modal>
      <div
        className={`border-r-2 ${
          hideNav
            ? "navDashboard fixed left-0 z-[1000] mt-[50px]  h-[100vh] w-auto  p-5 py-20 shadow-xl"
            : "navDashboard fixed  left-0 z-[1000]  mt-[30px] h-[100vh] w-auto p-5 py-20 shadow-xl"
        }`}
      >
        <div className="flex gap-3">
          <div className="text-[24px]">
            <div className="mb-8">
              <NavLink to="dashboard" activeClassName="active">
                <MdDashboard />
              </NavLink>
            </div>

            <div className="mb-8">
              <NavLink to="services" activeClassName="active">
                <GrServices />
              </NavLink>
            </div>
            <div className="mb-8">
              <NavLink to="payments" activeClassName="active">
                <MdOutlinePayments />
              </NavLink>
            </div>
            <div className="mb-8">
              <NavLink to="notifications" activeClassName="active">
                <IoIosNotifications />
              </NavLink>
            </div>
            <div className="mb-8">
              <NavLink to="providerSettings" activeClassName="active">
                <IoSettingsSharp />
              </NavLink>
            </div>
            <div className="mb-8">
              <Modal.Open opens="logout">
                <RiLogoutCircleRLine />
              </Modal.Open>
            </div>
          </div>
          {hideNav && (
            <div className="text-[16px]">
              <div className="mb-8">
                <NavLink to="dashboard" activeClassName="active">
                  Dashboard
                </NavLink>
              </div>

              <div className="mb-8 ">
                <NavLink to="services" activeClassName="active">
                  Service Requests
                </NavLink>
              </div>
              <div className="mb-8">
                <NavLink to="payments" activeClassName="active">
                  Payments
                </NavLink>
              </div>
              <div className="mb-8">
                <NavLink to="notifications" activeClassName="active">
                  Notifications
                </NavLink>
              </div>
              <div className="mb-8">
                <NavLink to="providerSettings" activeClassName="active">
                  Settings
                </NavLink>
              </div>
              <div className="mb-8">
                <Modal.Open opens="logout">
                  <button>Logout</button>
                </Modal.Open>
              </div>
            </div>
          )}
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
