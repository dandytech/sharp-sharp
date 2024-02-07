import { TfiAngleDown } from "react-icons/tfi";

export const categories = [
  {
    id: 1,
    name: "Laudry",
    icon: "😊",
  },
  {
    id: 2,
    name: "Tailoring",
    icon: "😇",
  },
  {
    id: 3,
    name: "Barbing",
    icon: "😇",
  },

  {
    id: 4,
    name: "Make-up",
    icon: "😇",
  },
  {
    id: 5,
    name: "Mechanic",
    icon: "😇",
  },
  {
    id: 6,
    name: "Electricia",
    icon: "😇",
  },

  {
    id: 7,
    name: "Shoe-Maker",
    icon: "😇",
  },
  {
    id: 8,
    name: "Cook",
    icon: "😇",
  },
  {
    id: 9,
    name: "Cleaner",
    icon: "😇",
  },

  {
    id: 10,
    name: "Nanny",
    icon: "😇",
  },
  {
    id: 11,
    name: "Barbing",
    icon: "😇",
  },
  {
    id: 12,
    name: "Barbing",
    icon: "😇",
  },

  {
    id: 13,
    name: "Barbing",
    icon: "😇",
  },
  {
    id: 14,
    name: "Barbing",
    icon: "😇",
  },
  {
    id: 15,
    name: "Barbing",
    icon: "😇",
  },

  {
    id: 16,
    name: "Barbing",
    icon: "😇",
  },
  {
    id: 17,
    name: "Barbing",
    icon: "😇",
  },
  {
    id: 18,
    name: "Barbing",
    icon: "😇",
  },

  {
    id: 19,
    name: "Barbing",
    icon: "😇",
  },

  {
    id: 20,
    name: "Web Designer",
    icon: "😇",
  },
  {
    id: 21,
    name: "Gardener",
    icon: "😇",
  },
];

import { NavLink } from "react-router-dom";
import "../index.css";
import { useEffect, useState } from "react";

import { HashLink } from "react-router-hash-link";
import logo from "../data/logo.png";
import { Button, Menu, MenuHandler, MenuList } from "@material-tailwind/react";

import { IoMdArrowForward } from "react-icons/io";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  //target ref link

  // const myDivRef = useRef(null);

  // const scrollToDiv = () => {
  //   myDivRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  //call the scrollToDiv on button and ref the target div  using ref={myDivRef}

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Check if the scroll position is greater than or equal to 20 pixels
      setIsSticky(scrollY >= 30);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      <div className="relative z-20 hidden  overflow-x-hidden  lg:block">
        <nav
          className={`fixed m-auto w-full ${
            isSticky ? " bg-gray-800 " : "bg-transparent"
          }`}
        >
          <div
            className={`flex justify-between bg-gray-800 p-2 px-10 text-white ${
              isSticky ? " border-b-2" : ""
            }`}
          >
            <span>Support: +234 08099999999 | sharpsharp@gmail.com</span>
            <span>Working Hour: Mon-Sat 8am-5pm</span>
            <span className="cursor-pointer">
              News & Media | Carrier | Blog
            </span>
          </div>

          <div
            className={`${
              isSticky
                ? "m-auto flex h-[120px] w-[70%] items-center  justify-between p-5 text-white"
                : "m-auto flex w-[70%] items-center justify-between px-5"
            }`}
          >
            <div>
              <NavLink to="/">
                <img src={logo} alt="logo" width="100" />
              </NavLink>
            </div>

            <div className="relative z-50">
              <Menu>
                <MenuHandler>
                  <Button className="flex cursor-pointer items-center gap-1 rounded-full  border-2 bg-blue-500 p-2 px-7 py-3 text-white focus:outline-none">
                    <span> Services</span>
                    <span>
                      {" "}
                      <TfiAngleDown />
                    </span>
                  </Button>
                </MenuHandler>

                <MenuList>
                  <div className="ml-3 mt-5  grid h-[250px] grid-cols-3 gap-5 overflow-y-auto p-5">
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className="flex cursor-pointer items-center justify-center gap-1 rounded-2xl border-2 px-2 py-1 hover:bg-black hover:text-white "
                      >
                        <NavLink to="/">
                          <span> {category.icon}</span>
                          <span> {category.name}</span>
                        </NavLink>
                      </div>
                    ))}
                  </div>

                  <p className="mt-10 text-center">
                    {" "}
                    <NavLink
                      to="services"
                      className="flex items-center justify-center gap-1 text-[16px]"
                    >
                      <span> View All</span>
                      <span>
                        <IoMdArrowForward />
                      </span>
                    </NavLink>
                  </p>
                </MenuList>
              </Menu>
            </div>

            <div className=" flex items-center gap-5 text-[18px]">
              <NavLink
                className="cursor-pointer hover:font-bold "
                to="home"
                activeClassName="active"
              >
                Home
              </NavLink>
              <HashLink
                smooth
                className="cursor-pointer hover:font-bold "
                to="home#about"
                activeClassName="active"
              >
                About{" "}
              </HashLink>

              <NavLink
                className="cursor-pointer hover:font-bold "
                to="contact"
                activeClassName="active"
              >
                Contact{" "}
              </NavLink>

              <NavLink
                className="cursor-pointer hover:font-bold"
                to="login"
                activeClassName="active"
              >
                Login
              </NavLink>

              <button className="rounded-full border-2 border-blue-500 bg-white  px-7 py-3 text-black">
                <NavLink
                  className="cursor-pointer hover:font-bold"
                  to="signup"
                  activeClassName="active"
                >
                  Get-Started
                </NavLink>
              </button>
            </div>
          </div>
        </nav>

        <div className="h-[160px] bg-gradient-to-r from-violet-100 to-blue-100 ">
          {" "}
        </div>
      </div>
    </>
  );
}
