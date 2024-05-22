import { asyncHandler } from "../utils/asyncHandler.js";
import Product from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const AddProduct = asyncHandler(async (req, res) => {
  const {
    productName,
    description,
    category,
    price,
    quantity,
    image,
    brand,
    sellingPrice,
  } = req.body;

  if (
    !productName ||
    !description ||
    !category ||
    !price ||
    !quantity ||
    !brand ||
    !sellingPrice
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const exsistProduct = await Product.findOne({ productName });

  if (exsistProduct) {
    throw new ApiError(400, "Product already exists");
  }

  const product = await Product.create({
    productName,
    description,
    category,
    price,
    quantity,
    brand,
    image,
    sellingPrice,
  });

  if (!product) {
    throw new ApiError(400, "Product not created");
  }

  res.status(200).json(new ApiResponse({ product }));
});

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  return res.status(200).json(products);
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    throw new ApiError(404, "Product not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "product deleted successfully"));
});

const EditProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!product) {
    throw new ApiError(404, "Product not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "product updated successfully"));
});

export { AddProduct, getAllProducts, deleteProduct, EditProduct };
