import { createOrder ,getOrderById, getTotalOrder} from "../controller/orderController.js";

import express from "express";

const orderRouter = express.Router();
// Create a new order
orderRouter.post("/create", createOrder);
// Get all orders for a user
orderRouter.get("/user/:userId", getOrderById);

// Get total orders
orderRouter.get("/total", getTotalOrder);

export default orderRouter;