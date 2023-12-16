import { NavLink } from "react-router-dom";

export default function SignupTab() {
  return (
    <div className="m-auto flex flex-col items-center justify-center  pt-[120px]  shadow-2xl md:w-[80%] lg:w-[50%] lg:pt-10 ">
      <div className="mb-10 text-[24px] lg:mb-0 text-blue-500 lg:mt-20">SELECT ACCOUNT TYPE</div>

      <div className="flex  items-center justify-center gap-10 text-center md:w-[80%] lg:w-[50%] lg:pt-20">
        <div className="text-[20px]">
          <NavLink to="/providerReg">
            <button className="rounded-full border-2 border-b-black  px-5 py-3 text-white">
              Service Provider
            </button>
          </NavLink>
        </div>
        <div className="text-[20px]">
          <NavLink to="/clientReg">
            <button className="rounded-full border-2 border-b-black px-5 py-3 text-white">
              Client
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
