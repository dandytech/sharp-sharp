import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import Modal from "../Modal";
import { useState } from "react";
import MyButton from "../MyButton";

export default function ServiceActions({ row }) {
  const [service, setName] = useState(row.name);
  const [price, setPrice] = useState(row.price);
  const [description, setDescription] = useState(row.description);

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
            <Modal.Open opens="details">
              <MenuItem className="border-2 py-1">View Details</MenuItem>
            </Modal.Open>
            <Modal.Open opens="edit">
              <MenuItem className="border-2 py-1"> Edit</MenuItem>
            </Modal.Open>
            <Modal.Open opens="delete">
              <MenuItem className="border-2 py-1">Delete</MenuItem>
            </Modal.Open>
            {/* <MenuItem>Menu Item 2</MenuItem>
    <MenuItem>Menu Item 3</MenuItem> */}
          </MenuList>
        </Menu>

        <Modal.Window name="edit">
          <form>
            <p className="mt-7 bg-black px-5 py-2 text-white">UPDATE DETAILS</p>
            <div className="space-y-3 p-5">
              <p>
                <span className="font-semibold">Name: </span>
                <input
                  type="text"
                  value={service}
                  className="w-full rounded-xl border-2 border-gray-300 px-3 py-1"
                  onChange={(e) => setName(e.target.value)}
                />
              </p>
              <p>
                <span className="font-semibold">Charge: </span>
                <input
                  type="text"
                  value={price}
                  className="w-full rounded-xl border-2 border-gray-300 px-3 py-1"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </p>
              <p>
                <span className="font-semibold">Description: </span>
                <p>
                  {" "}
                  <textarea
                    rows={5}
                    cols={30}
                    value={description}
                    className="w-full rounded-xl border-2 border-gray-300 px-3 py-1"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </p>
              </p>

              <p className="text-center">
                {" "}
                <MyButton type="primary">Update</MyButton>
              </p>
            </div>
          </form>
        </Modal.Window>

        <Modal.Window name="details">
          <form>
            <p className="mt-7 bg-black px-5 py-2 text-white">DETAILS</p>
            <div className="space-y-3 p-5">
              <p>
                <span className="font-semibold">Name: </span>
                <input
                  type="text"
                  value={service}
                  className="w-full rounded-xl border-2 border-gray-300 px-3 py-1"
                  disabled
                />
              </p>
              <p>
                <span className="font-semibold">Charge: </span>
                <input
                  type="text"
                  value={price}
                  className="w-full rounded-xl border-2 border-gray-300 px-3 py-1"
                  disabled
                />
              </p>
              <p>
                <span className="font-semibold">Description: </span>
                <p>
                  {" "}
                  <textarea
                    rows={5}
                    cols={30}
                    value={description}
                    className="w-full rounded-xl border-2 border-gray-300 px-3 py-1"
                    disabled
                  />
                </p>
              </p>

              <p className="text-center">
                {" "}
                <MyButton type="primary">Update</MyButton>
              </p>
            </div>
          </form>
        </Modal.Window>
      </div>
    </Modal>
  );
}
