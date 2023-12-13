import { GiForwardSun } from "react-icons/gi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { FaUsersGear } from "react-icons/fa6";
import { GoPasskeyFill } from "react-icons/go";
import { TbWorldWww } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";

export default function Solutions() {
  return (
    <div className=" mt-0 items-center md:pt-20 lg:pt-10 md:pb-10 lg:mb-10  justify-between p-10 w-[70%] m-auto bg-gradient-to-b  py-[0px] lg:flex md:flex   hidden">

      <div className="w-auto gap-3">
        <div className="mb-3 text-[30px]">
          <HiOutlineBuildingStorefront />
        </div>
        <div className="mb-5 lg:flex items-center justify-between gap-3">
          <span>Solutions</span>
          <span>
            <GiForwardSun />
          </span>
        </div>
      </div>

      <div className="w-auto gap-3">
        <div className="mb-3  text-[30px]">
          <FaUsersGear />
        </div>
        <div className="mb-5 lg:flex items-center justify-between gap-5">
          <span>Best Providers</span>
          <span>
            <GiForwardSun />
          </span>
        </div>
      </div>

      <div className="w-auto gap-3">
        <div className="mb-3  text-[30px]">
          <GoPasskeyFill />
        </div>
        <div className="mb-5 lg:flex items-center justify-between gap-7">
          <span>Most Secured</span>
          <span>
            <GiForwardSun />
          </span>
        </div>
      </div>

      <div className="w-auto gap-3">
        <div className="mb-3  text-[30px]">
          {" "}
          <TbWorldWww />
        </div>
        <div className="mb-5 lg:flex items-center justify-between gap-5">
          <span>Online Booking</span>
          <span>
            <GiForwardSun />
          </span>
        </div>
      </div>

      <div className="w-auto gap-3">
        <div className="mb-3  text-[30px]">
          <GiTakeMyMoney />
        </div>
        <div className="mb-5 lg:flex items-center justify-between gap-5">
          <span>Low Cost</span>
          <span>
            <GiForwardSun />
          </span>
        </div>
      </div>
    </div>
  );
}
