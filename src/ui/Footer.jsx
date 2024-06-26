import { IoIosSend } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import logo2 from "../data/logo2.png";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  const date = new Date();
  const today = date.getFullYear();

  const [visible, setVisible] = useState(false);
  //scroll to home
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Check if the scroll position is greater than or equal to 20 pixels
      setVisible(scrollY > 100);
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
      <div className=" overflow-x-hidden bg-gradient-to-t  from-gray-900 to-blue-700 pt-10 sm:p-10 ">
        <div className="m-auto  text-center  text-gray-400 sm:grid-cols-3 sm:gap-10  sm:py-[10px] lg:grid lg:w-[70%]">
          <div className="flex flex-col items-center text-left">
            <NavLink to="">
              <img src={logo2} alt="logo2" width="80" height="80" />
            </NavLink>

            <p className=" mt-[-5px] text-left">
              We are Service Provider Agent!!!
            </p>

            <p className="mt-10 flex gap-5 text-[24px]">
              <span className="cursor-pointer hover:bg-white hover:text-blue-500  ">
                <FaFacebookSquare />
              </span>
              <span className="cursor-pointer hover:bg-white hover:text-blue-500 ">
                <FaXTwitter />
              </span>
              <span className="cursor-pointer hover:bg-white hover:text-blue-500 ">
                <TiSocialYoutubeCircular />
              </span>
              <span className="cursor-pointer hover:bg-white hover:text-blue-500 ">
                <FaWhatsapp />
              </span>
            </p>
          </div>

          <div className="mt-20 grid items-center justify-center lg:mt-0">
            <p className="mb-5 text-[20px]">
              <span className="border-b-2 border-blue-500">Q</span>UICK LINKS
            </p>

            <div className="flex gap-10">
              <div className="text-right">
                <p className="mb-3">
                  {" "}
                  <NavLink to="/">Home</NavLink>
                </p>
                <p className="mb-3">
                  {" "}
                  <HashLink to="home#about">About Us</HashLink>
                </p>
                <p className="mb-3">
                  {" "}
                  <NavLink to="/login">Login</NavLink>
                </p>
                <p className="mb-3">
                  {" "}
                  <NavLink to="/signup">Sign Up</NavLink>
                </p>
                <p className="mb-3">
                  {" "}
                  <NavLink to="/contact">Contact Us</NavLink>
                </p>
                <p className="mb-3">
                  {" "}
                  <NavLink to="/services">Services</NavLink>
                </p>
              </div>
              <div className="text-left">
                <p className="mb-3">
                  {" "}
                  <NavLink to="/terms">Terms of use</NavLink>
                </p>
                <p className="mb-3">
                  {" "}
                  <NavLink to="/">Privacy</NavLink>
                </p>
                <p className="mb-3">
                  {" "}
                  <NavLink to="/">Forums</NavLink>
                </p>
                <p className="mb-3">
                  {" "}
                  <HashLink to="home#faq" className="hidden lg:block">
                    FAQs
                  </HashLink>
                  <HashLink to="home#faqMobile" className="lg:hidden">
                    FAQs
                  </HashLink>
                </p>
                <p className="mb-3">
                  {" "}
                  <NavLink to="/privacy">Help Center</NavLink>
                </p>
                <p className="mb-3">
                  {" "}
                  <NavLink to="/privacy">Mobile App</NavLink>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-20 px-3 lg:mt-0">
              <p className="mb-5 text-[20px]">
                <span className="border-b-2 border-blue-500">A</span>DDRESS
              </p>
              <p>
                2 metalbox Road, Off Acme road, Ogba Industrial Estate, Ikeja,
                Lagos, Nigeria.
              </p>

              <p className="mt-20 border-t-2 border-t-gray-500 text-[24px]">
                News Letter
              </p>

              <form>
                <div className="m-auto flex h-[50px]  w-[100%]   items-center rounded-xl border-2 border-blue-500  bg-gray-800 text-center focus:border-white lg:m-0">
                  <input
                    type="email"
                    id="name"
                    name="name"
                    className=" h-[45px] w-[100%] rounded-xl bg-gray-800 px-5 font-semibold text-white focus:border-2 focus:border-white "
                    placeholder="Email"
                  />
                  <button className=" flex h-[45px]  w-[20%] items-center  justify-center rounded-xl border-r text-center text-[30px]">
                    <IoIosSend />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          onClick={scroll}
          className={` bottom-0 right-0 flex h-[50px] w-[30px] cursor-pointer justify-center rounded-lg border-2 bg-black text-[34px] text-white hover:bg-blue-500 ${
            visible ? "fixed bottom-0 right-0" : ""
          }`}
        >
          <span className="mt-[-27px]">
            {" "}
            <IoMdArrowUp />
          </span>
        </div>
      </div>
      <div className="z-40 flex   w-[100%] items-center justify-center overflow-x-hidden bg-gray-700 bg-gradient-to-b from-gray-800 to-blue-800 p-10 text-center font-light text-white">
        Copyright©{today}. All Rights Reserved.
      </div>
    </>
  );
}
