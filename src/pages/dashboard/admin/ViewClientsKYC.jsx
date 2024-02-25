import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { TableCell } from "@mui/material";
import { FaEllipsisV } from "react-icons/fa";
import Modal from "../../../ui/Modal";
import Avatar from "react-avatar";

export default function ViewProviderKYC({ row }) {
  return (
    <Modal>
      <div>
        <TableCell className="bg-style w-full text-center text-white">
          <Menu>
            <MenuHandler>
              <Button className="text-[bg-text] shadow-none">
                <FaEllipsisV />
              </Button>
            </MenuHandler>
            <MenuList className="space-y-3">
              <Modal.Open opens="clientkyc">
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

        <Modal.Window name="clientkyc">
          <div className="w-[300px] overflow-y-auto md:w-[600px] lg:w-[800px]">
            <p className="mt-8 bg-black px-3 py-2 text-lg font-bold text-white">
              CLIENT'S DETAILS{" "}
            </p>
            <div className="space-y-3 p-3">
              <p className="flex text-lg font-bold text-blue-500 underline">
                Basic Details
              </p>
              <p>
                {row.photo ? (
                  // If a photo exists, display the image
                  <img src={row.photo} alt={`Photo of ${row.fullname}`} />
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

              <p className="flex pt-5 text-lg font-bold text-blue-500 underline">
                KYC Details
              </p>
              <p>
                <span className="font-semibold">Photo: </span>
                <span></span>
              </p>
              <p>
                <span className="font-semibold">Utility Bill: </span>
                <span></span>
              </p>
              <p>
                <span className="font-semibold">Home Address: </span>
                <span></span>
              </p>
              <p>
                <span className="font-semibold">Business/Office Address: </span>
                <span></span>
              </p>
              <p>
                <span className="font-semibold">Occupation: </span>
                <span></span>
              </p>
              <p>
                <span className="font-semibold">Marital Status: </span>
                <span></span>
              </p>
              <p>
                <span className="font-semibold">Next Of Kin: </span>
                <span></span>
              </p>
              <p>
                <span className="font-semibold">Next Of kin Phone: </span>
                <span></span>
              </p>
              <p>
                <span className="font-semibold">Next Of kin Email: </span>
                <span></span>
              </p>
              <p>
                <span className="font-semibold">Next Of kin Address: </span>
                <span></span>
              </p>
              <p>
                <span className="font-semibold">
                  Relationship with Next Of kin:{" "}
                </span>
                <span></span>
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
