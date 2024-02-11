import { NavLink, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import YesNoModal from "../../../ui/YesModal";

import { useState } from "react";

export default function NavbarLayout({ hideNav }) {
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

  return (
    <div
      className={`border-r-2 ${
        hideNav
          ? "navDashboard fixed left-0 z-[1000] mt-[50px]  h-[100vh] w-auto  p-5 py-20 shadow-xl"
          : "navDashboard fixed  left-0 z-[1000]  mt-[30px] h-[100vh] w-auto p-5 py-20 shadow-xl"
      }`}
    >
      <div className="flex gap-2 ">
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
            <button onClick={handleLogout}>
              <RiLogoutCircleRLine />
            </button>
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
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        )}
      </div>

      <YesNoModal
        isOpen={isModalOpen}
        onYes={handleYes}
        onClose={handleCloseModal}
      />
    </div>
  );
}
