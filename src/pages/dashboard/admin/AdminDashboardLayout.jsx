import { Outlet } from "react-router";
import AdminDashHeader from "./AdminDashHeader";
import AdminNavMenus from "./AdminNavMenus";
import { useState } from "react";
import AdminMobileNavMenus from "./AdminMobileNavMenu";

export default function AdminDashboardLayout() {
  const [hideNav, setHideNav] = useState(true);

  const handleHideNav = () => {
    setHideNav(!hideNav);
  };

  return (
    <div>
      <div
        className={`w-[100%] ${
          !hideNav
            ? "bg-style navDashboard fixed right-0 top-0 z-[1000] h-[100px] border-2 border-red-400 px-3 lg:w-[calc(100%-80px)]"
            : "bg-style navDashboard fixed right-0 top-0 z-[1000] h-[100px] px-3 lg:w-[calc(100%-250px)]"
        }`}
      >
        <AdminDashHeader handleHideNav={handleHideNav} hideNav={hideNav} />
      </div>
      <div
        className={`${
          !hideNav
            ? "bg-style navDashboard fixed left-0 top-0 z-[1000]  h-[100vh] border-2 border-red-400 lg:block lg:w-[80px]"
            : "bg-style navDashboard fixed left-0 top-0 z-[1000]  h-[100vh] lg:block lg:w-[250px]"
        }`}
      >
        <AdminNavMenus hideNav={hideNav} />

        <AdminMobileNavMenus hideNav={hideNav} />
      </div>

      <div
        className={`ml-0 w-[100%] ${
          !hideNav
            ? "bg-style navDashboard lg:w-[calc(100%-80px) ml-[80px] mt-[60px] pt-[70px] text-[bg-text]"
            : "bg-style navDashboard lg:w-[calc(100%-250px) mt-[60px] pt-[70px] text-[bg-text] lg:ml-[250px]"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
