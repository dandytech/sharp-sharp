import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function NavbarLayout() {
  return (
    <div className=" fixed left-0 mt-[70px]  h-[100vh] w-[200px]  p-10">
    <div className="flex">
    
     <div className="text-[24px]">
     <div className="mb-5">
        <NavLink to="dashboard" activeClassName="active">
        <MdDashboard />

        </NavLink>
      </div>
      <div className="mb-5">
        <NavLink to="kyc" activeClassName="active">
        <FaUserPlus />

        </NavLink>
      </div>
      <div className="mb-5">
        <NavLink to="services" activeClassName="active">
        <GrServices />

        </NavLink>
      </div>
      <div className="mb-5">
        <NavLink to="settings" activeClassName="active">
       
        <IoSettingsSharp />
        </NavLink>
      </div>
      <div className="mb-5">
        <NavLink to="settings" activeClassName="active">
      
        <RiLogoutCircleRLine />
        </NavLink>
      </div>
     </div>

     <div className="text-[16px]">
     <div className="mb-5">
        <NavLink to="dashboard" activeClassName="active">
          Dashboard
        </NavLink>
      </div>
      <div className="mb-5">
        <NavLink to="kyc" activeClassName="active">
          KYC
        </NavLink>
      </div>
      <div className="mb-5">
        <NavLink to="services" activeClassName="active">
          Services
        </NavLink>
      </div>
      <div className="mb-5">
        <NavLink to="settings" activeClassName="active">
          Settings
        </NavLink>
      </div>
      <div className="mb-5">
        <NavLink to="settings" activeClassName="active">
          Logout?
        </NavLink>
      </div>
     </div>
    </div>
    </div>
  );
}
