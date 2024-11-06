import React from "react";
import { NavLink } from "react-router-dom"; // Import BrowserRouter and Link

const Navbar = ({ tokenExists }) => {
  if (!tokenExists) {
    return (
      <nav className="bg-white border-gray-200 dark:bg-darkbg">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/login"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src=""
              alt="cleanSculptor logo"
              className="h-8 dark:text-white"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              cleanSculptor
            </span>
          </NavLink>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-darkbg dark:bg-darkbg-800 md:dark:bg-darkbg-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="login"
                  className={({ isActive }) => {
                    let style = isActive
                      ? "dark:text-darkblue dark:hover:text-darkblue"
                      : "dark:text-lightblue md:dark:hover:text-darkblue md:dark:hover:bg-transparent dark:hover:text-white dark:hover:bg-transparent";
                    style +=
                      " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0";
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
                      ? "dark:text-darkblue dark:hover:text-darkblue"
                      : "dark:text-lightblue md:dark:hover:text-darkblue md:dark:hover:bg-transparent dark:hover:text-white dark:hover:bg-transparent";
                    style +=
                      " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0";
                    return style;
                  }}
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="bg-white border-gray-200 dark:bg-darkbg">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/search"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src=""
            alt="cleanSculptor logo"
            className="h-8 dark:text-white"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            cleanSculptor
          </span>
        </NavLink>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-darkbg dark:bg-darkbg-800 md:dark:bg-darkbg-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/search"
                className={({ isActive }) => {
                  let style = isActive
                    ? "dark:text-darkblue dark:hover:text-darkblue"
                    : "dark:text-lightblue md:dark:hover:text-darkblue md:dark:hover:bg-transparent dark:hover:text-white dark:hover:bg-transparent";
                  style +=
                    " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0";
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
                    ? "dark:text-darkblue dark:hover:text-darkblue"
                    : "dark:text-lightblue md:dark:hover:text-darkblue md:dark:hover:bg-transparent dark:hover:text-white dark:hover:bg-transparent";
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
                    ? "dark:text-darkblue dark:hover:text-darkblue"
                    : "dark:text-lightblue md:dark:hover:text-darkblue md:dark:hover:bg-transparent dark:hover:text-white dark:hover:bg-transparent";
                  style +=
                    " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0";
                  return style;
                }}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                className={({ isActive }) => {
                  let style = isActive
                    ? "dark:text-darkblue dark:hover:text-darkblue"
                    : "dark:text-lightblue md:dark:hover:text-darkblue md:dark:hover:bg-transparent dark:hover:text-white dark:hover:bg-transparent";
                  style +=
                    " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0";
                  return style;
                }}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
