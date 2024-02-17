import { Tooltip } from "@material-tailwind/react";
import { HiOutlineTrash } from "react-icons/hi2";

export default function ServiceInfo({
  item,
  removeFromCart,
  index,
  incrementQuantity,
  decrementQuantity,
  getTotalPrice,
  formatCurrency,
}) {
  return (
    <div className="border-4 border-stone-100 p-3 shadow-md">
       <div className="flex items-center justify-between mb-5">
          <label className="font-light"> Quantity: {item.quantity}</label>

          <label>
            <Tooltip content="Increase Qty">
              <button
                onClick={() => incrementQuantity(index)}
                className=" text-blue-500"
              >
                +
              </button>
            </Tooltip>
          </label>
          <label>
            <Tooltip content="Decrease Qty">
              <button
                onClick={() => decrementQuantity(index)}
                className=" text-blue-500"
              >
                _
              </button>
            </Tooltip>
          </label>
          <label>
            <Tooltip content="Remove item">
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 "
              >
                <HiOutlineTrash />
              </button>
            </Tooltip>
          </label>
        </div>
      <div className="items-center justify-between gap-5 space-y-3 lg:flex">
       
        <div className="lg:w-[50%]">
          <label>Service ID: {item.id}</label>

          <span>
            <input
              type="text"
              className="w-full rounded-md border-2 border-gray-300 px-3 py-1"
              disabled
              value={item.serviceRender}
            />
          </span>
        </div>
        <div className="lg:w-[50%]">
          <label>Charge</label>
          <span>
            <input
              type="text"
              className="w-full rounded-md border-2 border-gray-300 px-3 py-1"
              disabled
              value={formatCurrency(item.price * item.quantity)}
            />
          </span>
        </div>
      </div>
      <div className=" mt-5 ">
        <label>Description</label>
        <textarea
          className="w-full overflow-y-auto rounded-md border-2 border-gray-300 px-3 py-1"
          rows={4}
          disabled
          value={item.details}
        />
      </div>
    </div>
  );
}
