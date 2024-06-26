import React, { useState } from "react";
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
import { MdDashboard, MdNotificationsNone } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

import { FaCodePullRequest } from "react-icons/fa6";
import { TbZoomMoney } from "react-icons/tb";
import Modal from "../../../ui/Modal";
import MyButton from "../../../ui/MyButton";
import { useLogoutClient } from "../../../features/client/auth/useLogoutClient";

export default function ClientNavMenus({ hideNav }) {
  //const navigate = useNavigate();
  const { clientLogout, isLoading } = useLogoutClient();

  return (
    <Modal>
      <Card className="bg-style text-bg-text hidden h-[100vh] border-r-2 lg:block">
        <div className="mb-2 h-[120px] px-4">
          <NavLink to="/">
            <Typography variant="h5" color="blue-gray">
              <span className={`${!hideNav ? "hidden" : ""}`}>
                <img src={logo} alt="logo" width="100" />
              </span>
            </Typography>
          </NavLink>
        </div>
        <List>
          <NavLink to="dashboard">
            <ListItem className="flex gap-3">
              <ListItemPrefix>
                <MdDashboard className="h-5 w-5" />
              </ListItemPrefix>
              <span className={`${!hideNav ? "hidden" : ""}`}> Dashboard</span>
            </ListItem>
          </NavLink>

          <NavLink to="requests">
            <ListItem className="flex gap-3">
              <ListItemPrefix>
                <FaCodePullRequest className="h-5 w-5" />
              </ListItemPrefix>
              <span className={`${!hideNav ? "hidden" : ""}`}>Requests</span>

              <ListItemSuffix>
                <span className={`${!hideNav ? "hidden" : ""}`}>
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

          <NavLink to="transactions">
            <ListItem className="flex gap-3">
              <ListItemPrefix>
                <TbZoomMoney className="h-5 w-5" />
              </ListItemPrefix>
              <span className={`${!hideNav ? "hidden" : ""}`}>Payments</span>
            </ListItem>
          </NavLink>

          <NavLink to="notifications">
            <ListItem className="flex gap-3">
              <ListItemPrefix>
                <MdNotificationsNone className="h-5 w-5" />
              </ListItemPrefix>
              <span className={`${!hideNav ? "hidden" : ""}`}>
                Notifications
              </span>

              <ListItemSuffix>
                <span className={`${!hideNav ? "hidden" : ""}`}>
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

          <NavLink to="settings">
            <ListItem className="flex gap-3">
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              <span className={`${!hideNav ? "hidden" : ""}`}>Settings</span>
            </ListItem>
          </NavLink>

          <Modal.Open opens="logout">
            <button>
              <ListItem className="flex gap-3">
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                <span className={`${!hideNav ? "hidden" : ""}`}>Log Out</span>
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
              <MyButton
                disabled={isLoading}
                type="primary"
                onClick={clientLogout}
              >
                Yes
              </MyButton>
            </p>
          </div>
        </Modal.Window>
      </Card>
    </Modal>
  );
}
