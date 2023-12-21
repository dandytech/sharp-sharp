import { Outlet } from "react-router";
import ProviderDashHeader from "./ProviderDashHeader";
import ProviderNavLayout from "./ProviderNavLayout";

export default function DashbordLayout() {
  return (
    <div className="flex flex-col">
      <div>
        <ProviderDashHeader />
      </div>
      <div className="flex">
        <div className=" ">
          <ProviderNavLayout />
        </div>
        <Outlet />
        <div>
          {/* <Routes>
            <Route path="" element={<DashboardProvider />} />
            <Route path="kyc" element={<KycProvider />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes> */}
        </div>
      </div>
    </div>
  );
}
