import React from "react";

const AddProduct = ({ onclose }) => {
  return (
    <div className="absolute  overflow-scroll bg-white/25 top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-center items-center">
      <div className="mx-auto mt-11 bg-white dark:bg-black/50 border-2 shadow-lg  backdrop:blur-3xl   p-4 w-full  relative">
        {/* <div className="">
          <button
            onClick={onclose}
            className="text-2xl text-black/50 absolute top-3 right-3 dark:text-white/50"
          >
            X
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-4">Add Product</h1>
        <form className="grid grid-cols-2 gap-3 w-full">
          <div className="mb-4">
            <label>Product Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label>Price</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label>Description</label>
            <textarea className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label>Image</label>
            <input
              type="file"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label>Category</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Books">Books</option>
            </select>
          </div>
          <div className="mb-4">
            <label>Quantity</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label>Status</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option value="">Select Status</option>
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
          <div className="mb-4">
            <label>Rating</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label>Discount</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label>Brand</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded"
            >
              Add Product
            </button>
          </div>
        </form> */}
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-bold mb-4">Add New Product</h1>
          <form className="max-w-md mx-auto">
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
