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

import YesModal from "../../../ui/YesModal";
import { FaCodePullRequest } from "react-icons/fa6";
import { TbZoomMoney } from "react-icons/tb";

export default function ClientNavMenus({ hideNav }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  //Logout Modal Functions
  const handleLogout = () => {
    setIsModalOpen(true);
  };
  const handleYes = () => {
    // Perform the logout action
    console.log("Logged out");
    navigate("/adminLogin");
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Card className="bg-style text-bg-text hidden h-[100vh] lg:block">
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
          <ListItem className="flex gap-1">
            <ListItemPrefix>
              <MdDashboard className="h-5 w-5" />
            </ListItemPrefix>
            <span className={`${!hideNav ? "hidden" : ""}`}> Dashboard</span>
          </ListItem>
        </NavLink>

        <NavLink to="requests">
          <ListItem className="flex gap-1">
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

        <NavLink to="services">
          <ListItem className="flex gap-1">
            <ListItemPrefix>
              <MdNotificationsNone className="h-5 w-5" />
            </ListItemPrefix>
            <span className={`${!hideNav ? "hidden" : ""}`}>Services</span>

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

        <NavLink to="payments">
          <ListItem className="flex gap-1">
            <ListItemPrefix>
              <TbZoomMoney className="h-5 w-5" />
            </ListItemPrefix>
            <span className={`${!hideNav ? "hidden" : ""}`}>Payments</span>
          </ListItem>
        </NavLink>

        <NavLink to="notifications">
          <ListItem className="flex gap-1">
            <ListItemPrefix>
              <MdNotificationsNone className="h-5 w-5" />
            </ListItemPrefix>
            <span className={`${!hideNav ? "hidden" : ""}`}>Notifications</span>

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
          <ListItem className="flex gap-1">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            <span className={`${!hideNav ? "hidden" : ""}`}>Settings</span>
          </ListItem>
        </NavLink>
        <button onClick={handleLogout}>
          <ListItem className="flex gap-1">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            <span className={`${!hideNav ? "hidden" : ""}`}>Log Out</span>
          </ListItem>
        </button>
      </List>

      <YesModal
        isOpen={isModalOpen}
        onYes={handleYes}
        onClose={handleCloseModal}
      />
    </Card>
  );
}
