import express from "express";
import {
  createCategory,
  getAllCategories,
} from "../controller/CategoryController.js";

const router = express.Router();

// CREATE
router.post("/", createCategory);

//GET
router.get("/", getAllCategories);

export default router;
