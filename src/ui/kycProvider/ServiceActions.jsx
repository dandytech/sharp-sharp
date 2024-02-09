import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import Modal from "../Modal";

export default function ServiceActions({ row }) {
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
          <div className="">
            <p className="mt-7 bg-black px-5 py-2 text-white">DETAILS</p>
            <div className="space-y-3 p-5">
              <p>
                <span className="font-semibold">Name: </span>
                <span></span>
              </p>
              <p>
                <span className="font-semibold">Charge: </span>
              </p>
              <p>
                <span className="font-semibold">Description: </span>
              </p>
            </div>
          </div>
        </Modal.Window>
      </div>
    </Modal>
  );
}
