import { FaHouseUser } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";
import { NavLink } from "react-router-dom";

export default function SignupOption() {
  return (
    <div className="h-auto bg-gradient-to-b from-violet-100 to-blue-100 p-3 pb-40 pt-[120px] lg:w-[100%] ">
      <p className="mb-5 text-center text-lg font-bold ">
        Select The Profile Type You Want To Sign Up As:
      </p>
      <div className="m-auto items-center justify-between  px-3 lg:flex lg:w-[70%]">
        <NavLink
          to="/providerReg"
          className="mb-5 flex items-center justify-center gap-2 border-4 bg-white px-5 py-10 shadow-md  hover:bg-gray-200 lg:mb-0 lg:justify-between"
        >
          <div className="text-[64px] text-blue-500">
            <GrUserSettings />
          </div>
          <div className="space-y-2 text-black">
            <p>
              Sign Up as{" "}
              <span className="text-lg font-semibold text-blue-500">
                Service Provider
              </span>
            </p>
            <p className="font-light">
              Render Services to Clients at their Homes
            </p>
          </div>
        </NavLink>{" "}
        <NavLink
          to="/clientReg"
          className="flex items-center justify-center gap-2 border-4 bg-white px-5 py-10 shadow-md hover:bg-gray-200 lg:justify-between"
        >
          <div className="text-[64px] text-blue-500">
            <FaHouseUser />
          </div>
          <div className="space-y-2 text-black">
            <p>
              Sign Up as a{" "}
              <span className="text-lg font-semibold text-blue-500">
                Client
              </span>
            </p>
            <p className="font-light">
              Get Your Home Services Done by the Service Providers
            </p>
          </div>
        </NavLink>
      </div>
      <p className=" m-auto  mt-10 w-[70%] px-3 text-center">
        Already Have An Account?{" "}
        <NavLink to="/login" className="text-blue-500">
          Login
        </NavLink>
      </p>
    </div>
  );
}
