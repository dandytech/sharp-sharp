import { MdDashboard } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import YesModal from "../../../ui/YesModal";
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function NavbarMobileLayout({ hideNav }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  //Modal Functions
  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const handleYes = () => {
    navigate("/");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // const closeNav=()=>{
  //   setTimeout(() => {
  //     if (hideNav) {
  //       hideNav;
  //     }

  //   }, 5000);
  // }

  return (
    <div className="navDashboard fixed left-0 mt-10 h-auto w-auto p-10 shadow-xl">
      <div className="flex gap-2">
        <div className="text-[24px]">
          <div className="mb-5">
            <NavLink to="dashboard" activeClassName="active" onClick={hideNav}>
              <MdDashboard />
            </NavLink>
          </div>
          <div className="mb-5">
            <NavLink to="kyc" activeClassName="active" onClick={hideNav}>
              <FaUserPlus />
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
            <button onClick={handleLogout}>
              <RiLogoutCircleRLine />
            </button>
          </div>
        </div>
        <div className="text-[16px]">
          <div className="mb-5">
            <NavLink to="dashboard" activeClassName="active" onClick={hideNav}>
              Dashboard
            </NavLink>
          </div>
          <div className="mb-5">
            <NavLink to="kyc" activeClassName="active" onClick={hideNav}>
              KYC
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
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
      <YesModal
        isOpen={isModalOpen}
        onYes={handleYes}
        onClose={handleCloseModal}
      />
    </div>
  );
}