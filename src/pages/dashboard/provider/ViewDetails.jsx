import Modal from "../../../ui/Modal";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

export default function ViewDetails({ row }) {
  console.log(row);
  return (
    <Modal>
      <div>
        <Menu>
          <MenuHandler>
            <Button className="bg-style text-black shadow-none">
              {" "}
              <BsThreeDotsVertical />
            </Button>
          </MenuHandler>
          <MenuList className="z-[1000] mt-[-80px]">
            <Modal.Open opens="detail">
              <MenuItem>View Details</MenuItem>
            </Modal.Open>
            {/* <MenuItem>Menu Item 2</MenuItem>
    <MenuItem>Menu Item 3</MenuItem> */}
          </MenuList>
        </Menu>

        <Modal.Window name="detail">
          <div className="w-[300px] md:w-[600px] lg:w-[800px]">
            <p className="mt-7 bg-black px-5 py-2 text-white">DETAILS</p>
            <div className="space-y-3 p-5">
              <p>
                <span className="font-semibold">Name: </span>
                <span>
                  {row.name?.firstName} {row.name?.lastName}
                </span>
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
                <span className="font-semibold">Service: </span>
                <span>{row.service}</span>
              </p>
              <p>
                <span className="font-semibold">Address: </span>
                <span>{row.address}</span>
              </p>
              <p>
                <span className="font-semibold">City: </span>
                <span>{row.city}</span>
              </p>
              <p>
                <span className="font-semibold">State: </span>
                <span>{row.state}</span>
              </p>
            </div>
          </div>
        </Modal.Window>
      </div>
    </Modal>
  );
}
