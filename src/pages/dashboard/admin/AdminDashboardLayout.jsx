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
            ? "bg-style navDashboard fixed right-0 top-0 z-[1000] h-[100px] px-3 lg:w-[calc(100%-80px)]"
            : "bg-style navDashboard fixed right-0 top-0 z-[1000] h-[100px] px-3 lg:w-[calc(100%-250px)]"
        }`}
      >
        <AdminDashHeader handleHideNav={handleHideNav} hideNav={hideNav} />
      </div>
      <div
        className={`${
          !hideNav
            ? "bg-style navDashboard fixed left-0 top-0 z-[1000]  h-[100vh] lg:block lg:w-[80px]"
            : "bg-style navDashboard fixed left-0 top-0 z-[1000]  h-[100vh] lg:block lg:w-[250px]"
        }`}
      >
        <div>
          {" "}
          <AdminNavMenus hideNav={hideNav} />
        </div>

        <div className="z-[1000]">
          {" "}
          <AdminMobileNavMenus hideNav={hideNav} />
        </div>
      </div>

      <div
        className={`bg-style navDashboard mt-[80px] w-full text-[bg-text] ${
          !hideNav ? " lg:ml-[80px] lg:w-[calc(100%+200px)]  " : "lg:ml-[250px]"
        }`}
      >
        <Outlet />
        <div className="text-xs md:text-md flex justify-center border-t-2 px-3 py-5 font-light shadow-md lg:text-lg">
          Copyright © {new Date().getFullYear()} Sharp Sharp. All Rights
          Reserved.
        </div>
      </div>
    </div>
  );
}
