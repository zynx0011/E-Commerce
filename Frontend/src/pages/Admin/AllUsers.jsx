import React, { useEffect, useState } from "react";
import moment from "moment";
import { MdDelete, MdModeEdit } from "react-icons/md";
import AdminPanel from "./Admin";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { api } from "@/utils/axios";
import EditProfile from "./EditProfile";
import toast from "react-hot-toast";
import { Query, useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.isAdmin === false) {
      navigate("/");
    }
  }, [user]);

  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [allUser, setAllUsers] = useState([]);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    username: "",
    isAdmin: "",
    _id: "",
  });

  const fetchAllUsers = async () => {
    try {
      const res = await api.get(`/admin/get-all-users`);
      setAllUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, [openUpdateRole]);

  // const { isLoading, data: allUser } = useQuery({
  //   queryKey: ["allUsers"],
  //   queryFn: fetchAllUsers,
  //   staleTime: 0,
  // });

  const deleteUser = async (id) => {
    try {
      const res = await api.delete(`/admin/DeleteUser/${id}`);
      if (res.status === 200) {
        fetchAllUsers();
      }
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error("User delete failed");
      console.log(error);
    }
  };

  return (
    <div className=" w-full bg-white  dark:bg-black md:flex hidden">
      <div className="flex max-w-full  ">
        <AdminPanel />
      </div>
      <div className="flex  justify-center mx-auto p-3 ">
        <div className="w-full min-w-[70vw] ">
          <div className="flex justify-between items-center p-7 bg-gradient-to-r from-indigo-500 to-blue-500">
            <h1 className="text-3xl font-bold text-white">All Users</h1>
          </div>
          <div className="overflow-y-hidden rounded-lg border ">
            <div className="overflow-x-auto  p-3 ">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#6366f1] text-left text-xs font-semibold uppercase tracking-widest text-white">
                    <th className="px-5 py-3">Sr.</th>
                    <th className="px-5 py-3">Full Name</th>
                    <th className="px-5 py-3">User Role</th>
                    <th className="px-5 py-3">Created at</th>
                    <th className="px-5 py-3">Edit</th>
                    <th className="px-5 py-3">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {allUser?.map((user, index) => (
                    <tr
                      className="border-b bg-white text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      key={index}
                    >
                      <td className="px-5 py-5">{index + 1}</td>
                      <td className="px-5 py-5">{user?.username}</td>
                      <td className="px-5 py-5">
                        {user?.isAdmin ? "Admin" : "User"}
                      </td>
                      <td className="px-5 py-5">
                        {moment(user?.createdAt).format(
                          "Do MMMM  YYYY, h:mm a"
                        )}
                      </td>
                      <td className="px-5 py-5">
                        <button
                          onClick={() => {
                            setOpenUpdateRole(true);
                            setUpdateUserDetails(user);
                          }}
                          className="text-blue-500 text-xl"
                        >
                          <MdModeEdit />
                        </button>
                        {openUpdateRole && (
                          <EditProfile
                            name={updateUserDetails.username}
                            email={updateUserDetails.email}
                            role={updateUserDetails.isAdmin ? "Admin" : "User"}
                            userId={updateUserDetails._id}
                            onClose={() => setOpenUpdateRole(false)}
                          />
                        )}
                      </td>
                      <td className="px-5 py-5">
                        <button
                          className="text-red-500 text-xl"
                          onClick={() => deleteUser(user?._id)}
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
