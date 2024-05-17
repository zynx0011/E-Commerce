import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-hot-toast";
import { api } from "@/utils/axios";
import { MdCancel } from "react-icons/md";

const ChangeUserRole = ({ name, email, role, userId, onClose, callFunc }) => {
  const [userRole, setUserRole] = useState(role);
  // console.log(userId);

  const handleOnChangeSelect = (e) => {
    setUserRole(e.target.value);

    // console.log(e.target.value);
  };
  // console.log(name);

  const updateUserRole = async () => {
    try {
      const res = await api.patch(`/admin/UpdateUserRole/${userId}`, {
        role: userRole === "Admin" ? "true" : "false",
      });
      // console.log(res);
      if (res) {
        toast.success("User role updated successfully");
        onClose();
      }
    } catch (error) {
      console.log(error);
      toast.error("User role update failed");
    }
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center  dark:bg-black/40 bg-white/40 backdrop:blur-sm  bg-opacity-50">
      <div className="mx-auto bg-white dark:bg-black/50 border-2 shadow-lg  backdrop:blur-3xl   p-4 w-full max-w-sm relative">
        <button
          className="block ml-auto text-4xl text-red-600 absolute -right-4 -top-4 "
          onClick={onClose}
        >
          <MdCancel />
        </button>

        <div className="dark:text-white text-black ">
          <h1 className="pb-3  text-xl font-semibold text-center py-3 bg-[#6366f1] text-white">
            Change User Role
          </h1>

          <div className="gap-4 flex flex-col mt-8">
            <p className=" font-semibold mx-auto">
              Name : <span className="font-semibold ">{name}</span>
            </p>
            <p className="text-center font-semibold">
              Email : <span className="font-semibold">{email}</span>
            </p>
          </div>

          <div className="flex items-center justify-between my-4">
            <p className="font-semibold text-center mx-auto">Role :</p>
            <select
              className="border px-4 py-1 mx-auto text-white"
              value={userRole}
              defaultChecked={userRole}
              onChange={handleOnChangeSelect}
            >
              {Object.values(["admin", "user"]).map((el) => {
                // console.log(el);
                return (
                  <option key={el}>{el === "admin" ? "Admin" : "User"}</option>
                );
              })}
            </select>
          </div>
        </div>
        <button
          className="w-fit mx-auto block font-semibold  py-2 px-3 bg-[#6366f1] text-white"
          onClick={updateUserRole}
        >
          Change Role
        </button>
      </div>
    </div>
  );
};

export default ChangeUserRole;
