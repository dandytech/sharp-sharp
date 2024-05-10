import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tooltip,
} from "@material-tailwind/react";
import { TableCell } from "@mui/material";
import { FaEllipsisV, FaEye } from "react-icons/fa";
import Modal from "../../../ui/Modal";
import Avatar from "react-avatar";

export default function ViewClientKYC({ row }) {
  return (
    <Modal>
      <div>
        <TableCell className="bg-style text-white">
          <Menu>
            <MenuHandler>
              <Button className="text-[bg-text] shadow-none">
                <FaEllipsisV />
              </Button>
            </MenuHandler>
            <MenuList className="space-y-3">
              <Modal.Open opens="providerkyc">
                <MenuItem className="flex p-0">
                  <p className="hover:text-blue-500">View KYC</p>
                </MenuItem>
              </Modal.Open>

              <MenuItem className="flex p-0">
                <p className="hover:text-blue-500">Flag Provider</p>
              </MenuItem>
              <MenuItem className="flex p-0">
                <p className="hover:text-blue-500">Block Provider</p>
              </MenuItem>
            </MenuList>
          </Menu>
        </TableCell>
        <Modal.Window name="providerkyc">
          <div className="w-[300px] overflow-y-auto md:w-[600px] lg:w-[800px]">
            <p className="mt-8 bg-black px-3 py-2 text-lg font-bold text-white">
              PROVIDER'S DETAILS{" "}
            </p>
            <div className="space-y-3 p-3">
              <p className="flex text-lg font-bold text-blue-500 underline">
                Personal Details
              </p>
              <p>
                <span>
                  {row.avatar ? (
                    // If a photo exists, display the image
                    <img src={row.avatar} alt={`Photo of ${row.fullname}`} />
                  ) : (
                    // If no photo exists, display an Avatar component
                    <Avatar
                      name={row.fullname}
                      color="black"
                      size="40"
                      className="rounded-full"
                    >
                      {row.fullname.charAt(0)}{" "}
                      {/* Display the first character of the names as a fallback */}
                    </Avatar>
                  )}
                </span>
              </p>
              <p>
                <span className="font-semibold">Full Name: </span>
                <span>{row.fullname}</span>
              </p>
              <p>
                <span className="font-semibold">Gender: </span>
                <span>{row.gender}</span>
              </p>
              <p>
                <span className="font-semibold">Email: </span>
                <span>{row.email}</span>
              </p>
              <p>
                <span className="font-semibold">Phone: </span>
                <span>{row.phone}</span>
              </p>
              <p>
                <span className="font-semibold">Home Address: </span>
                <span>{row.resaddress}</span>
              </p>
              <p>
                <span className="font-semibold ">Utility Bill: </span>
                <button onClick={() => window.open(row.utilitybill, "blank")}>
                  <span className="flex items-center">
                    <Tooltip content="View Document">
                      <FaEye />
                    </Tooltip>
                  </span>
                </button>
              </p>

              <p className="flex pt-5 text-lg font-bold text-blue-500 underline">
                Service Details
              </p>
              <p>
                <span className="font-semibold">Service Category: </span>
                <span>{row.servicecategory}</span>
              </p>
              <p>
                <span className="font-semibold">Business Address: </span>
                <span>{row.businessaddress}</span>
              </p>
              <p className="space-y-1">
                <span className="font-semibold ">Services: </span>
                <p>
                  <p>
                    <span className="font-semibold">service 1: </span>
                    <span> service name</span>
                  </p>

                  <span className="font-semibold">Price: </span>
                  <span>NGN</span>
                  <p className="font-semibold">Details: </p>
                  <span></span>
                </p>{" "}
                <p>
                  <p>
                    <span className="font-semibold">service 2: </span>
                    <span> service name</span>
                  </p>

                  <span className="font-semibold">Price: </span>
                  <span>NGN</span>
                  <p className="font-semibold">Details: </p>
                  <span></span>
                </p>{" "}
              </p>

              <p className="flex pt-5 text-lg font-bold text-blue-500 underline">
                Bank Details
              </p>
              <p>
                <span className="font-semibold">Bank: </span>
                <span>{row.bankname}</span>
              </p>
              <p>
                <span className="font-semibold">Bank Name: </span>
                <span>{row.actname}</span>
              </p>
              <p>
                <span className="font-semibold">Account Number: </span>
                <span>{row.actno}</span>
              </p>
              <p>
                <span className="font-semibold">Bank Type: </span>
                <span>{row.acttype}</span>
              </p>

              <p className="flex items-center justify-between gap-2 pt-5">
                {" "}
                <button className="rounded-full border-2 bg-blue-500 px-7 py-2 text-white hover:bg-green-500">
                  Approve
                </button>
                <button className="rounded-full border-2 bg-red-500 px-7 py-2 text-white hover:bg-black">
                  Dispprove
                </button>
              </p>
            </div>
          </div>
        </Modal.Window>
      </div>
    </Modal>
  );
}
