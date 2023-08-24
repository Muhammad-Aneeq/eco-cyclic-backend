import express from "express";
import {
  createProduct,
  getAllProducts,
  updateProduct,
} from "../controller/ProductController.js";

const router = express.Router();

// CREATE
router.post("/", createProduct);

//GET
router.get("/", getAllProducts);

//UPDATE
router.patch("/:id", updateProduct);

export default router;
