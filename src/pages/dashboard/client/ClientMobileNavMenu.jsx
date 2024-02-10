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

import YesModal from "../../../ui/YesModal";
import { FaCodePullRequest } from "react-icons/fa6";
import { TbZoomMoney } from "react-icons/tb";

export default function ClientMobileNavMenus({ hideNav }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  //Logout Modal Functions
  const handleLogout = () => {
    setIsModalOpen(true);
  };
  const handleYes = () => {
    // Perform the logout action
    console.log("Logged out");
    navigate("/admin");
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
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
        <button onClick={handleLogout}>
          <ListItem className="flex gap-1">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            <span>Log Out</span>
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
