import React from "react";
import { NavLink } from "react-router-dom"; // Import BrowserRouter and Link

const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-darkbg">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/search"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* <img
            src=""
            alt="cleanSculptor logo"
            className="h-8 dark:text-white"
          /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            cleanSculptor
          </span>
        </NavLink>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 border-gray-700">
            <li>
              <NavLink
                to="login"
                className={({ isActive }) => {
                  let style = isActive
                    ? "text-darkblue hover:text-darkblue"
                    : "text-lightblue md:hover:text-darkblue md:hover:bg-transparent hover:text-white hover:bg-transparent";
                  style +=
                    " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0";
                  return style;
                }}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) => {
                  let style = isActive
                    ? "text-darkblue hover:text-darkblue"
                    : "text-lightblue md:hover:text-darkblue md:hover:bg-transparent hover:text-white hover:bg-transparent";
                  style +=
                    " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0";
                  return style;
                }}
              >
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search"
                className={({ isActive }) => {
                  let style = isActive
                    ? "text-darkblue hover:text-darkblue"
                    : "text-lightblue md:hover:text-darkblue md:hover:bg-transparent hover:text-white hover:bg-transparent";
                  style +=
                    " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0";
                  return style;
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lists"
                className={({ isActive }) => {
                  let style = isActive
                    ? "text-darkblue hover:text-darkblue"
                    : "text-lightblue md:hover:text-darkblue md:hover:bg-transparent hover:text-white hover:bg-transparent";
                  style +=
                    " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0";
                  return style;
                }}
              >
                Lists
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) => {
                  let style = isActive
                    ? "text-darkblue hover:text-darkblue"
                    : "text-lightblue md:hover:text-darkblue md:hover:bg-transparent hover:text-white hover:bg-transparent";
                  style +=
                    " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0";
                  return style;
                }}
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
