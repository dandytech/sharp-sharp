import { Outlet } from "react-router";

import { useState } from "react";
import ClientDashHeader from "./ClientDashHeader";
import ClientNavMenus from "./ClientNavMenu";
import ClientMobileNavMenus from "./ClientMobileNavMenu";

export default function ClientDashLayout() {
  const [hideNav, setHideNav] = useState(true);

  const handleHideNav = () => {
    setHideNav(!hideNav);
  };

  return (
    <div>
      <div
        className={`w-[100%] ${
          !hideNav
            ? "bg-style navDashboard h-[100px fixed right-0 top-0 z-[1000] px-3 lg:w-[calc(100%-80px)]"
            : "bg-style navDashboard fixed right-0 top-0 z-[1000] h-[100px] px-3 lg:w-[calc(100%-250px)]"
        }`}
      >
        <ClientDashHeader handleHideNav={handleHideNav} hideNav={hideNav} />
      </div>
      <div
        className={`${
          !hideNav
            ? "bg-style navDashboard h-[100vh fixed left-0 top-0 z-[1000] lg:block lg:w-[80px]"
            : "bg-style navDashboard fixed left-0 top-0 z-[1000]  h-[100vh] lg:block lg:w-[250px]"
        }`}
      >
        <ClientNavMenus hideNav={hideNav} />
        <ClientMobileNavMenus hideNav={hideNav} />
      </div>

      <div
        className={`bg-style navDashboard mt-[80px]  w-full text-[bg-text] ${
          !hideNav ? " lg:ml-[80px] lg:w-[calc(100%+200px)]  " : "lg:ml-[250px]"
        }`}
      >
        <Outlet />
        <div className="flex justify-center border-t-2 py-5 font-light shadow-md">
          Copyright © {new Date().getFullYear()} Sharp Sharp. All Rights
          Reserved.
        </div>
      </div>
    </div>
  );
}
