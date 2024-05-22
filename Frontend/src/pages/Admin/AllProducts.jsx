import React, { useEffect, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import AdminPanel from "./Admin";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { api } from "@/utils/axios";
import toast from "react-hot-toast";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

const AllProducts = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.isAdmin === false) {
      navigate("/");
    }
  }, [user]);

  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [openEdit, setopenEdit] = useState(false);
  const [AllProducts, setAllProducts] = useState([]);
  const [productId, setProductId] = useState("");

  const fetchallProducts = async () => {
    try {
      const res = await api.get(`/product/all-products`);
      setAllProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await api.delete(`/product/delete-product/${id}`);
      if (res.status === 200) {
        fetchallProducts();
      }
      toast.success("Product deleted successfully");
    } catch (error) {
      toast.error("Product delete failed");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchallProducts();
  }, [openEdit, openUpdateRole]);

  return (
    <div className=" w-full bg-white  dark:bg-black md:flex hidden">
      <div className="flex max-w-full  ">
        <AdminPanel />
      </div>
      <div className="flex  justify-center mx-auto p-3 ">
        <div className="w-full min-w-[70vw] ">
          <div className="flex justify-between items-center p-7 bg-gradient-to-r from-indigo-500 to-blue-500">
            <h1 className="text-3xl font-bold text-white">All Products</h1>
            <button
              onClick={() => setOpenUpdateRole(true)}
              className="btn p-3 whitespace-nowrap bg-white text-black"
            >
              Add Product{" "}
            </button>
          </div>
          <div className="">
            {openUpdateRole && (
              <AddProduct onclose={() => setOpenUpdateRole(false)} />
            )}
          </div>
          {openEdit && (
            <div className=" ">
              <EditProduct
                onclose={() => setopenEdit(false)}
                Aprouct={productId}
              />
            </div>
          )}
          <div className="overflow-y-hidden rounded-lg border ">
            <div className="overflow-x-auto p-3 ">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#6366f1] text-left text-xs font-semibold uppercase tracking-widest text-white">
                    <th className="px-5 py-3">Sr.</th>
                    <th className="px-5 py-3">Product Name</th>
                    <th className="px-5 py-3">Price</th>
                    <th className="px-5 py-3">Selling Price</th>
                    <th className="px-5 py-3">Quantity</th>
                    <th className="px-5 py-3">In Stock</th>
                    <th className="px-5 py-3">Brand</th>
                    <th className="px-5 py-3">Edit</th>
                    <th className="px-5 py-3">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {AllProducts?.map((product, index) => (
                    <tr
                      className="border-b bg-white text-md font-medium  text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      key={index}
                    >
                      <td className="px-5 py-5">{index + 1}</td>
                      <td className="px-5 py-5">{product?.productName}</td>
                      <td className="px-5 py-5 text-red-500">
                        {product?.price}
                      </td>
                      <td className="px-5 py-5 text-green-500">
                        {product?.sellingPrice}
                      </td>
                      <td className="px-5 py-5">{product?.quantity}</td>
                      <td className="px-5 py-5">
                        {product?.quantity > 5 ? "Yes" : "No"}
                      </td>
                      <td className="px-5 py-5">{product?.brand}</td>
                      <td className="px-5 py-5">
                        <button
                          className="text-blue-500 text-xl"
                          onClick={() => setopenEdit(true)}
                        >
                          <MdModeEdit onClick={() => setProductId(product)} />
                        </button>
                      </td>
                      <td className="px-5 py-5">
                        <button
                          className="text-red-500 text-xl"
                          onClick={() => deleteProduct(product?._id)}
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

export default AllProducts;
