import express from "express";
import { createProduct, getAllProducts } from "../controller/productController.js";

const productRouter = express.Router();

productRouter.post("/create",createProduct);
productRouter.get("/getAll", getAllProducts);

export default productRouter;