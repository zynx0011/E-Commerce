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
import AddProduct from "./AddProduct";

const AllProducts = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.isAdmin === false) {
      navigate("/");
    }
  }, [user]);

  const [openUpdateRole, setOpenUpdateRole] = useState(true);
  const [AllProducts, setAllProducts] = useState([]);

  const fetchallProducts = async () => {
    try {
      const res = await api.get(`/admin/get-all-users`);
      setAllProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchallProducts();
  }, [openUpdateRole]);

  // const { isLoading, data: allUser } = useQuery({
  //   queryKey: ["allUsers"],
  //   queryFn: fetchAllUsers,
  //   staleTime: 0,
  // });

  const deleteProduct = async (id) => {
    try {
      const res = await api.delete(`/admin/DeleteUser/${id}`);
      if (res.status === 200) {
        fetchallProducts();
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
        {" "}
        <AdminPanel />
      </div>
      <div className="div">
        {openUpdateRole && (
          <AddProduct onclose={() => setOpenUpdateRole(false)} />
        )}
      </div>
    </div>
  );
};

export default AllProducts;
