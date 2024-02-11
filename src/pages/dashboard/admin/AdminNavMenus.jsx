import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  PowerIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import logo from "../../../../src/data/logo.png";
import { MdDashboard, MdNotificationsNone } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { RiServiceLine, RiUserSearchFill } from "react-icons/ri";
import { GrBusinessService, GrUserAdmin } from "react-icons/gr";
import { FcCustomerSupport } from "react-icons/fc";
import { IoIosGitPullRequest } from "react-icons/io";
import YesModal from "../../../ui/YesModal";

export default function AdminNavMenus({ hideNav }) {
  const [open, setOpen] = React.useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  //menu toggle function
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

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
    <Card className="bg-style border-r-2 text-bg-text hidden h-[100vh] lg:block">
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
          <ListItem>
            <ListItemPrefix>
              <MdDashboard className="h-5 w-5" />
            </ListItemPrefix>
            <span className={`${!hideNav ? "hidden" : ""}`}> Dashboard</span>
          </ListItem>
        </NavLink>

        <Accordion
          open={open === 1}
          icon={
            <span className={`${!hideNav ? "hidden" : ""}`}>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            </span>
          }
          className="overflow-hidden"
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <RiUserSearchFill className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                <span className={`${!hideNav ? "hidden" : ""}`}>Users</span>
              </Typography>
            </AccordionHeader>
          </ListItem>

          <AccordionBody className="py-1">
            <List className="p-0">
              <NavLink to="providers">
                <ListItem>
                  <ListItemPrefix>
                    <GrBusinessService strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  <span className={`${!hideNav ? "hidden" : ""}`}>
                    Providers
                  </span>
                </ListItem>
              </NavLink>
              <NavLink to="clients">
                <ListItem>
                  <ListItemPrefix>
                    <FcCustomerSupport strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  <span className={`${!hideNav ? "hidden" : ""}`}>Clients</span>
                </ListItem>
              </NavLink>
              <NavLink to="subadmins">
                <ListItem>
                  <ListItemPrefix>
                    <GrUserAdmin strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  <span className={`${!hideNav ? "hidden" : ""}`}>
                    Sub_Admins
                  </span>
                </ListItem>
              </NavLink>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 2}
          icon={
            <span className={`${!hideNav ? "hidden" : ""}`}>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 2 ? "rotate-180" : ""
                }`}
              />
            </span>
          }
          className="overflow-hidden"
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <RiServiceLine className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                <span className={`${!hideNav ? "hidden" : ""}`}>Services</span>
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <NavLink to="serviceRequests">
                <ListItem>
                  <ListItemPrefix>
                    <IoIosGitPullRequest strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  <span className={`${!hideNav ? "hidden" : ""}`}>
                    Service Requests
                  </span>
                </ListItem>
              </NavLink>
              <NavLink to="categories">
                <ListItem>
                  <ListItemPrefix>
                    <GrBusinessService strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  <span className={`${!hideNav ? "hidden" : ""}`}>
                    Service Categories
                  </span>
                </ListItem>
              </NavLink>
            </List>
          </AccordionBody>
        </Accordion>

        <NavLink to="notifications">
          <ListItem>
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
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            <span className={`${!hideNav ? "hidden" : ""}`}>Settings</span>
          </ListItem>
        </NavLink>
        <button onClick={handleLogout}>
          <ListItem>
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
