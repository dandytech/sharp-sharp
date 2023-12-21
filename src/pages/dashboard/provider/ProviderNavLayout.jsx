import { NavLink } from "react-router-dom";

export default function NavbarLayout() {
  return (
    <div className=" fixed left-0 mt-[70px]  h-[100vh] w-[200px]  p-10">
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
      <div>
        <NavLink to="services" activeClassName="active">
          Services
        </NavLink>
      </div>
    </div>
  );
}
