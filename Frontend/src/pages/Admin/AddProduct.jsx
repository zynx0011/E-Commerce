import productCategory from "@/utils/ProductCatogery";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const AddProduct = ({ onclose }) => {
  const [image, setImage] = useState([]);
  const [Product, setProduct] = useState({
    productName: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
    image: [],
    brand: "",
  });

  const handleOnChange = (e) => {
    setProduct({
      ...Product,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <div className=" bg-white/80 min-h-screen  dark:bg-black/50 z-10 flex justify-center items-center">
      <div className="mx-auto -mt-[1%]   bg-white dark:bg-black/50 border-2 shadow-lg  backdrop:blur-3xl   p-10 m-4 w-full  relative">
        <div className="container mx-auto ">
          <div className=" flex relative ">
            <h1 className="text-3xl font-bold mb-4">Add New Product</h1>
            <MdClose
              className="text-3xl cursor-pointer absolute  right-0"
              onClick={onclose}
            />
          </div>
          <div className=" ">
            {/* <form className="max-w-md mx-auto h-full">
              <div className="mb-4">
                <label
                  htmlFor="productName"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="imageURL"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Image URL
                </label>
                <input
                  type="url"
                  id="imageURL"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Add Product
              </button>
            </form> */}
            <div className="div text-gray-300  ">
              <form action="">
                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="productName"
                    placeholder="Enter product name"
                    value={Product.productName}
                    onChange={handleOnChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                    required
                    value={Product.description}
                    onChange={handleOnChange}
                    placeholder="Enter product description"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="imageURL"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    id="imageURL"
                    onChange={handleOnChange}
                    value={image}
                    accept="image/*"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                    required
                    placeholder="Enter product image"
                  />
                  <img src={image} alt="a" />
                </div>
                <div className="flex items-center justify-center">
                  <div className="mb-4 w-[40%]">
                    <label
                      htmlFor="price"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      id="price"
                      value={Product.price}
                      onChange={handleOnChange}
                      className=" border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                      required
                      placeholder="Enter product price"
                    />
                  </div>
                  <div className="mb-4 w-[40%]">
                    <label
                      htmlFor="category"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Category
                    </label>
                    <select
                      required
                      value={Product.category}
                      id="category"
                      onChange={handleOnChange}
                      className="block text-gray-400 p-3   font-bold mb-2"
                    >
                      <option value={""}>Select Category</option>
                      {productCategory.map((el, index) => {
                        return (
                          <option value={el.value} key={el.value + index}>
                            {el.label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="mb-4 w-[40%]">
                    <label
                      htmlFor="quantity"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Quantity
                    </label>
                    <input
                      type="number"
                      value={Product.quantity}
                      onChange={handleOnChange}
                      id="quantity"
                      className=" border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                      required
                      placeholder="Enter product quantity"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="brand"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Brand
                  </label>
                  <input
                    type="text"
                    id="brand"
                    value={Product.brand}
                    onChange={handleOnChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                    required
                    placeholder="Enter product brand"
                  />
                </div>
                <button
                  // type="submit"
                  className="bg-blue-500 w-full font-bold mt-7 text-white p-3 rounded hover:bg-blue-600"
                >
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
