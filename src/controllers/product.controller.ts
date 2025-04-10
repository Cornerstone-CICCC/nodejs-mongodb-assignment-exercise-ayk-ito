import { Request, Response } from "express";
import { Product, IProduct } from "../models/product.model";
import { error } from "console";

// Get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "unable" });
  }
};

// Get product by id
const getProductById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Unable to get product" });
  }
};

// Get products by firstname
const getProductsByProductName = async (
  req: Request<{}, {}, {}, { productName: string }>,
  res: Response
) => {
  try {
    const { productName } = req.query;
    const products = await Product.find({
      productName: {
        $regex: productName,
        $options: "i",
      },
    });
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Unable to search products" });
  }
};

// Create new product
const createProduct = async (req: Request, res: Response) => {
  try {
    const { productName, productPrice } = req.body;
    const product = await Product.create({ productName, productPrice });
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Unable to create product" });
  }
};

//Update product by id
const updateProductById = async (
  req: Request<{ id: string }, {}, Partial<IProduct>>,
  res: Response
) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true, //return update data
    });
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Unable to update product" });
  }
};

//Delete product by id
const deleteProductById = async (
  req: Request<{ id: string }, {}, Partial<IProduct>>,
  res: Response
) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Unable to delete product" });
  }
};

export default {
  createProduct,
  getProductById,
  getProductsByProductName,
  getAllProducts,
  updateProductById,
  deleteProductById,
};
