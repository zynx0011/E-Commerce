import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const AdminPanel = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const user = currentUser?.data?.data?.user;
  const CurrentUser = user || currentUser;
  // console.log(user);
  // console.log(CureentUser);

  return (
    <div className="mx-4 min-h-screen max-w-[20vw] hidden md:block border-r-2 sm:mx-8 xl:mx-auto p-6 bg-white dark:bg-black  dark:text-white text-black  ">
      <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
      <div className=" min-w-[20vw]">
        <div className="col-span-2 hidden sm:block ">
          <ul className="flex flex-col">
            <NavLink
              to={"/settings"}
              className={({ isActive }) =>
                `${
                  isActive ? "border-l-blue-700 text-blue-700" : ""
                } mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700`
              }
            >
              My Account
            </NavLink>
            {CurrentUser?.isAdmin && (
              <NavLink
                to={"/all-users"}
                className={({ isActive }) =>
                  `${
                    isActive ? "border-l-blue-700 text-blue-700" : ""
                  } mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700`
                }
              >
                Users
              </NavLink>
            )}
            {CurrentUser?.isAdmin && (
              <NavLink
                to={"/all-products"}
                className={({ isActive }) =>
                  `${
                    isActive ? "border-l-blue-700 text-blue-700" : ""
                  } mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700`
                }
              >
                All Products
              </NavLink>
            )}

            <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
              Orders
            </li>
            <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
              Analytics
            </li>
            <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
