import { NavLink } from "react-router-dom";
import "../../index.css";

export default function SignupTab() {
  return (
    <div className="m-auto flex flex-col items-center justify-center  pt-[120px]  shadow-2xl md:w-[80%] lg:w-[50%] lg:pt-10 ">
      <div className="mb-10 text-[24px] text-blue-500 lg:mb-0 lg:mt-20">
        SELECT ACCOUNT TYPE !!!
      </div>

      <div className="flex  items-center justify-center gap-10 text-center md:w-[80%] lg:w-[50%] lg:pt-20">
        <div className="text-[20px]">
          <NavLink
            to="/providerReg"
            className="cursor-pointer rounded-full  hover:text-blue-500  border-2 border-t-blue-500 px-7 py-3 pb-0 hover:font-bold"
            activeClassName="active"
          >
            Service Provider
          </NavLink>
        </div>
        <div className="text-[20px]">
          <NavLink
            to="/clientReg"
            className="cursor-pointer rounded-full hover:text-blue-500  border-2 border-t-blue-500 px-7 py-3 pb-0 hover:font-bold"
            activeClassName="active"
          >
            Client
          </NavLink>
        </div>
      </div>
    </div>
  );
}
