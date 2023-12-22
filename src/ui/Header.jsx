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
    name: "Barbing",
    icon: "😇",
  },
];

import { NavLink } from "react-router-dom";
import "../index.css";
import { useEffect, useState } from "react";
import QuickBookList from "./QuickBookList";
import { HashLink } from "react-router-hash-link";
import logo from "../data/logo.png";
import DarkModeToggle from "./DarkModeToggle";

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

  //Dropdown for Quick request
  const [isOpen, setIsOpen] = useState(false);

  const openDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setTimeout(() => {
      if (isOpen) {
        setIsOpen(false);
      }
    }, 1000);
  };

  // <div className=" flex items-center  gap-10 pb-20 justify-between lg:m-auto  lg:mt-[60px] mt-[80px] sm:px-10 lg:px-10 lg:w-[70%]">
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
            className={`m-auto flex  w-[70%] items-center justify-between gap-10 px-10  ${
              isSticky ? " text-white" : ""
            }`}
          >
            <div className="flex items-center ">
              <NavLink to="/">
                <img src={logo} alt="logo" width="100" />
              </NavLink>
            </div>

            <div className="relative z-50">
              <span
                onClick={openDropdown}
                onMouseLeave={closeDropdown}
                className="flex cursor-pointer items-center gap-1 rounded-full  border-2 bg-blue-500 p-2 px-7 py-3 text-white focus:outline-none"
              >
                Quick-Request
                <TfiAngleDown />
              </span>

              {isOpen && (
                <div className="absolute mt-1 rounded-md border border-gray-300 bg-white text-black shadow-md">
                  <ul className="grid w-[600px] grid-cols-4 overflow-y-auto">
                    {categories.map((category) => (
                      <QuickBookList category={category} key={category.id} />
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className=" flex items-center gap-20 text-[18px]">
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
