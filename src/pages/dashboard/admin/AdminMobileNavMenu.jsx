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
import { PowerIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import logo from "../../../../src/data/logo.png";
import { MdDashboard, MdNotificationsNone } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { RiServiceLine, RiUserSearchFill } from "react-icons/ri";
import { GrBusinessService, GrUserAdmin } from "react-icons/gr";
import { FcCustomerSupport } from "react-icons/fc";
import { IoIosGitPullRequest } from "react-icons/io";

import Modal from "../../../ui/Modal";
import MyButton from "../../../ui/MyButton";
import { CgProfile } from "react-icons/cg";
import { FaQuestionCircle } from "react-icons/fa";
import SpinnerMini from "../../../ui/SpinnerMini";
//import { useLogout } from "../../../features/authentication/admin/useLogout";
import { useLogoutAdmin } from "../../../features/admin/auth/useLogoutAdmin";

export default function AdminMobileNavMenus({ hideNav }) {
  const [open, setOpen] = React.useState(0);

  //const {logout, isLoading}=useLogout()
  const { adminLogout, isLoading } = useLogoutAdmin();

  //menu toggle function
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Modal>
      <Card
        className={`absolute z-[1000] h-auto lg:hidden ${
          hideNav
            ? "hidden"
            : "bg-style text-bg-text fixed left-0 top-0 z-[1000] mt-[98px] h-auto rounded-none rounded-b-xl pb-0 "
        }`}
      >
        <div className="z-[1000] mb-0 h-[120px] px-4">
          <Typography variant="h5" color="blue-gray">
            <span className={`${hideNav ? "hidden" : ""}`}>
              <NavLink to="/">
                <img src={logo} alt="logo" width="100" />
              </NavLink>
            </span>
          </Typography>
        </div>

        <List>
          <NavLink to="dashboard" onClick={!hideNav}>
            <ListItem className="space-x-3">
              <ListItemPrefix>
                <MdDashboard className="h-5 w-5" />
              </ListItemPrefix>
              <span className={`${hideNav ? "hidden" : ""}`}> Dashboard</span>
            </ListItem>
          </NavLink>

          <Accordion
            open={open === 1}
            icon={
              <span className={`${hideNav ? "hidden" : ""}`}>
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                />
              </span>
            }
            className="z-[1000] overflow-hidden"
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <RiUserSearchFill className="h-5 w-5" />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="mr-auto px-3 font-normal"
                >
                  <span className={`${hideNav ? "hidden" : ""}`}>Users</span>
                </Typography>
              </AccordionHeader>
            </ListItem>

            <AccordionBody className="py-1">
              <List className="p-0">
                <NavLink to="providers" onClick={!hideNav}>
                  <ListItem className="space-x-3">
                    <ListItemPrefix>
                      <GrBusinessService strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <span className={`${hideNav ? "hidden" : ""}`}>
                      Providers
                    </span>
                  </ListItem>
                </NavLink>
                <NavLink to="clients" onClick={!hideNav}>
                  <ListItem className="space-x-3">
                    <ListItemPrefix>
                      <FcCustomerSupport strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <span className={`${hideNav ? "hidden" : ""}`}>
                      Clients
                    </span>
                  </ListItem>
                </NavLink>
                <NavLink to="subadmins" onClick={!hideNav}>
                  <ListItem className="space-x-3">
                    <ListItemPrefix>
                      <GrUserAdmin strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <span className={`${hideNav ? "hidden" : ""}`}>
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
              <span className={`${hideNav ? "hidden" : ""}`}>
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`z-[1000] mx-auto h-4 w-4 transition-transform ${
                    open === 2 ? "rotate-180" : ""
                  }`}
                />
              </span>
            }
            className="z-[1000] overflow-hidden"
          >
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <RiServiceLine className="h-5 w-5" />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="mr-auto px-3 font-normal"
                >
                  <span className={`${hideNav ? "hidden" : ""}`}>Services</span>
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <NavLink to="serviceRequests" onClick={!hideNav}>
                  <ListItem className="space-x-3">
                    <ListItemPrefix>
                      <IoIosGitPullRequest
                        strokeWidth={3}
                        className="h-3 w-5"
                      />
                    </ListItemPrefix>
                    <span className={`${hideNav ? "hidden" : ""}`}>
                      Service Requests
                    </span>
                  </ListItem>
                </NavLink>
                <NavLink to="categories" onClick={!hideNav}>
                  <ListItem className="space-x-3">
                    <ListItemPrefix>
                      <GrBusinessService strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <span className={`${hideNav ? "hidden" : ""}`}>
                      Service Categories
                    </span>
                  </ListItem>
                </NavLink>
              </List>
            </AccordionBody>
          </Accordion>

          <NavLink to="notifications" onClick={!hideNav}>
            <ListItem className="space-x-3">
              <ListItemPrefix>
                <MdNotificationsNone className="h-5 w-5" />
              </ListItemPrefix>
              <span className={`${hideNav ? "hidden" : ""}`}>
                Notifications
              </span>

              <ListItemSuffix>
                <span className={`${hideNav ? "hidden" : ""}`}>
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
          {/* 
          <NavLink to="settings" onClick={!hideNav}>
            <ListItem>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              <span className={`${hideNav ? "hidden" : ""}`}>Settings</span>
            </ListItem>
          </NavLink> */}

          <Accordion
            open={open === 3}
            icon={
              <span className={`${hideNav ? "hidden" : ""}`}>
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`z-[1000] mx-auto h-4 w-4 transition-transform ${
                    open === 3 ? "rotate-180" : ""
                  }`}
                />
              </span>
            }
            className="z-[1000] overflow-hidden"
          >
            <ListItem className="p-0" selected={open === 3}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <RiServiceLine className="h-5 w-5" />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="mr-auto px-3 font-normal"
                >
                  <span className={`${hideNav ? "hidden" : ""}`}>Settings</span>
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <NavLink to="settings" onClick={!hideNav}>
                  <ListItem className="space-x-3">
                    <ListItemPrefix>
                      <CgProfile strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <span className={`${hideNav ? "hidden" : ""}`}>
                      Profile
                    </span>
                  </ListItem>
                </NavLink>
                <NavLink to="faqs" onClick={!hideNav}>
                  <ListItem className="space-x-3">
                    <ListItemPrefix>
                      <FaQuestionCircle strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <span className={`${hideNav ? "hidden" : ""}`}>FAQs</span>
                  </ListItem>
                </NavLink>
              </List>
            </AccordionBody>
          </Accordion>

          <Modal.Open opens="logout">
            <button>
              <ListItem className="space-x-3">
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                <span className={`${hideNav ? "hidden" : ""}`}>Log Out</span>
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
              <MyButton type="primary" onClick={adminLogout}>
                {!isLoading ? "Yes" : <SpinnerMini />}
              </MyButton>
            </p>
          </div>
        </Modal.Window>
      </Card>
    </Modal>
  );
}
