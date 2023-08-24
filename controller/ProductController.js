import Product from "../models/ProductSchema.js";

export const createProduct = async (req, res) => {
  try {
    const productData = await Product.create(req.body);
    if (productData) {
      res
        .status(200)
        .json({ message: "Product Created SuccessFully", data: productData });
    }
  } catch (error) {
    console.log("error>>>", error);
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    if (allProducts) {
      res.status(200).json({
        message: "Products fetched SuccessFully",
        data: allProducts,
      });
    }
  } catch (error) {
    console.log("error>>>", error);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedProduct = await Product.findByIdAndDelete(
      id,
      { $set: req.body },
      { new: true }
    );
    if (updatedProduct) {
      res.status(200).json({
        message: "Product updated SuccessFully",
      });
    }
  } catch (error) {
    console.log("error>>>", error);
  }
};
