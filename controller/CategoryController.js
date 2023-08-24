import Category from "../models/CategorySchema.js";

export const createCategory = async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    if (categoryData) {
      res
        .status(200)
        .json({ message: "Category Created SuccessFully", data: categoryData });
    }
  } catch (error) {
    console.log("error>>>", error);
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.find();
    if (allCategories) {
      res.status(200).json({
        message: "Categories fetched SuccessFully",
        data: allCategories,
      });
    }
  } catch (error) {
    console.log("error>>>", error);
  }
};
