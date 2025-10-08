import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ tokenExists }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray rounded-lg hover:bg-darkgray"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Navigation menu */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto transition-all duration-200 ease-in-out`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-darkbg dark:bg-darkgray md:dark:bg-darkbg dark:border-gray-700">
              <li>
                <NavLink
                  to="login"
                  onClick={closeMobileMenu}
                  className={({ isActive }) => {
                    let style = isActive
                      ? "dark:text-darkblue dark:hover:text-darkblue"
                      : "dark:text-lightblue md:dark:hover:text-darkblue md:dark:hover:bg-transparent dark:hover:text-white dark:hover:bg-lightblue";
                    style +=
                      " block py-3 px-4 md:py-2 md:px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 transition-colors duration-200";
                    return style;
                  }}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  onClick={closeMobileMenu}
                  className={({ isActive }) => {
                    let style = isActive
                      ? "dark:text-darkblue dark:hover:text-darkblue"
                      : "dark:text-lightblue md:dark:hover:text-darkblue md:dark:hover:bg-transparent dark:hover:text-white dark:hover:bg-lightblue";
                    style +=
                      " block py-3 px-4 md:py-2 md:px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 transition-colors duration-200";
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

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray rounded-lg hover:bg-darkgray"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto transition-all duration-200 ease-in-out`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-darkbg dark:bg-darkgray md:dark:bg-darkbg dark:border-gray-700">
            <li>
              <NavLink
                to="/search"
                onClick={closeMobileMenu}
                className={({ isActive }) => {
                  let style = isActive
                    ? "dark:text-darkblue dark:hover:text-darkblue"
                    : "dark:text-lightblue md:dark:hover:text-darkblue md:dark:hover:bg-transparent dark:hover:text-white dark:hover:bg-lightblue";
                  style +=
                    " block py-3 px-4 md:py-2 md:px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 transition-colors duration-200";
                  return style;
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lists"
                onClick={closeMobileMenu}
                className={({ isActive }) => {
                  let style = isActive
                    ? "dark:text-darkblue dark:hover:text-darkblue"
                    : "dark:text-lightblue md:dark:hover:text-darkblue md:dark:hover:bg-transparent dark:hover:text-white dark:hover:bg-lightblue";
                  style +=
                    " block py-3 px-4 md:py-2 md:px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 transition-colors duration-200";
                  return style;
                }}
              >
                Lists
              </NavLink>
            </li>
            {/* <li>
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
            </li> */}
            <li>
              <NavLink
                to="/logout"
                onClick={closeMobileMenu}
                className={({ isActive }) => {
                  let style = isActive
                    ? "dark:text-darkblue dark:hover:text-darkblue"
                    : "dark:text-lightblue md:dark:hover:text-darkblue md:dark:hover:bg-transparent dark:hover:text-white dark:hover:bg-lightblue";
                  style +=
                    " block py-3 px-4 md:py-2 md:px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 transition-colors duration-200";
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
