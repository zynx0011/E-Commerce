import productCategory from "@/utils/ProductCatogery";
import { storeImage } from "@/utils/Uploader";
import { api } from "@/utils/axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdClose, MdDelete } from "react-icons/md";

const AddProduct = ({ onclose }) => {
  const [Product, setProduct] = useState({
    productName: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
    image: [],
    brand: "",
    sellingPrice: "",
  });
  const [images, setImages] = useState([]);

  const uploadImages = () => {
    console.log(images.length > 0 && images.length && Product.image.length < 6);
    if (images.length > 0 && images.length && Product.image.length < 6) {
      const promises = [];
      for (let i = 0; i < images.length; i++) {
        promises.push(storeImage(images[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setProduct({
            ...Product,
            image: Product.image.concat(urls),
          });
          toast.success("Images uploaded successfully");
        })
        .catch((error) => {
          toast.error("Images upload failed");
          console.log(error);
        });
    } else {
      toast.error("Image upload failed  please select less than 7 images");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/product/add", Product);
      if (res) {
        onclose();
        toast.success("product is created successfully");
      }
    } catch (error) {
      toast.error("product is  not created ");
      console.log(error);
    }
  };

  const handleOnChange = (e) => {
    setProduct({
      ...Product,
      [e.target.id]: e.target.value,
    });
  };

  const handleRemoveImage = (index) => {
    setProduct({
      ...Product,
      image: Product.image.filter((_, i) => i !== index),
    });
    toast.success("Images removed successfully");
  };
  return (
    <div className=" bg-white/80 min-h-screen  overflow-y-auto dark:bg-black/50 z-10 flex justify-center items-center">
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
            <div className="div text-gray-300  ">
              <form action="" onSubmit={submitHandler}>
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
                  <div className="flex ">
                    <input
                      type="file"
                      id="imageURL"
                      onChange={(e) => {
                        setImages(e.target.files);
                      }}
                      accept="image/*"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                      multiple
                      min={1}
                      max={6}
                      placeholder="Enter product image"
                    />
                    <button
                      onClick={uploadImages}
                      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                      Upload
                    </button>
                  </div>
                </div>
                <div className="flex items-center  justify-evenly gap-4 flex-wrap">
                  {Product.image &&
                    Product.image?.map((url, index) => (
                      <div
                        key={url}
                        className="flex items-center justify-center relative border w-[30%] "
                      >
                        <img
                          src={url}
                          alt="listing image"
                          className="w-40 h-40 object-contain rounded-lg"
                        />
                        <MdDelete
                          onClick={() => handleRemoveImage(index)}
                          className="text-red-700 text-3xl cursor-pointer hover:text-red-500 absolute bottom-2 right-1 "
                        />
                      </div>
                    ))}
                </div>
                <div className=" grid grid-cols-2 items-center p-5 ">
                  <div className="mb-4 w-[20%]">
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
                      placeholder="Enter product price"
                    />
                  </div>
                  <div className="mb-4 w-[20%]">
                    <label
                      htmlFor="sellingPrice"
                      className="block text-gray-700 font-bold mb-2 whitespace-nowrap"
                    >
                      Selling Price
                    </label>
                    <input
                      type="number"
                      id="sellingPrice"
                      value={Product.sellingPrice}
                      onChange={handleOnChange}
                      className=" border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                      placeholder="Enter product selling price"
                    />
                  </div>
                  <div className="mb-4 w-[20%]">
                    <label
                      htmlFor="category"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Category
                    </label>
                    <select
                      value={Product.category}
                      id="category"
                      onChange={handleOnChange}
                      className="block text-gray-400 p-3   font-bold "
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
                  <div className="mb-4 w-[20%]">
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
