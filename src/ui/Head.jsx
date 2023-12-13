import { MdKeyboardArrowDown } from "react-icons/md";
import ServiceSubMenus from "../features/services/ServiceSubMenus";
import { useState } from "react";
import AboutSubMenu from "../features/about/AboutSubMenu";

export const menus = [
  {
    id: 1,
    name: "Home",
    route: "/home",
    expanded: false,
  },
  {
    id: 2,
    name: "About",
    route: "/about",
    expanded: true,
  },
  {
    id: 3,
    name: "Services",
    route: "/services",
    expanded: true,
  },
  {
    id: 4,
    name: "Contact",
    route: "/contact",
    expanded: false,
  },

  {
    id: 5,
    name: "Login",
    route: "/login",
    expanded: false,
  },
  {
    id: 6,
    name: "Get Started",
    route: "/signup",
    expanded: false,
  },
];

export default function Head() {
  const [show, setShow] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleShow = (id) => {
    setShow(id);
  };
  const closeDrop = () => {
    setTimeout(() => {
      if (!isActive) {
        setShow(false);
      }
    }, 1000);
  };
  return (
    <>
      <ul className="mb-10 mt-20 flex items-center justify-center gap-10">
        {menus.map((menu) => (
          <>
            <li
              key={menu.id}
              className="flex items-center justify-center"
              onMouseEnter={() => menu.expanded && handleShow(menu.id)}
              onMouseLeave={closeDrop}
            >
              {menu.name}
              {menu.expanded && <MdKeyboardArrowDown />}
            </li>
          </>
        ))}
      </ul>
      {show === 3 && (
        <div
          onMouseLeave={() => {
            closeDrop;
            setIsActive(false);
          }}
          onMouseEnter={() => {
            setShow(3);
            setIsActive(true);
          }}
          className="mx-auto w-10/12 rounded-md bg-gray-50 p-10 shadow-lg "
        >
          <ServiceSubMenus />
        </div>
      )}
      {/* {show === 2 && (
        <div
          onMouseLeave={() => {
            closeDrop;
            setIsActive(false);
          }}
          onMouseEnter={() => {
            setShow(2);
            setIsActive(true);
          }}
          className="mx-auto w-10/12 rounded-md bg-gray-50 p-3 shadow"
        >
          <AboutSubMenu />
        </div>
      )} */}
    </>
  );
}
