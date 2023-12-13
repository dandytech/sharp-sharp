import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SmallScreenHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="mb:block  sm:block lg:hidden lg:pt-[80px] ">
      <div className="flex items-center  justify-between bg-gradient-to-t from-slate-900 to-gray-900 px-5 ">
        <div className="flex items-center justify-evenly gap-20">
          <div className="">
            <NavLink to="home">
              {" "}
              <img
                src="/src/data/sharpLogo1.png"
                alt="logo"
                width="80"
                height="80"
              />
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/about">About</NavLink>
            </li>

            <li>
              {" "}
              <NavLink to="/service">Services</NavLink>
            </li>

            <li>
              {" "}
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/login">Login</NavLink>
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
