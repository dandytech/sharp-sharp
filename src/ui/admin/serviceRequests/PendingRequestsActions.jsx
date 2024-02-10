import { TableCell } from "@mui/material";
import { FaEllipsisV } from "react-icons/fa";

import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import Modal from "../../Modal";

export default function PendingRequestsActions({ row }) {
  return (
    <Modal>
      <Menu>
        <TableCell className="bg-style">
          <MenuHandler className="bg-style border-none shadow-none">
            <Button className="border-none shadow-none">
              <FaEllipsisV />
            </Button>
          </MenuHandler>
          <MenuList className="space-y-3 bg-black">
            <Modal.Open opens="view">
              <MenuItem className="bg-style ">View Details</MenuItem>
            </Modal.Open>

            {row.status === "pending" && (
              <Modal.Open opens="">
                <MenuItem className="bg-style">
                  <button>Approve</button>
                </MenuItem>
              </Modal.Open>
            )}
          </MenuList>

          {/* Add other options as needed */}
        </TableCell>
      </Menu>
      <Modal.Window name="view">
        <div className="bg-style border-2 shadow-md rounded-lg py-7 ">
          <p className=" bg-black py-5 pl-5 pr-10 text-white">
            {" "}
            <span className="uppercase"> {row.status}</span> SERVICE REQUEST
            DETAILS
          </p>
          <div className="space-y-3 p-5">
            <p>
              <label className="font-semibold">Client Name </label>{" "}
              <span>
                <input
                  value={row.client}
                  disabled
                  type="text"
                  className="w-full border-2 px-2 py-1"
                />
              </span>
            </p>
            <p>
              <label className="font-semibold">Email </label>{" "}
              <span>
                <input
                  value={row.email}
                  disabled
                  type="text"
                  className="w-full border-2 px-2 py-1"
                />
              </span>
            </p>
            <p>
              <label className="font-semibold">Phone </label>{" "}
              <span>
                <input
                  value={row.phone}
                  disabled
                  type="text"
                  className="w-full border-2 px-2 py-1"
                />
              </span>
            </p>
            <p>
              <label className="font-semibold">Home Address </label>{" "}
              <span>
                <input
                  value={row.address}
                  disabled
                  type="text"
                  className="w-full border-2 px-2 py-1"
                />
              </span>
            </p>
            <p>
              <label className="font-semibold">Charge (NGN) </label>
              <span>
                <input
                  value={row.charge}
                  disabled
                  type="text"
                  className="w-full border-2 px-2 py-1"
                />
              </span>
            </p>
            <p>
              <label className="font-semibold">Service</label>
              <span>
                <input
                  value={row.service}
                  disabled
                  type="text"
                  className="w-full border-2 px-2 py-1"
                />
              </span>
            </p>
            <p>
              <label className="font-semibold">Description </label>
              <textarea
                disabled
                value={row.description}
                cols={20}
                rows={5}
                className="w-full border-2 px-2 py-1"
              />
            </p>
            <p>
              <label className="font-semibold">Request Time </label>{" "}
              <span>
                <input
                  value={row.requestTime}
                  disabled
                  type="text"
                  className="w-full border-2 px-2 py-1"
                />
              </span>
            </p>
            <p>
              <label className="font-semibold">Delivery Time </label>{" "}
              <span>
                <input
                  value={row.serviceTime}
                  disabled
                  type="text"
                  className="w-full border-2 px-2 py-1"
                />
              </span>
            </p>
            <p>
              <label className="font-semibold">Status </label>{" "}
              <span>
                <input
                  value={row.status}
                  disabled
                  type="text"
                  className="w-full border-2 px-2 py-1"
                />
              </span>
            </p>
            <p className="text-center">
              <button className="mt-5 rounded-full bg-blue-500 px-5 py-2 text-center font-semibold text-white hover:bg-black">
                <Modal.Close>Ok</Modal.Close>
              </button>
            </p>
          </div>
        </div>
      </Modal.Window>
    </Modal>
  );
}
