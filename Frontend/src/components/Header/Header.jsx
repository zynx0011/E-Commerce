import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ModeToggle } from "../../utils/mode-toggle";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const user = currentUser?.data?.data?.user;
  const currentData = currentUser?.data;

  const isAdmin =
    currentUser?.isAdmin || currentData?.isAdmin || user?.isAdmin === true;
  return (
    <div className="flex items-center justify-around border-b-2 min-h-[10vh] z-50 backdrop-blur-sm min-w-[100vw] overflow-hidden fixed   shadow-black  text-black dark:text-white dark:bg-transparent bg-[#ffffff]/[0.15] ">
      <div>
        {/* <Link to={"/"}>
          <img className="sm:w-[9vw] w-[50%] " src="" alt="logo" />
        </Link> */}
        <Link
          to={"/"}
          className="flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500"
        >
          <span className="flex-shrink-0 text-3xl font-black  tracking-tight opacity-100">
            E-Commerce
          </span>
        </Link>
      </div>
      <div className="flex items-center   justify-between w-[80%] sm:w-auto flex-wrap">
        <ul className="flex  items-center  sm:flex-col mt-4 font-medium lg:flex-row lg:space-x-8 flex-wrap  lg:mt-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#6366f1]" : "text-black"
                }  hover:border-b-2 lg:hover:bg-transparent lg:border-0  dark:text-white lg:p-0 font-semibold`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#6366f1]" : "text-black"
                }  hover:border-b-2 lg:hover:bg-transparent lg:border-0 dark:text-white  lg:p-0 font-semibold`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#6366f1]" : "text-black"
                }  hover:border-b-2 lg:hover:bg-transparent lg:border-0 dark:text-white  lg:p-0 font-semibold`
              }
            >
              Contact
            </NavLink>
          </li>
          <li></li>
        </ul>

        <Link to="/profile">
          <button className="font-semibold hover:border-b-2 flex">
            {currentUser ? (
              <img
                src={
                  currentUser?.profilePhoto ||
                  user?.profilePicture ||
                  currentUser?.profilePicture ||
                  currentData?.profilePicture
                }
                alt="logoo"
                className="w-10 h-10 rounded-full object-cover  "
              />
            ) : (
              "Sign Up"
            )}
          </button>
        </Link>
        <Link to={"/"} className="text-2xl relative flex ml-7">
          <span>
            <FaShoppingCart />
          </span>

          <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
            <p className="text-sm">0</p>
          </div>
        </Link>
        <button className="font-semibold ml-7">
          <ModeToggle />
        </button>
      </div>
    </div>
  );
};

export default Header;
