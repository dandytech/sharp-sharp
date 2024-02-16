import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../data/logo.png";

export default function SmallScreenHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setTimeout(() => {
      if (menuOpen) {
        setMenuOpen(!menuOpen);
      }
    }, 1000);
  };

  return (
    <div className="mb:block  fixed top-0 z-30 w-full sm:block lg:hidden lg:pt-[80px] ">
      <div className="flex items-center  justify-between bg-gradient-to-t from-slate-900 to-gray-900 px-5 ">
        <div className="flex items-center justify-evenly gap-20">
          <div className="">
            <NavLink to="home">
              {" "}
              <img src={logo} alt="logo" width="80" height="80" />
            </NavLink>
          </div>

          {/* <div className="hidden gap-10">
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
            <div>Contact</div>
            <div>Login</div>
            <div>Get Started</div>
          </div> */}
        </div>
        <div className="cursor-pointer lg:absolute" onClick={handleToggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
      </div>

      {/* Conditional rendering for the menu */}
      {menuOpen && (
        <div className="menu md:block">
          <ul className="absolute z-20 flex flex-col-reverse text-white">
            <li>
              {" "}
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/about" onClick={closeMenu}>
                About
              </NavLink>
            </li>

            <li>
              {" "}
              <NavLink to="/services" onClick={closeMenu}>
                Services
              </NavLink>
            </li>

            <li>
              {" "}
              <NavLink to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/login" onClick={closeMenu}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      {/* Your main content goes here */}
      {/* <div className="content">
        
        <p>Welcome to your website!</p>
      </div> */}
    </div>
  );
}
