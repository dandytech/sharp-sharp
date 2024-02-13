import { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { Cog6ToothIcon, PowerIcon } from "@heroicons/react/24/solid";
import logo from "../../../../src/data/logo.png";
import {
  MdDashboard,
  MdMedicalServices,
  MdNotificationsNone,
} from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

import { FaCodePullRequest } from "react-icons/fa6";
import { TbZoomMoney } from "react-icons/tb";
import Modal from "../../../ui/Modal";
import MyButton from "../../../ui/MyButton";

export default function ClientMobileNavMenus({ hideNav }) {
  const navigate = useNavigate();

  return (
    <Modal>
      <Card
        className={`absolute z-[1000] lg:hidden ${
          hideNav
            ? "hidden"
            : "bg-style text-bg-text fixed left-0 top-0 z-[1000] mt-[98px] h-auto rounded-none rounded-b-xl pb-0 "
        }`}
      >
        <div className="z-[1000] mb-0 h-[120px] px-4">
          <Typography variant="h5" color="blue-gray">
            <span>
              <NavLink to="/">
                <img src={logo} alt="logo" width="100" />
              </NavLink>
            </span>
          </Typography>
        </div>

        <List>
          <NavLink to="dashboard" onClick={!hideNav}>
            <ListItem className="flex gap-1">
              <ListItemPrefix>
                <MdDashboard className="h-5 w-5" />
              </ListItemPrefix>
              <span> Dashboard</span>
            </ListItem>
          </NavLink>

          <NavLink to="requests" onClick={!hideNav}>
            <ListItem className="flex gap-1">
              <ListItemPrefix>
                <FaCodePullRequest className="h-5 w-5" />
              </ListItemPrefix>
              <span>Requests</span>

              <ListItemSuffix>
                <span>
                  <Chip
                    value="14"
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
                </span>
              </ListItemSuffix>
            </ListItem>
          </NavLink>

          <NavLink to="services" onClick={!hideNav}>
            <ListItem className="flex gap-1">
              <ListItemPrefix>
                <MdMedicalServices className="h-5 w-5" />
              </ListItemPrefix>
              <span>Services</span>

              <ListItemSuffix>
                <span>
                  <Chip
                    value="14"
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
                </span>
              </ListItemSuffix>
            </ListItem>
          </NavLink>

          <NavLink to="payments" onClick={!hideNav}>
            <ListItem className="flex gap-1">
              <ListItemPrefix>
                <TbZoomMoney className="h-5 w-5" />
              </ListItemPrefix>
              <span>Payments</span>
            </ListItem>
          </NavLink>

          <NavLink to="notifications" onClick={!hideNav}>
            <ListItem className="flex gap-1">
              <ListItemPrefix>
                <MdNotificationsNone className="h-5 w-5" />
              </ListItemPrefix>
              <span>Notifications</span>

              <ListItemSuffix>
                <span>
                  <Chip
                    value="14"
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
                </span>
              </ListItemSuffix>
            </ListItem>
          </NavLink>

          <NavLink to="settings" onClick={!hideNav}>
            <ListItem className="flex gap-1">
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              <span>Settings</span>
            </ListItem>
          </NavLink>
          <Modal.Open opens="logout">
            <button>
              <ListItem className="flex gap-1">
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                <span>Log Out</span>
              </ListItem>
            </button>
          </Modal.Open>
        </List>

        <Modal.Window name="logout">
          <div>
            {" "}
            <p className="mb-5 mt-7 bg-black px-5 py-1 text-center font-semibold text-white">
              Logout !!!
            </p>
            <p className="px-5 pb-4 text-center">Are You Sure?</p>
            <p className="flex justify-between p-2">
              {" "}
              <MyButton type="primary">
                <Modal.Close>No</Modal.Close>
              </MyButton>
              <MyButton type="primary" onClick={() => navigate("/")}>
                Yes
              </MyButton>
            </p>
          </div>
        </Modal.Window>
      </Card>
    </Modal>
  );
}
