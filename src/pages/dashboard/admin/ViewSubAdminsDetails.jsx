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

export default function ViewSubAdminsDetails({ row }) {
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
              <Modal.Open opens="providerkyc">
                <MenuItem className="flex p-0">
                  <p className="hover:text-blue-500">View Details</p>
                </MenuItem>
              </Modal.Open>

              <MenuItem className="flex p-0">
                <p className="hover:text-blue-500">Flag Admin</p>
              </MenuItem>
              <MenuItem className="flex p-0">
                <p className="hover:text-blue-500">Block Admin</p>
              </MenuItem>
            </MenuList>
          </Menu>
        </TableCell>

        <Modal.Window name="providerkyc">
          <div className="w-[300px] overflow-y-auto md:w-[600px] lg:w-[800px]">
            <p className="mt-8 bg-black px-3 py-2 text-lg font-semibold text-white">
              SUB-ADMIN'S DETAILS{" "}
            </p>
            <div className="space-y-3 p-3">
              <p>
                <span>
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
                <span className="font-semibold">Role: </span>
                <span>{row.role}</span>
              </p>
              <p>
                <span className="font-semibold">Home Address: </span>
                <span>{row.homeaddress}</span>
              </p>
            </div>
          </div>
        </Modal.Window>
      </div>
    </Modal>
  );
}
