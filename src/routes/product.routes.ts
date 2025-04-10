import { Router } from "express";
import productController from "../controllers/product.controller";

const productRouter = Router();
productRouter.get("/", productController.getAllProducts);
productRouter.get("/search", productController.getProductsByProductName);
productRouter.get("/:id", productController.getProductById);
productRouter.post("/", productController.createProduct);
productRouter.put("/:id", productController.updateProductById);
productRouter.delete("/:id", productController.deleteProductById);

export default productRouter;
