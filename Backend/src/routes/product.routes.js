import { Router } from "express";
import {
  AddProduct,
  EditProduct,
  deleteProduct,
  getAllProducts,
} from "../controllers/product.controller.js";
import { verifyjwt } from "../middlewares/auth.middleware.js";
import { adminVerify } from "../middlewares/admin.middleware.js";

const router = Router();

router.route("/add").post(verifyjwt, adminVerify, AddProduct);
router.route("/all-products").get(verifyjwt, adminVerify, getAllProducts);
router
  .route("/delete-product/:id")
  .delete(verifyjwt, adminVerify, deleteProduct);
router.route("/edit-product/:id").post(verifyjwt, adminVerify, EditProduct);

export default router;
