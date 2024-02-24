import { Outlet } from "react-router";
import ProviderDashHeader from "./ProviderDashHeader";
import ProviderNavLayout from "./ProviderNavLayout";
import ProviderMobileNavLayout from "./ProviderMobileNavLayout";
import { useState } from "react";

export default function DashbordLayout() {
  const [hideNav, setHideNav] = useState(true);
  const [hideMenu, setHideMenu] = useState(true);

  const handleHideNav = () => {
    setHideNav(!hideNav);
  };

  const handleHideMenu = () => {
    setHideMenu(!hideMenu);
  };

  return (
    <div className="bg-style flex  flex-col pb-[50px]">
      <div>
        <ProviderDashHeader
          handleHideNav={handleHideNav}
          handleHideMenu={handleHideMenu}
        />
      </div>
      <div className="flex gap-5">
        <div
          className={`hidden lg:block  ${
            hideNav ? "w-[13%] p-10 " : "w-[4%] p-10"
          }`}
        >
          <ProviderNavLayout hideNav={hideNav} />
        </div>

        <div className={`z-50 ${hideMenu ? "hidden" : "fixed"}`}>
          <ProviderMobileNavLayout
            hideNav={hideNav}
            handleHideNav={handleHideNav}
          />
        </div>

        <div className={` ${hideNav ? "m-auto w-[87%]" : "w-[100%]"}`}>
          {" "}
          <Outlet />
          <div className="md:text-md lg:text-lgjustify-center flex border-t-2 px-2 py-5 text-xs font-light shadow-md">
            Copyright©{new Date().getFullYear()} Sharp Sharp. All Rights
            Reserved.
          </div>
        </div>
      </div>

      <div>
        {/* <Routes>
            <Route path="" element={<DashboardProvider />} />
            <Route path="kyc" element={<KycProvider />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes> */}
      </div>
    </div>
  );
}
