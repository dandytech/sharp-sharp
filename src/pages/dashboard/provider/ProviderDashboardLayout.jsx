import { Outlet } from "react-router";
import ProviderDashHeader from "./ProviderDashHeader";
import ProviderNavLayout from "./ProviderNavLayout";
import ProviderMobileNavLayout from "./ProviderMobileNavLayout";
import { useState } from "react";
import { useGetProvider } from "../../../features/authentication/provider/useGetProvider";
import { useLogout } from "../../../features/authentication/provider/useProviderLogout";

export default function DashbordLayout() {
  const [hideNav, setHideNav] = useState(true);
  const [hideMenu, setHideMenu] = useState(true);

  const handleHideNav = () => {
    setHideNav(!hideNav);
  };

  const handleHideMenu = () => {
    setHideMenu(!hideMenu);
  };

  //logout Query called
  const { logout, isLoading } = useLogout();
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
          <ProviderNavLayout
            hideNav={hideNav}
            logout={logout}
            isLoading={isLoading}
          />
        </div>

        <div className={`z-50 ${hideMenu ? "hidden" : "fixed"}`}>
          <ProviderMobileNavLayout
            hideNav={hideNav}
            handleHideNav={handleHideNav}
            logout={logout}
            isLoading={isLoading}
          />
        </div>

        <div className={` ${hideNav ? "m-auto w-[87%]" : "w-[100%]"}`}>
          {" "}
          <Outlet />
          <div className="md:text-md text flex justify-center border-t-2 px-2 py-5 text-xs font-light shadow-md lg:text-lg">
            Copyright©{new Date().getFullYear()} Sharp Sharp. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
