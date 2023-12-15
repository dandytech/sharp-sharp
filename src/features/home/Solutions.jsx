import { GiForwardSun } from "react-icons/gi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { FaUsersGear } from "react-icons/fa6";
import { GoPasskeyFill } from "react-icons/go";
import { TbWorldWww } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";

export default function Solutions() {
  return (
    <div className="m-auto  mt-0 hidden w-[70%] items-center justify-between  bg-gradient-to-b p-10 md:flex md:pb-5 md:pt-[120px]  lg:mb-0 lg:flex  lg:pt-0">
      <div className="w-auto gap-3">
        <div className="mb-3 text-[30px]">
          <HiOutlineBuildingStorefront />
        </div>
        <div className="mb-5 items-center justify-between gap-3 lg:flex">
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
        <div className="mb-5 items-center justify-between gap-5 lg:flex">
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
        <div className="mb-5 items-center justify-between gap-7 lg:flex">
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
        <div className="mb-5 items-center justify-between gap-5 lg:flex">
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
        <div className="mb-5 items-center justify-between gap-5 lg:flex">
          <span>Low Cost</span>
          <span>
            <GiForwardSun />
          </span>
        </div>
      </div>
    </div>
  );
}
