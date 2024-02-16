import { Tooltip } from "@material-tailwind/react";
import { HiOutlineTrash } from "react-icons/hi2";

export default function ServiceInfo({ item, removeFromCart, index }) {
  return (
    <div>
      <div className="items-center justify-between gap-10 space-y-3 lg:flex">
        <div className="lg:w-[50%]">
          <span className="flex items-center justify-between gap-20">
            <label>Service ID: {item.id}</label>
            <Tooltip content="Remove item">
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 "
              >
                <HiOutlineTrash />
              </button>
            </Tooltip>
          </span>
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
              value={item.price}
            />
          </span>
        </div>
      </div>
      <div className="mb-10 mt-5 ">
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
