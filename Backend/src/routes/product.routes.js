import { Router } from "express";
import {
  AddProduct,
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
export default router;
