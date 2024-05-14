import React, { useState } from "react";
import AdminPanel from "../Admin/Admin";
import { useSelector } from "react-redux";
import { api } from "@/utils/axios";
import { toast } from "react-hot-toast";
import Confimation from "@/components/Shared/Confimation";

const Setting = () => {
  const { currentUser } = useSelector((state) => state.auth);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [ispassShow, setIsPassShow] = useState(false);
  // const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        "/users/change-password",
        {
          oldPassword,
          newPassword,
        },
        {
          withCredentials: true,
        }
      );
      console.log("Password changed successfully:", response.data);
      toast.success("Password changed successfully.");
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error(
        "An error occurred while changing password. Please try again."
      );
    }
  };

  // const ChangeEmail = () => {
  //   const res = api.post("/users/update-account", {
  //     email: currentUser?.data?.data?.user?.email,
  //   });
  // };

  return (
    <div className=" flex">
      <AdminPanel />
      <div className=" overflow-hidden rounded-xl p-6 bg-white text-black dark:text-white dark:bg-black sm:px-8 sm:shadow">
        <div classNameName="pt-4">
          <h1 className="py-2 text-2xl font-semibold">Account settings</h1>
        </div>
        <hr className="mt-4 mb-8" />
        <p className="py-2 text-xl font-semibold">Your Details</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-600">
            Your email address is{" "}
            <strong>{currentUser?.data?.data?.user?.email}</strong>
          </p>
          <p className="text-gray-600">
            Your username is{" "}
            <strong>{currentUser?.data?.data?.user?.username}</strong>
          </p>
          {
            <button
              // onChange={(e) => ChangeEmail(e.target.value)}
              className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2"
            >
              Change
            </button>
          }
        </div>
        <hr className="mt-4 mb-8" />
        <p className="py-2 text-xl font-semibold">Password</p>
        <div className="flex items-center">
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
            <label for="login-password">
              <span className="text-sm text-gray-500">Current Password</span>
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="password"
                  id="oldPassword"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="***********"
                />
              </div>
            </label>
            <label for="login-password">
              <span className="text-sm text-gray-500">New Password</span>
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  id="login-password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="***********"
                  type={ispassShow ? "text" : "password"}
                />
              </div>
            </label>
          </div>
          <svg
            onClick={() => setIsPassShow(!ispassShow)}
            xmlns="http://www.w3.org/2000/svg"
            className="mt-5 ml-2 h-6 w-6 cursor-pointer text-sm font-semibold text-gray-600 underline decoration-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
        </div>
        <p className="mt-2">
          Can't remember your current password.{" "}
          <a
            className="text-sm font-semibold text-blue-600 underline decoration-2"
            href="#"
          >
            Reset Password
          </a>
        </p>
        <button
          onClick={handleSubmit}
          className="mt-4 rounded-lg  bg-blue-600 px-4 py-2 text-white"
        >
          {/* {changePasswordMutation.isLoading
            ? "Changing Password..."
            : "Change Password"} */}
          save changes
        </button>
        <hr className="mt-4 mb-8" />

        <div className="mb-10">
          <p className="py-2 text-xl font-semibold">Delete Account</p>

          <p className="mt-2">
            Make sure you have taken backup of your account in case you ever
            need to get access to your data. We will completely wipe your data.
            There is no way to access your account after this action.
          </p>

          <Confimation />
        </div>
      </div>
    </div>
  );
};

export default Setting;
