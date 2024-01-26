import { NavLink } from "react-router-dom";
import "../../index.css";

export default function SignupTab() {
  return (
    <div className="m-auto w-full flex flex-col items-center justify-center  pt-[120px] shadow-2xl md:w-[80%] lg:w-[50%] lg:pt-10 ">

      <div className="mb-10 text-xl text-blue-500 lg:mb-0 lg:mt-20 font-semibold">
        SELECT ACCOUNT TYPE !!!
      </div>

      <div className="flex justify-between lg:gap-10 gap-5 items-center lg:mt-10 md:mt-5 text-lg">

        <div>
          <NavLink
            to="/providerReg"
            className="cursor-pointer rounded-full border-2 border-t-blue-500  bg-gray-100 px-3 py-3 pb-0 hover:font-bold hover:text-blue-500"
            activeClassName="active"
          >
            Service Provider
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/clientReg"
            className="cursor-pointer rounded-full border-2  border-t-blue-500  bg-gray-100 px-3 py-3 pb-0 hover:font-bold hover:text-blue-500"
            activeClassName="active"
          >
            Client
          </NavLink>
        </div>
      </div>
    </div>
  );
}
