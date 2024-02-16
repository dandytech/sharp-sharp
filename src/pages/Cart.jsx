import { Tooltip } from "@material-tailwind/react";

import { MdOutlineShoppingCart } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useNavigate } from "react-router";

export default function Cart({ clearCart, items }) {
  const navigate = useNavigate();

  return (
    <div className="float-right flex gap-3 px-10">
      {items.length > 0 && (
        <Tooltip content="Check Out">
          <button
            className="relative"
            onClick={() => navigate("/requestService")}
          >
            {" "}
            <span className="text-[30px]">
              {" "}
              <MdOutlineShoppingCart />
            </span>
            <span className="absolute right-1 top-[-15px] flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">
              {" "}
              {items.length}
            </span>
          </button>
        </Tooltip>
      )}
      {items.length > 0 && (
        <button onClick={clearCart} className="text-[30px] text-red-500">
          <Tooltip content="Clear Cart">
            <span>
              {" "}
              <RiDeleteBin2Fill />
            </span>
          </Tooltip>
        </button>
      )}
    </div>
  );
}
