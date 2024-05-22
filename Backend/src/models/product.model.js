import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sellingPrice: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: Array,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
